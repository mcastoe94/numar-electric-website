/**
 * OPTIONAL: Composites the Numar logo onto the fleet truck door (experimental).
 * The live slideshow uses the clean truck photo — only run this if you want to try a decal again.
 * Run: node scripts/composite-door-decal.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import PerspT from "perspective-transform";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const assetsDir =
  "C:/Users/owner/.cursor/projects/c-Users-owner-GitHub-numar-electric-website/assets";

function findAsset(fragment) {
  const name = fs.readdirSync(assetsDir).find((f) => f.includes(fragment));
  if (!name) throw new Error(`Asset not found: ${fragment}`);
  return path.join(assetsDir, name);
}

const truckPath = findAsset("10_14_38");
const logoPath = findAsset("NUMAR_ELECTRIC_GRN_LOGO");
const outPath = path.join(root, "public", "slideshow", "slide-4-fleet.png");

/** Remove black JPEG backdrop; keep brand green (#394439) via color distance. */
async function logoWithAlpha(inputPath) {
  const brand = { r: 57, g: 68, b: 57 };
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const dist = Math.hypot(r - brand.r, g - brand.g, b - brand.b);
    if (dist < 78) data[i + 3] = 255;
    else if (dist < 108) data[i + 3] = Math.round(255 * (1 - (dist - 78) / 30));
    else data[i + 3] = 0;
  }

  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  }).png();
}

/**
 * Perspective-warp logo to match the driver door plane (3/4 view, door recedes right).
 * Source rect -> trapezoid: right edge shorter, top edge slopes up toward the rear.
 */
async function warpLogo(logoSharp, targetWidth) {
  const resized = await logoSharp
    .resize({ width: targetWidth })
    .png()
    .toBuffer();
  const { width: w, height: h } = await sharp(resized).metadata();

  const src = [0, 0, w, 0, w, h, 0, h];
  const dst = [
    0,
    h * 0.03,
    w * 0.88,
    h * 0.01,
    w * 0.96,
    h,
    0,
    h * 0.99,
  ];
  const persp = PerspT(src, dst);

  const outW = Math.ceil(w * 1.02);
  const outH = Math.ceil(h * 1.04);
  const out = Buffer.alloc(outW * outH * 4, 0);
  const { data: srcData } = await sharp(resized).ensureAlpha().raw().toBuffer({
    resolveWithObject: true,
  });

  for (let y = 0; y < outH; y++) {
    for (let x = 0; x < outW; x++) {
      const [sx, sy] = persp.transform(x, y);
      if (sx < 0 || sy < 0 || sx >= w - 1 || sy >= h - 1) continue;

      const x0 = Math.floor(sx);
      const y0 = Math.floor(sy);
      const fx = sx - x0;
      const fy = sy - y0;
      const i = (y * outW + x) * 4;

      for (let c = 0; c < 4; c++) {
        const v00 = srcData[((y0 * w + x0) * 4) + c];
        const v10 = srcData[((y0 * w + x0 + 1) * 4) + c];
        const v01 = srcData[(((y0 + 1) * w + x0) * 4) + c];
        const v11 = srcData[(((y0 + 1) * w + x0 + 1) * 4) + c];
        out[i + c] = Math.round(
          v00 * (1 - fx) * (1 - fy) +
            v10 * fx * (1 - fy) +
            v01 * (1 - fx) * fy +
            v11 * fx * fy,
        );
      }
    }
  }

  const warped = await sharp(out, {
    raw: { width: outW, height: outH, channels: 4 },
  })
    .png()
    .toBuffer();

  const { data: px, info: wInfo } = await sharp(warped)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  for (let i = 3; i < px.length; i += 4) {
    if (px[i] < 140) px[i] = 0;
  }

  return sharp(px, {
    raw: { width: wInfo.width, height: wInfo.height, channels: 4 },
  })
    .trim()
    .png()
    .toBuffer();
}

async function prepareDecal(decalBuf) {
  const trimmed = await sharp(decalBuf).trim().png().toBuffer();
  const meta = await sharp(trimmed).metadata();
  const decal = await sharp(trimmed)
    .modulate({ brightness: 0.9, saturation: 1.1 })
    .png()
    .toBuffer();
  return { meta, decal };
}

async function main() {
  const truck = sharp(truckPath);
  const { width: w, height: h } = await truck.metadata();

  const logoBase = await logoWithAlpha(logoPath);
  const decalBaseW = Math.round(w * 0.152);
  const warped = await warpLogo(logoBase, decalBaseW);
  const { meta, decal: decalLayer } = await prepareDecal(warped);

  const left = Math.round(w * 0.352);
  const top = Math.round(h * 0.532);

  await truck
    .composite([
      {
        input: decalLayer,
        left,
        top,
        blend: "over",
      },
    ])
    .png()
    .toFile(outPath);

  console.log(`Saved ${outPath}`);
  console.log(`Decal ${meta.width}x${meta.height} at (${left}, ${top})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
