import Image from "next/image";
import Link from "next/link";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";

export function About() {
  return (
    <section
      id="about"
      className="flex min-h-[calc(100dvh-var(--site-header-height))] flex-col justify-center bg-white pt-12 pb-24 sm:pt-16 sm:pb-32"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 lg:pb-4">
          <div className="lg:-mt-8">
            <p className="mb-4 text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-accent sm:text-xs sm:tracking-[0.22em]">
              About Numar Electric
            </p>
            <h1 className="font-heading max-w-xl text-[2.125rem] leading-[1.18] text-brand-dark sm:text-5xl sm:leading-[1.12] lg:text-[3.15rem] lg:leading-[1.1]">
              Reliable Work.
              <br />
              Honest Communication.
            </h1>
            <div className="mt-8 max-w-xl space-y-5 text-[0.9875rem] leading-[1.78] text-zinc-600 text-pretty sm:text-lg sm:leading-[1.75]">
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
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-sm bg-brand px-8 py-3.5 text-sm font-medium leading-none tracking-[0.02em] text-white transition-colors duration-300 hover:bg-brand-dark"
              >
                Request a Quote
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex min-h-12 items-center justify-center rounded-sm border border-zinc-300 px-8 py-3.5 text-sm font-medium leading-none tracking-[0.02em] text-brand-dark transition-colors duration-300 hover:border-brand hover:text-brand"
              >
                Call {PHONE_NUMBER}
              </a>
            </div>
          </div>

          <div className="relative md:pt-7 lg:-mt-6">
            <div className="group relative mb-[4.75rem] h-[min(37rem,calc(100dvh-var(--site-header-height)-9rem))] overflow-hidden bg-brand-dark shadow-2xl sm:h-[min(39.5rem,calc(100dvh-var(--site-header-height)-8rem))]">
              <Image
                src="/commercial-electrical-work.png"
                alt="Commercial electrical conduit and panel rough-in installation"
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-9 pb-12 sm:p-11 sm:pb-14">
                <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-accent sm:text-xs sm:tracking-[0.22em]">
                  Arizona Owned
                </p>
                <p className="font-heading mt-3.5 max-w-md text-2xl leading-[1.22] text-white sm:text-[1.75rem]">
                  Professional work from a contractor you can trust.
                </p>
                <ul className="mt-6 space-y-2.5 text-sm leading-7 text-white/72">
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
            <div className="absolute bottom-0 left-0 border border-zinc-200 bg-white px-7 py-4 shadow-lg">
              <p className="font-heading text-3xl text-brand sm:text-4xl">15+</p>
              <p className="mt-1 text-sm leading-snug text-zinc-600">
                Years of combined field experience
              </p>
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
