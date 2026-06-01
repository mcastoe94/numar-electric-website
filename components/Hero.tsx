"use client";

import Link from "next/link";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";
import { ImageSlideshow } from "./ImageSlideshow";

const heroHeight = "calc(100dvh - var(--site-header-height))";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full overflow-hidden text-white"
      style={{ height: heroHeight }}
    >
      <ImageSlideshow
        className="absolute inset-0 z-0 h-full w-full"
        imageSizes="100vw"
        variant="hero"
      />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-accent sm:mb-8">
            <BoltIcon />
            Arizona Electrical Contractor
          </p>

          <h1
            id="hero-heading"
            className="font-heading text-[2.5rem] leading-[1.08] sm:text-6xl lg:text-7xl lg:leading-[1.05]"
          >
            Arizona Electrical Services You Can Trust
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 sm:mt-8 sm:text-xl sm:leading-9">
            Reliable residential and commercial electrical work backed by clean
            craftsmanship, honest communication, and professional service.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-sm bg-accent px-10 py-4 text-sm font-medium tracking-wide text-brand-dark transition-all hover:bg-[#d4b87a]"
            >
              Request a Quote
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/35 bg-black/20 px-10 py-4 text-sm font-medium tracking-wide text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-black/30"
            >
              <PhoneIcon />
              Call Numar Electric
            </a>
          </div>

          <p className="mt-8 text-sm tracking-wide text-white/60 sm:mt-10">
            Serving Phoenix, Scottsdale, and surrounding Arizona communities ·{" "}
            <a href={PHONE_HREF} className="text-accent transition-colors hover:text-white">
              {PHONE_NUMBER}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

function BoltIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}
