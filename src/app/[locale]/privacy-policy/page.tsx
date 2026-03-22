import { Metadata } from "next";
import { getLocalizedMetadata } from "@/lib/seo/metadata";
import { pageMetadata } from "@/data/seo/metadata";
import PageHero from "@/components/shared/layout/PageHero";
import LegalContent from "@/components/blocks/legal/LegalContent";
import { legalContent } from "@/data/content/legal";

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: "tr" | "en" }> 
}): Promise<Metadata> {
  const { locale } = await params;
  return getLocalizedMetadata(locale, "/privacy-policy", {
    title: pageMetadata.privacy.title[locale],
    description: pageMetadata.privacy.description[locale],
  });
}

export default async function PrivacyPolicy({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "tr" | "en" };
  const content = legalContent.privacy;

  return (
    <div className="flex flex-col">
      <PageHero 
        badge={legalContent.badge[locale]}
        title={content.title[locale]}
        description=""
      />
      <LegalContent 
        title={content.title[locale]}
        content={content.content[locale]}
        lastUpdated={content.lastUpdated[locale]}
      />
    </div>
  );
}
