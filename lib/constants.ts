export const COMPANY_NAME = "Numar Electric";
export const PHONE_NUMBER = "(480) 555-0147";
export const PHONE_HREF = "tel:+14805550147";
export const EMAIL = "info@numarelectric.com";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const SERVICES = [
  {
    title: "Residential Electrical",
    description:
      "Full-service electrical work for Arizona homes, from outlets and circuits to whole-home upgrades.",
    icon: "home",
  },
  {
    title: "Commercial Electrical",
    description:
      "Reliable electrical solutions for offices, retail spaces, warehouses, and commercial properties.",
    icon: "building",
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

export const TRUST_ITEMS = [
  "Licensed & Insured",
  "Residential & Commercial",
  "Arizona Owned",
  "Clean, Professional Work",
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
  "Glendale",
  "Peoria",
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
    src: "/slideshow/slide-1-lighting.png",
    alt: "Custom lighting installation with conduit and pendant bulbs",
    label: "Lighting Installation",
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

export const PROJECTS = [
  {
    title: "Panel Upgrade",
    category: "Residential",
    description: "200-amp service upgrade with clean panel install and labeling.",
  },
  {
    title: "Commercial Wiring",
    category: "Commercial",
    description: "Tenant improvement electrical for a growing Arizona business.",
  },
  {
    title: "Lighting Installation",
    category: "Residential",
    description: "Recessed and accent lighting throughout a Scottsdale home.",
  },
  {
    title: "EV Charger Install",
    category: "Residential",
    description: "Dedicated circuit and wall charger install with clean conduit routing.",
  },
] as const;

export const SERVICE_FORM_OPTIONS = [
  "Residential Electrical",
  "Commercial Electrical",
  "Panel Upgrade",
  "EV Charger Installation",
  "Troubleshooting & Repairs",
  "Lighting Installation",
  "Remodel Electrical",
  "New Construction Wiring",
  "Other",
] as const;
