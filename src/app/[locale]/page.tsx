import JsonLd from "@/components/shared/seo/JsonLd";
import { getProjects } from "@/lib/content/projects";
import HomeHero from "@/components/blocks/home/HomeHero";
import CapabilityGrid from "@/components/blocks/home/CapabilityGrid";
import AboutSnapshot from "@/components/blocks/home/AboutSnapshot";
import SelectedProjects from "@/components/blocks/home/SelectedProjects";
import FoundersSnapshot from "@/components/blocks/home/FoundersSnapshot";
import CTASection from "@/components/shared/layout/CTASection";
import { homeContent } from "@/data/content/home";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "tr" | "en" };
  const projects = await getProjects(locale);
  
  // Show only top 3 projects on home
  const selectedProjects = projects.slice(0, 3);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WeCaHan",
    "url": "https://wecahan.com",
    "logo": "https://wecahan.com/og-fallback.png",
    "sameAs": [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "WeCaHan",
    "url": "https://wecahan.com",
  };

  return (
    <div className="flex flex-col">
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <HomeHero locale={locale} />
      <CapabilityGrid locale={locale} />
      <AboutSnapshot locale={locale} />
      <SelectedProjects projects={selectedProjects} locale={locale} />
      <FoundersSnapshot locale={locale} />
      <CTASection 
        title={homeContent.contactCTA.title[locale]}
        description={homeContent.contactCTA.description[locale]}
        ctaLabel={homeContent.contactCTA.ctaLabel[locale]}
        ctaHref={homeContent.contactCTA.ctaHref}
      />
    </div>
  );
}

