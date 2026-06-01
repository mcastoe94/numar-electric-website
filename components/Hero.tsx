import Link from "next/link";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-brand-dark text-white"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-[linear-gradient(145deg,#394439_0%,#111111_60%,#1a1f1a_100%)]" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-accent/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-4xl">
          <p className="mb-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-accent">
            <BoltIcon />
            Arizona Electrical Contractor
          </p>

          <h1
            id="hero-heading"
            className="font-heading text-[2.75rem] leading-[1.08] sm:text-6xl lg:text-7xl lg:leading-[1.05]"
          >
            Arizona Electrical Services You Can Trust
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl sm:leading-9">
            Reliable residential and commercial electrical work backed by clean
            craftsmanship, honest communication, and professional service.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-sm bg-accent px-10 py-4 text-sm font-medium tracking-wide text-brand-dark transition-all hover:bg-[#d4b87a]"
            >
              Request a Quote
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/30 px-10 py-4 text-sm font-medium tracking-wide text-white transition-all hover:border-white/50 hover:bg-white/5"
            >
              <PhoneIcon />
              Call Numar Electric
            </a>
          </div>

          <p className="mt-10 text-sm tracking-wide text-white/50">
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
