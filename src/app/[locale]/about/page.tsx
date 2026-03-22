import { Metadata } from "next";
import { getLocalizedMetadata } from "@/lib/seo/metadata";
import { pageMetadata } from "@/data/seo/metadata";
import JsonLd from "@/components/shared/seo/JsonLd";
import PageHero from "@/components/shared/layout/PageHero";
import CompanyOverview from "@/components/blocks/about/CompanyOverview";
import VisionMission from "@/components/blocks/about/VisionMission";
import Principles from "@/components/blocks/about/Principles";
import FocusAreas from "@/components/blocks/about/FocusAreas";
import CTASection from "@/components/shared/layout/CTASection";
import { aboutContent } from "@/data/content/about";
import { homeContent } from "@/data/content/home";

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: "tr" | "en" }> 
}): Promise<Metadata> {
  const { locale } = await params;
  return getLocalizedMetadata(locale, "/about", {
    title: pageMetadata.about.title[locale],
    description: pageMetadata.about.description[locale],
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "tr" | "en" };
  const hero = aboutContent.hero;

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": locale === "tr" ? "WeCaHan Hakkında" : "About WeCaHan",
    "description": aboutContent.hero.description[locale],
    "mainEntity": {
      "@type": "Organization",
      "name": "WeCaHan",
    }
  };

  return (
    <div className="flex flex-col">
      <JsonLd data={aboutSchema} />
      <PageHero 
        badge={hero.badge[locale as keyof typeof hero.badge]}
        title={hero.title[locale]}
        description={hero.description[locale]}
      />
      <CompanyOverview locale={locale} />
      <VisionMission locale={locale} />
      <Principles locale={locale} />
      <FocusAreas locale={locale} />
      <CTASection 
        title={homeContent.contactCTA.title[locale]}
        description={homeContent.contactCTA.description[locale]}
        ctaLabel={homeContent.contactCTA.ctaLabel[locale]}
        ctaHref={homeContent.contactCTA.ctaHref}
      />
    </div>
  );
}

