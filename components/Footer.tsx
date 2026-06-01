import Link from "next/link";
import { Logo } from "./Logo";
import {
  EMAIL,
  PHONE_HREF,
  PHONE_NUMBER,
  SERVICE_AREAS,
  SERVICES,
} from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo variant="green" elevated />
            <p className="mt-6 max-w-xs text-sm leading-7 text-white/60">
              Arizona electrical contractor delivering reliable residential and
              commercial service with clean workmanship and honest communication.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg text-white">Services</h3>
            <ul className="mt-6 space-y-3">
              {SERVICES.map((service) => (
                <li key={service.title}>
                  <Link
                    href="#services"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg text-white">Service Areas</h3>
            <ul className="mt-6 space-y-3">
              {SERVICE_AREAS.map((area) => (
                <li key={area} className="text-sm text-white/60">
                  {area}, AZ
                </li>
              ))}
              <li className="text-sm text-white/60">Surrounding Arizona areas</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg text-white">Contact</h3>
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
              <li>Phoenix, Arizona</li>
              <li>Mon–Fri: 7:00 AM – 5:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/45">
            © {year} Numar Electric. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-white/45">
            <Link href="#contact" className="transition-colors hover:text-white">
              Request a Quote
            </Link>
            <Link href="#services" className="transition-colors hover:text-white">
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
