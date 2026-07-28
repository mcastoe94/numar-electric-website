import Link from "next/link";
import {
  EMAIL,
  PHONE_HREF,
  PHONE_NUMBER,
  WORKMANSHIP_WARRANTY,
} from "@/lib/constants";

export function fillContentTokens(text: string) {
  return text
    .replaceAll("{{PHONE}}", PHONE_NUMBER)
    .replaceAll("{{EMAIL}}", EMAIL)
    .replaceAll("[PHONE]", PHONE_NUMBER)
    .replaceAll("[EMAIL]", EMAIL)
    .replaceAll("[WARRANTY]", WORKMANSHIP_WARRANTY)
    .replaceAll("{{WARRANTY}}", WORKMANSHIP_WARRANTY);
}

type RichSegment =
  | { type: "text"; value: string }
  | { type: "phone" }
  | { type: "email" }
  | { type: "link"; label: string; href: string };

function parseRichText(raw: string): RichSegment[] {
  const filled = fillContentTokens(raw);
  const segments: RichSegment[] = [];
  const pattern =
    /\[\[([^\]]+)\|([^\]]+)\]\]|(\(\d{3}\) \d{3}-\d{4})|(info@numarelectric\.com)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(filled)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: "text", value: filled.slice(lastIndex, match.index) });
    }
    if (match[1] && match[2]) {
      segments.push({ type: "link", label: match[1], href: match[2] });
    } else if (match[3]) {
      segments.push({ type: "phone" });
    } else if (match[4]) {
      segments.push({ type: "email" });
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < filled.length) {
    segments.push({ type: "text", value: filled.slice(lastIndex) });
  }

  return segments.length ? segments : [{ type: "text", value: filled }];
}

export function RichContent({ children }: { children: string }) {
  const segments = parseRichText(children);

  return (
    <>
      {segments.map((segment, index) => {
        if (segment.type === "phone") {
          return (
            <a
              key={`phone-${index}`}
              href={PHONE_HREF}
              className="font-medium text-brand transition-colors hover:text-brand-dark"
            >
              {PHONE_NUMBER}
            </a>
          );
        }
        if (segment.type === "email") {
          return (
            <a
              key={`email-${index}`}
              href={`mailto:${EMAIL}`}
              className="font-medium text-brand transition-colors hover:text-brand-dark"
            >
              {EMAIL}
            </a>
          );
        }
        if (segment.type === "link") {
          return (
            <Link
              key={`link-${index}`}
              href={segment.href}
              className="font-medium text-brand transition-colors hover:text-brand-dark"
            >
              {segment.label}
            </Link>
          );
        }
        return <span key={`text-${index}`}>{segment.value}</span>;
      })}
    </>
  );
}
