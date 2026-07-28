export const COMPANY_NAME = "Numar Electric";
export const LEGAL_NAME = "Numar Electric Corporation";
export const PHONE_NUMBER = "(480) 201-8656";
export const PHONE_HREF = "tel:+14802018656";
export const EMAIL = "info@numarelectric.com";
export const ROC_NUMBER = "366059";
export const LICENSE_CLASS = "CR-11";
export const BUSINESS_HOURS = "Monday–Friday, 7:00 AM–5:00 PM";
export const WORKMANSHIP_WARRANTY = "1 year";
export const SITE_URL = "https://www.numarelectric.com";
export const BUSINESS_CITY = "Scottsdale";
export const BUSINESS_REGION = "AZ";
export const BUSINESS_COUNTRY = "US";
export const BUSINESS_STREET = "8350 E Raintree Dr Ste 245";
export const BUSINESS_POSTAL_CODE = "85260";
export const BUSINESS_ADDRESS = `${BUSINESS_STREET}, ${BUSINESS_CITY}, ${BUSINESS_REGION} ${BUSINESS_POSTAL_CODE}`;
export const BUSINESS_MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=8350+E+Raintree+Dr+Ste+245+Scottsdale+AZ+85260&z=15&output=embed";
export const BUSINESS_MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=8350+E+Raintree+Dr+Ste+245+Scottsdale+AZ+85260";

export const NAV_LINKS = [
  { label: "Contact", href: "/#contact" },
  { label: "Why Us", href: "/#why-us" },
  { label: "About", href: "/" },
] as const;

export const SERVICES = [
  {
    title: "Commercial Electrical",
    description:
      "Reliable electrical solutions for offices, retail spaces, warehouses, and commercial properties.",
    icon: "building",
  },
  {
    title: "Residential Electrical",
    description:
      "Full-service electrical work for Arizona homes, from outlets and circuits to whole-home upgrades.",
    icon: "home",
  },
  {
    title: "Panel Upgrades",
    description:
      "Modern panel replacements and service upgrades to support today's power demands safely.",
    icon: "panel",
  },
  {
    title: "EV Charger Installation",
    description:
      "Professional EV charger installs with clean routing, proper permits, and code-compliant work.",
    icon: "ev",
  },
  {
    title: "Troubleshooting & Repairs",
    description:
      "Fast diagnosis and repair for flickering lights, tripped breakers, and electrical issues.",
    icon: "repair",
  },
  {
    title: "Lighting Installation",
    description:
      "Recessed lighting, fixtures, dimmers, and accent lighting designed for function and style.",
    icon: "light",
  },
  {
    title: "Remodel Electrical",
    description:
      "Electrical support for kitchen, bathroom, and whole-home remodels done right the first time.",
    icon: "remodel",
  },
  {
    title: "New Construction Wiring",
    description:
      "Complete rough-in and finish electrical for new builds, additions, and tenant improvements.",
    icon: "construction",
  },
] as const;

/** Paths for the eight SEO service pages (dropdown links only). */
export const SERVICE_PAGE_HREFS: Record<(typeof SERVICES)[number]["title"], string> = {
  "Commercial Electrical": "/commercial-electrical",
  "Residential Electrical": "/residential-electrical",
  "Panel Upgrades": "/electrical-service-panel-upgrades",
  "EV Charger Installation": "/ev-charger-installation",
  "Troubleshooting & Repairs": "/electrical-troubleshooting-repairs-service-calls",
  "Lighting Installation": "/lighting-installation",
  "Remodel Electrical": "/remodel-electrical",
  "New Construction Wiring": "/new-construction-wiring",
};

export const TRUST_ITEMS = [
  "Arizona ROC #366059",
  "Licensed & Insured",
  "Residential & Commercial",
  "Serving the Phoenix Metro",
] as const;

export const WHY_CHOOSE = [
  {
    title: "Clear Communication",
    description:
      "You always know what to expect — from the first call through project completion.",
  },
  {
    title: "Clean Workmanship",
    description:
      "Neat installs, organized wiring, and attention to detail on every job site.",
  },
  {
    title: "On-Time Scheduling",
    description:
      "We respect your time with reliable scheduling and prompt arrival windows.",
  },
  {
    title: "Honest Recommendations",
    description:
      "Straightforward guidance focused on what your property actually needs.",
  },
  {
    title: "Safety-Focused Work",
    description:
      "Code-compliant electrical work built around safety for your home or business.",
  },
  {
    title: "Professional Service",
    description:
      "Courteous, prepared electricians who treat your property with care from start to finish.",
  },
] as const;

export const SERVICE_AREAS = [
  "Phoenix",
  "Scottsdale",
  "Tempe",
  "Mesa",
  "Chandler",
  "Gilbert",
  "Paradise Valley",
  "Glendale",
  "Cave Creek",
  "Fountain Hills",
] as const;

export const CITY_PAGE_LINKS = [
  { label: "Scottsdale", href: "/electrician-scottsdale-az" },
  { label: "Phoenix", href: "/electrician-phoenix-az" },
  { label: "Tempe", href: "/electrician-tempe-az" },
  { label: "Mesa", href: "/electrician-mesa-az" },
  { label: "Chandler", href: "/electrician-chandler-az" },
  { label: "Gilbert", href: "/electrician-gilbert-az" },
  { label: "Paradise Valley", href: "/electrician-paradise-valley-az" },
  { label: "Glendale", href: "/electrician-glendale-az" },
  { label: "Cave Creek", href: "/electrician-cave-creek-az" },
  { label: "Fountain Hills", href: "/electrician-fountain-hills-az" },
] as const;

/** Replace images in public/slideshow/ to update the homepage carousel. */
export const HOME_SLIDESHOW = [
  {
    src: "/slideshow/slide-4-fleet.png?v=7",
    alt: "Numar Electric branded service van at sunset",
    label: "Our Fleet",
    objectPosition: "center",
    heroOverlay: "light",
  },
  {
    src: "/slideshow/slide-5-controls.jpg",
    alt: "Electrical control panel internals with terminal blocks and circuit board",
    label: "Controls & Gear",
    objectPosition: "center",
  },
  {
    src: "/slideshow/slide-2-commercial.png",
    alt: "Commercial electrical conduit and panel rough-in",
    label: "Commercial Electrical",
    objectPosition: "center",
  },
  {
    src: "/slideshow/slide-3-team.png",
    alt: "Numar Electric team on site in hard hats and uniforms",
    label: "Our Team",
    objectPosition: "top",
  },
] as const;

export const SERVICE_FORM_OPTIONS = [
  "Commercial Electrical",
  "Residential Electrical",
  "Panel Upgrade",
  "EV Charger Installation",
  "Troubleshooting & Repairs",
  "Lighting Installation",
  "Remodel Electrical",
  "New Construction Wiring",
  "Other",
] as const;
