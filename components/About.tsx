import Link from "next/link";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="About Numar Electric"
              title="Built on Reliable Work and Straightforward Communication"
              align="left"
            />
            <div className="mt-8 space-y-5 text-base leading-8 text-zinc-600 sm:text-lg sm:leading-8">
              <p>
                Numar Electric is an Arizona electrical contractor focused on doing
                the job right — with clear timelines, honest recommendations, and
                workmanship you can feel confident about long after we leave the site.
              </p>
              <p>
                We serve homeowners, business owners, general contractors, and
                property managers across Arizona with residential and commercial
                electrical services tailored to each property&apos;s needs.
              </p>
              <p>
                Whether you need a panel upgrade, new construction wiring, lighting
                design, or emergency troubleshooting, our team brings a professional,
                safety-first approach to every project.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-sm bg-brand px-8 py-4 text-sm font-medium tracking-wide text-white transition-all hover:bg-brand-dark"
              >
                Schedule a Consultation
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center rounded-sm border border-zinc-300 px-8 py-4 text-sm font-medium tracking-wide text-brand-dark transition-colors hover:border-brand hover:text-brand"
              >
                Call {PHONE_NUMBER}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden bg-brand-dark shadow-2xl">
              <div className="absolute inset-0 bg-[linear-gradient(160deg,#394439,#111111)]" />
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
                aria-hidden="true"
              />
              <div className="relative flex h-full flex-col justify-end p-10 sm:p-12">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
                  Arizona Owned
                </p>
                <p className="font-heading mt-4 text-3xl leading-tight text-white sm:text-4xl">
                  Professional electrical work with a local contractor you can trust.
                </p>
                <ul className="mt-8 space-y-3.5 text-sm leading-6 text-white/72">
                  <li className="flex items-center gap-3">
                    <Dot /> Licensed & insured electrical contractor
                  </li>
                  <li className="flex items-center gap-3">
                    <Dot /> Residential & commercial expertise
                  </li>
                  <li className="flex items-center gap-3">
                    <Dot /> Code-compliant, safety-focused installs
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="absolute -bottom-6 -left-6 hidden border border-zinc-200 bg-white px-8 py-5 shadow-lg sm:block"
              aria-hidden="true"
            >
              <p className="font-heading text-4xl text-brand">15+</p>
              <p className="mt-1 text-sm text-zinc-600">Years of combined field experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />;
}
