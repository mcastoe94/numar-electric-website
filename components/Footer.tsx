import Link from "next/link";
import { Logo } from "./Logo";
import {
  BUSINESS_ADDRESS,
  BUSINESS_HOURS,
  BUSINESS_MAP_EMBED_SRC,
  BUSINESS_MAP_LINK,
  CITY_PAGE_LINKS,
  EMAIL,
  LICENSE_CLASS,
  PHONE_HREF,
  PHONE_NUMBER,
  ROC_NUMBER,
  SERVICE_PAGE_HREFS,
  SERVICES,
} from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="green" elevated />
            <p className="mt-6 max-w-xs text-sm leading-[1.7] text-white/60">
              Arizona electrical contractor delivering reliable residential and
              commercial service with clean workmanship and honest communication.
            </p>
            <p className="mt-4 text-sm text-white/45">
              ROC #{ROC_NUMBER} · {LICENSE_CLASS}
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg leading-snug text-white">Services</h3>
            <ul className="mt-6 space-y-3">
              {SERVICES.map((service) => (
                <li key={service.title}>
                  <Link
                    href={SERVICE_PAGE_HREFS[service.title]}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div id="service-areas">
            <h3 className="font-heading text-lg leading-snug text-white">Service Areas</h3>
            <ul className="mt-6 space-y-3">
              {CITY_PAGE_LINKS.map((city) => (
                <li key={city.href}>
                  <Link
                    href={city.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {city.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg leading-snug text-white">Contact</h3>
            <ul className="mt-6 space-y-3 text-sm text-white/60">
              <li>
                <a href={PHONE_HREF} className="transition-colors hover:text-white">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-white">
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {BUSINESS_ADDRESS}
                </a>
              </li>
              <li>{BUSINESS_HOURS.replace("Monday–Friday, ", "Mon–Fri: ")}</li>
            </ul>
            <div className="mt-6 aspect-square w-full max-w-[240px] overflow-hidden border border-white/15 bg-brand">
              <iframe
                title="Numar Electric office location map"
                src={BUSINESS_MAP_EMBED_SRC}
                className="h-full w-full border-0 grayscale-[0.15]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/45">
            © {year} Numar Electric. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-white/45">
            <Link href="/#contact" className="transition-colors duration-300 hover:text-white">
              Request a Quote
            </Link>
            <Link href="/#services" className="transition-colors duration-300 hover:text-white">
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
