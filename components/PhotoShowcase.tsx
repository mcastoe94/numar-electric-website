"use client";

import { ImageSlideshow } from "./ImageSlideshow";

const showcaseHeight = "min(82dvh, 880px)";

export function PhotoShowcase() {
  return (
    <section
      aria-label="Project photo gallery"
      className="group relative w-full overflow-hidden bg-brand-dark"
      style={{ height: showcaseHeight }}
    >
      <ImageSlideshow
        className="absolute inset-0 z-0 h-full w-full"
        imageSizes="100vw"
        variant="hero"
      />
    </section>
  );
}
