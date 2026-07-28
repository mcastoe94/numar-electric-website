import Link from "next/link";
import { CITY_PAGE_LINKS } from "@/lib/constants";
import { SectionHeading } from "./SectionHeading";

export function ServiceAreas() {
  return (
    <section id="service-areas" className="bg-surface-muted py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Service Areas"
          title="Serving Communities Across the Valley"
          description="Numar Electric proudly serves homeowners and businesses throughout the Phoenix metro and surrounding Arizona areas."
        />

        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {CITY_PAGE_LINKS.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="border border-zinc-200 bg-white px-6 py-3 text-sm font-medium tracking-wide text-brand-dark transition-colors hover:border-brand hover:text-brand"
            >
              {area.label}
            </Link>
          ))}
          <span className="border border-dashed border-zinc-300 bg-white px-6 py-3 text-sm tracking-wide text-zinc-500">
            & Surrounding Arizona Areas
          </span>
        </div>

        <div className="mx-auto mt-14 max-w-3xl border border-zinc-200 bg-white p-10 text-center">
          <p className="text-[0.9875rem] leading-[1.75] text-zinc-600 sm:text-base sm:leading-[1.7]">
            Not sure if we service your area? Contact Numar Electric with your
            project location and we&apos;ll confirm availability and schedule a
            consultation.
          </p>
        </div>
      </div>
    </section>
  );
}
