"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { HOME_SLIDESHOW } from "@/lib/constants";

const INTERVAL_MS = 5500;

type ImageSlideshowProps = {
  className?: string;
  overlay?: ReactNode;
  imageSizes?: string;
  showLabels?: boolean;
  variant?: "default" | "hero";
};

export function ImageSlideshow({
  className = "",
  overlay,
  imageSizes = "(max-width: 1024px) 100vw, 50vw",
  showLabels = true,
  variant = "default",
}: ImageSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const isHero = variant === "hero";
  const activeSlide = HOME_SLIDESHOW[activeIndex];
  const lightHeroOverlay =
    isHero && "heroOverlay" in activeSlide && activeSlide.heroOverlay === "light";

  const slideCount = HOME_SLIDESHOW.length;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(((index % slideCount) + slideCount) % slideCount);
    },
    [slideCount],
  );

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const id = window.setInterval(next, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, reducedMotion, next]);

  useEffect(() => {
    HOME_SLIDESHOW.forEach((slide) => {
      const img = new window.Image();
      img.src = slide.src;
    });
  }, []);

  return (
    <div
      className={`relative h-full min-h-full overflow-hidden bg-brand-dark ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Project photo slideshow"
    >
      {HOME_SLIDESHOW.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== activeIndex}
        >
          {isHero ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={slide.src}
              alt={slide.alt}
              className="h-full w-full object-cover"
              style={{ objectPosition: slide.objectPosition ?? "center" }}
              fetchPriority={index === 0 ? "high" : "low"}
            />
          ) : (
            <div className="relative h-full w-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                style={{ objectPosition: slide.objectPosition ?? "center" }}
                sizes={imageSizes}
                priority={index === 0}
              />
            </div>
          )}
        </div>
      ))}

      {isHero ? (
        <>
          <div
            className={`absolute inset-0 bg-gradient-to-r transition-opacity duration-700 ${
              lightHeroOverlay
                ? "from-brand-dark/45 via-brand-dark/15 to-transparent"
                : "from-brand-dark/70 via-brand-dark/35 to-transparent"
            }`}
            aria-hidden="true"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-700 ${
              lightHeroOverlay
                ? "from-brand-dark/35 via-transparent to-transparent"
                : "from-brand-dark/55 via-transparent to-transparent"
            }`}
            aria-hidden="true"
          />
        </>
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-brand-dark/10"
          aria-hidden="true"
        />
      )}

      {overlay ? (
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-end">
          {overlay}
        </div>
      ) : null}

      {isHero ? (
        <p
          className="absolute bottom-14 left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/35 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm sm:bottom-16"
          aria-hidden="true"
        >
          {activeSlide.label}
        </p>
      ) : null}

      {showLabels && !isHero ? (
        <div className="absolute left-0 right-0 top-4 z-20 flex flex-wrap justify-center gap-2 px-4 sm:top-6">
          {HOME_SLIDESHOW.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => goTo(index)}
              className={`rounded-full px-3 py-1 text-xs font-medium tracking-wide transition-colors ${
                index === activeIndex
                  ? "bg-accent text-brand-dark"
                  : "bg-white/20 text-white hover:bg-white/35"
              }`}
              aria-label={`Show slide ${index + 1}: ${slide.label}`}
              aria-current={index === activeIndex ? "true" : undefined}
            >
              {slide.label}
            </button>
          ))}
        </div>
      ) : null}

      <div
        className={`absolute left-0 right-0 z-20 flex items-center justify-center gap-2.5 ${
          isHero ? "bottom-6 sm:bottom-8" : "bottom-4"
        }`}
      >
        {HOME_SLIDESHOW.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goTo(index)}
            className={`rounded-full transition-all duration-300 ${
              isHero
                ? index === activeIndex
                  ? "h-0.5 w-8 bg-white/80"
                  : "h-0.5 w-5 bg-white/35 hover:bg-white/50"
                : index === activeIndex
                  ? "h-0.5 w-8 bg-accent"
                  : "h-0.5 w-5 bg-white/40 hover:bg-white/65"
            }`}
            aria-label={`Show slide ${index + 1}: ${slide.label}`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-2 sm:px-4">
        <button
          type="button"
          onClick={prev}
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-sm border border-white/25 bg-brand-dark/50 text-white backdrop-blur-sm transition-colors hover:bg-brand-dark/80"
          aria-label="Previous slide"
        >
          <ChevronIcon direction="left" />
        </button>
        <button
          type="button"
          onClick={next}
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-sm border border-white/25 bg-brand-dark/50 text-white backdrop-blur-sm transition-colors hover:bg-brand-dark/80"
          aria-label="Next slide"
        >
          <ChevronIcon direction="right" />
        </button>
      </div>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {activeIndex + 1} of {slideCount}: {HOME_SLIDESHOW[activeIndex].label}
      </p>
    </div>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
