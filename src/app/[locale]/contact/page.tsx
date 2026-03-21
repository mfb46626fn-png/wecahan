import JsonLd from "@/components/shared/seo/JsonLd";
import { Metadata } from "next";
import { getLocalizedMetadata } from "@/lib/seo/metadata";
import { pageMetadata } from "@/data/seo/metadata";
import PageHero from "@/components/shared/layout/PageHero";
import Section from "@/components/shared/layout/Section";
import ContactFormUI from "@/components/blocks/contact/ContactFormUI";
import { contactContent } from "@/data/content/contact";

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: "tr" | "en" }> 
}): Promise<Metadata> {
  const { locale } = await params;
  return getLocalizedMetadata(locale, "/contact", {
    title: pageMetadata.contact.title[locale],
    description: pageMetadata.contact.description[locale],
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "tr" | "en" };
  const content = contactContent;

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": locale === "tr" ? "WeCaHan İletişim" : "Contact WeCaHan",
    "description": content.hero.description[locale],
  };

  return (
    <div className="flex flex-col">
      <JsonLd data={contactSchema} />
      <PageHero 
        badge={content.hero.badge}
        title={content.hero.title[locale]}
        description={content.hero.description[locale]}
        centered
      />
      
      <Section background="base">
        <div className="max-w-4xl mx-auto">
          <ContactFormUI locale={locale} />
        </div>
      </Section>
    </div>
  );
}
