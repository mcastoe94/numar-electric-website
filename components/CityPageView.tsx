import Image from "next/image";
import Link from "next/link";
import {
  BUSINESS_CITY,
  BUSINESS_COUNTRY,
  BUSINESS_HOURS,
  BUSINESS_POSTAL_CODE,
  BUSINESS_REGION,
  BUSINESS_STREET,
  COMPANY_NAME,
  EMAIL,
  LEGAL_NAME,
  LICENSE_CLASS,
  PHONE_HREF,
  PHONE_NUMBER,
  ROC_NUMBER,
  SITE_URL,
} from "@/lib/constants";
import { fillContentTokens, RichContent } from "@/lib/rich-content";
import type { CityPage } from "@/lib/city-pages";
import type { ServiceSection } from "@/lib/service-pages";

function SectionBlock({
  section,
  showHeading,
}: {
  section: ServiceSection;
  showHeading: boolean;
}) {
  if (section.type === "prose") {
    return (
      <section className="space-y-5">
        {showHeading ? (
          <h2 className="font-heading text-[1.75rem] leading-[1.15] text-brand-dark sm:text-4xl sm:leading-[1.12]">
            {section.heading}
          </h2>
        ) : null}
        {section.paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="max-w-3xl text-[0.9875rem] leading-[1.75] text-zinc-600 sm:text-lg sm:leading-[1.7]"
          >
            <RichContent>{paragraph}</RichContent>
          </p>
        ))}
      </section>
    );
  }

  if (section.type === "list") {
    return (
      <section className="space-y-5">
        {showHeading ? (
          <h2 className="font-heading text-[1.75rem] leading-[1.15] text-brand-dark sm:text-4xl sm:leading-[1.12]">
            {section.heading}
          </h2>
        ) : null}
        {section.intro ? (
          <p className="max-w-3xl text-[0.9875rem] leading-[1.75] text-zinc-600 sm:text-lg sm:leading-[1.7]">
            <RichContent>{section.intro}</RichContent>
          </p>
        ) : null}
        <div className="space-y-6">
          {section.groups.map((group) => (
            <div key={group.title ?? group.items.join("|")}>
              {group.title ? (
                <h3 className="mb-3 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-accent sm:text-xs">
                  {group.title}
                </h3>
              ) : null}
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[0.9875rem] leading-[1.7] text-zinc-600 sm:text-lg sm:leading-[1.7]"
                  >
                    <span
                      className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <span>
                      <RichContent>{item}</RichContent>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (section.type === "faq") {
    return (
      <section className="space-y-6">
        {showHeading ? (
          <h2 className="font-heading text-[1.75rem] leading-[1.15] text-brand-dark sm:text-4xl sm:leading-[1.12]">
            {section.heading}
          </h2>
        ) : null}
        <div className="space-y-4">
          {section.items.map((item) => (
            <details
              key={item.question}
              className="group border border-zinc-200 bg-white px-5 py-4"
            >
              <summary className="cursor-pointer list-none text-[0.9875rem] font-medium leading-snug text-brand-dark sm:text-base [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {fillContentTokens(item.question)}
                  <span className="text-accent transition-transform group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 max-w-3xl text-[0.9875rem] leading-[1.75] text-zinc-600">
                <RichContent>{item.answer}</RichContent>
              </p>
            </details>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="border border-zinc-200 bg-surface-muted px-6 py-8 sm:px-8">
      {showHeading ? (
        <h2 className="font-heading text-[1.75rem] leading-[1.15] text-brand-dark sm:text-4xl sm:leading-[1.12]">
          {section.heading}
        </h2>
      ) : null}
      <p className="mt-4 max-w-3xl text-[0.9875rem] leading-[1.75] text-zinc-600 sm:text-lg sm:leading-[1.7]">
        <RichContent>{section.body}</RichContent>
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={PHONE_HREF}
          className="inline-flex items-center justify-center rounded-sm bg-brand px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-all hover:bg-brand-dark"
        >
          Call {PHONE_NUMBER}
        </a>
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center rounded-sm border border-zinc-300 bg-white px-7 py-3.5 text-sm font-medium tracking-wide text-brand-dark transition-colors hover:border-brand hover:text-brand"
        >
          Request a Quote
        </Link>
      </div>
    </section>
  );
}

function buildJsonLd(page: CityPage) {
  const faqSection = page.sections.find((section) => section.type === "faq");
  const faqs =
    faqSection && faqSection.type === "faq"
      ? faqSection.items.map((item) => ({
          "@type": "Question",
          name: fillContentTokens(item.question),
          acceptedAnswer: {
            "@type": "Answer",
            text: fillContentTokens(item.answer),
          },
        }))
      : [];

  const pageUrl = `${SITE_URL}/${page.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Electrician",
        "@id": `${SITE_URL}/#electrician`,
        name: COMPANY_NAME,
        legalName: LEGAL_NAME,
        telephone: PHONE_NUMBER,
        email: EMAIL,
        url: SITE_URL,
        image: `${SITE_URL}/numar-electric-logo-green.png`,
        logo: `${SITE_URL}/numar-electric-logo-green.png`,
        openingHours: BUSINESS_HOURS,
        address: {
          "@type": "PostalAddress",
          streetAddress: BUSINESS_STREET,
          addressLocality: BUSINESS_CITY,
          addressRegion: BUSINESS_REGION,
          postalCode: BUSINESS_POSTAL_CODE,
          addressCountry: BUSINESS_COUNTRY,
        },
        areaServed: {
          "@type": "City",
          name: page.city,
          containedInPlace: {
            "@type": "State",
            name: "Arizona",
          },
        },
        identifier: `ROC #${ROC_NUMBER}`,
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "ROC License",
            value: ROC_NUMBER,
          },
          {
            "@type": "PropertyValue",
            name: "License Classification",
            value: LICENSE_CLASS,
          },
        ],
      },
      {
        "@type": "Service",
        name: `Electrical services in ${page.city}, Arizona`,
        serviceType: "Residential and commercial electrical contractor services",
        provider: { "@id": `${SITE_URL}/#electrician` },
        areaServed: {
          "@type": "City",
          name: page.city,
        },
        description: fillContentTokens(page.description),
        url: pageUrl,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Service Areas",
            item: `${SITE_URL}/#service-areas`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: page.city,
            item: pageUrl,
          },
        ],
      },
      ...(faqs.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: faqs,
            },
          ]
        : []),
    ],
  };
}

export function CityPageView({ page }: { page: CityPage }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(page)) }}
      />

      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-zinc-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-brand">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/#service-areas" className="transition-colors hover:text-brand">
                  Service Areas
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-brand-dark">{page.city}</li>
            </ol>
          </nav>
          <p className="mb-4 text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-accent sm:text-xs sm:tracking-[0.22em]">
            Electrician in {page.city}, AZ · ROC #{ROC_NUMBER}
          </p>
          <h1 className="font-heading max-w-3xl text-[2.125rem] leading-[1.15] text-brand-dark sm:text-5xl sm:leading-[1.1]">
            {page.h1}
          </h1>
          <div className="mt-6 max-w-2xl space-y-5">
            {page.intro.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[0.9875rem] leading-[1.75] text-zinc-600 sm:text-lg sm:leading-[1.7]"
              >
                <RichContent>{paragraph}</RichContent>
              </p>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[21/9] overflow-hidden bg-brand-dark">
            <Image
              src={page.image.src}
              alt={page.image.alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-16 lg:px-8">
          <div className="space-y-14">
            {page.sections.map((section, index) => {
              const previous = page.sections[index - 1];
              const showHeading =
                !previous || previous.heading !== section.heading;

              return (
                <SectionBlock
                  key={`${section.type}-${section.heading}-${index}`}
                  section={section}
                  showHeading={showHeading}
                />
              );
            })}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="border border-zinc-200 p-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                Related Services
              </p>
              <ul className="mt-4 space-y-3">
                {page.related.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-brand-dark transition-colors hover:text-brand"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-zinc-200 bg-surface-muted p-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                Get a Quote
              </p>
              <a
                href={PHONE_HREF}
                className="font-heading mt-3 block text-[1.35rem] leading-snug text-brand-dark transition-colors hover:text-brand sm:text-2xl"
              >
                {PHONE_NUMBER}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-2 block text-sm text-zinc-600 transition-colors hover:text-brand"
              >
                {EMAIL}
              </a>
              <p className="mt-3 text-sm leading-[1.7] text-zinc-600">{BUSINESS_HOURS}</p>
              <Link
                href="/#contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-sm bg-brand px-5 py-3 text-sm font-medium tracking-wide text-white transition-all hover:bg-brand-dark"
              >
                Request a Quote
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
