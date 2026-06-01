import type { ReactElement } from "react";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { SectionHeading } from "./SectionHeading";

const ICONS: Record<(typeof SERVICES)[number]["icon"], ReactElement> = {
  home: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path d="M4 10.5L12 4l8 6.5V20a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-9.5z" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path d="M4 20V8l8-4 8 4v12M8 20v-4h8v4M10 10h1M13 10h1M10 13h1M13 13h1" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  ),
  panel: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M9 8h6M9 12h6M9 16h3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  ),
  ev: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path d="M7 17h10M5 11h14l-1 6H6l-1-6zM8 11V8a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.75" />
      <path d="M13 2l1 3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  ),
  repair: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path d="M14.7 6.3a4 4 0 00-5.4 5.4L4 17l3 3 6.3-5.3a4 4 0 005.4-5.4l-2.1 2.1-3.3-3.3 2.1-2.1z" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  ),
  light: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path d="M9 18h6M10 22h4M12 3a6 6 0 016 6c0 2.2-1.2 4.1-3 5.2V16H9v-1.8A6 6 0 0112 3z" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  ),
  remodel: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path d="M3 21l9-9 3 3-9 9H3v-3zM14 3l7 7-2 2-7-7 2-2z" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  ),
  construction: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path d="M2 20h20M6 20V10l6-4 6 4v10M10 20v-5h4v5" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  ),
};

const SERVICE_ANCHORS: Partial<Record<(typeof SERVICES)[number]["title"], string>> = {
  "Residential Electrical": "residential",
  "Commercial Electrical": "commercial",
};

export function Services() {
  return (
    <section id="services" className="bg-surface-muted py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Electrical Solutions for Arizona Homes & Businesses"
          description="From everyday repairs to full-scale commercial projects, Numar Electric delivers dependable electrical work with a focus on safety, clarity, and clean results."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              id={SERVICE_ANCHORS[service.title]}
              className="group flex flex-col border border-zinc-200/80 bg-white p-7 transition-all duration-300 hover:border-brand/20 hover:shadow-[0_8px_30px_rgba(57,68,57,0.08)]"
            >
              <div className="mb-6 inline-flex h-11 w-11 items-center justify-center text-brand transition-colors group-hover:text-accent">
                {ICONS[service.icon]}
              </div>
              <h3 className="font-heading text-xl text-brand-dark">{service.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-zinc-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-sm bg-brand px-10 py-4 text-sm font-medium tracking-wide text-white transition-all hover:bg-brand-dark"
          >
            Get a Service Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
