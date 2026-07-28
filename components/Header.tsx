"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { NAV_LINKS, PHONE_HREF, PHONE_NUMBER, SERVICE_PAGE_HREFS, SERVICES } from "@/lib/constants";

function resetLandingScroll() {
  const html = document.documentElement;
  const previous = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  html.style.scrollBehavior = previous;
  if (window.location.hash) {
    window.history.replaceState(null, "", "/");
  }
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-zinc-200/70 bg-white/97 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-md"
          : "border-transparent bg-white"
      }`}
    >
      <div className="mx-auto flex h-[var(--site-header-height)] max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav
          className="hidden items-center gap-12 xl:gap-14 lg:flex"
          aria-label="Main navigation"
        >
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-[0.9375rem] font-medium tracking-[0.02em] text-zinc-600 transition-colors duration-300 hover:text-brand"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((open) => !open)}
            >
              Services
              <ChevronIcon
                className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen ? (
              <div className="absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-5">
                <div className="rounded-sm border border-zinc-200 bg-white p-2 shadow-xl">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.title}
                      href={SERVICE_PAGE_HREFS[service.title]}
                      className="block rounded-sm px-3 py-2.5 text-sm text-zinc-600 transition-colors duration-200 hover:bg-surface-muted hover:text-brand"
                      onClick={() => setServicesOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className="text-[0.9375rem] font-medium tracking-[0.02em] text-zinc-600 transition-colors duration-300 hover:text-brand"
              onClick={() => {
                if (link.href === "/") resetLandingScroll();
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-sm bg-brand px-7 py-3.5 text-sm font-medium leading-none tracking-[0.02em] text-white transition-colors duration-300 hover:bg-brand-dark"
          >
            Request a Quote
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-sm border border-zinc-200 text-brand-dark transition-colors duration-300 hover:border-brand/40 lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 top-[var(--site-header-height)] z-40 bg-white lg:hidden">
          <nav
            className="flex h-full flex-col overflow-y-auto px-4 py-8 sm:px-6"
            aria-label="Mobile navigation"
          >
            <details className="group border-b border-zinc-100 pb-4">
              <summary className="font-heading flex cursor-pointer list-none items-center justify-between py-3 text-lg text-brand-dark [&::-webkit-details-marker]:hidden">
                Services
                <ChevronIcon className="transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="mt-2 space-y-1 pl-1">
                {SERVICES.map((service) => (
                  <Link
                    key={service.title}
                    href={SERVICE_PAGE_HREFS[service.title]}
                    className="block rounded-sm px-3 py-3 text-sm text-zinc-600 transition-colors duration-200 hover:bg-surface-muted hover:text-brand"
                    onClick={() => setMobileOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </details>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="font-heading border-b border-zinc-100 py-4 text-lg text-brand-dark transition-colors duration-200 hover:text-brand"
                onClick={() => {
                  if (link.href === "/") resetLandingScroll();
                  setMobileOpen(false);
                }}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-10 space-y-3">
              <Link
                href="#contact"
                className="flex w-full items-center justify-center rounded-sm bg-brand px-5 py-4 text-sm font-medium leading-none tracking-[0.02em] text-white transition-colors duration-300 hover:bg-brand-dark"
                onClick={() => setMobileOpen(false)}
              >
                Request a Quote
              </Link>
              <a
                href={PHONE_HREF}
                className="flex w-full items-center justify-center gap-2 rounded-sm border border-brand px-5 py-4 text-sm font-medium leading-none tracking-[0.02em] text-brand transition-colors duration-300 hover:bg-brand hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                <PhoneIcon />
                Call {PHONE_NUMBER}
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}
