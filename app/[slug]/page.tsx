import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityPageView } from "@/components/CityPageView";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ServicePageView } from "@/components/ServicePageView";
import { SITE_URL } from "@/lib/constants";
import { getAllCitySlugs, getCityPage } from "@/lib/city-pages";
import { fillContentTokens } from "@/lib/rich-content";
import { getAllServiceSlugs, getServicePage } from "@/lib/service-pages";

type RouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [...getAllServiceSlugs(), ...getAllCitySlugs()].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug) ?? getCityPage(slug);
  if (!page) return {};

  const title = fillContentTokens(page.title);
  const description = fillContentTokens(page.description);
  const canonical = `${SITE_URL}/${page.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function DynamicSeoPage({ params }: RouteProps) {
  const { slug } = await params;
  const servicePage = getServicePage(slug);
  const cityPage = getCityPage(slug);

  if (!servicePage && !cityPage) notFound();

  return (
    <>
      <Header />
      <main>
        {servicePage ? <ServicePageView page={servicePage} /> : null}
        {cityPage ? <CityPageView page={cityPage} /> : null}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
