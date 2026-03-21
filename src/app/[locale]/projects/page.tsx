import JsonLd from "@/components/shared/seo/JsonLd";
import { Metadata } from "next";
import { getLocalizedMetadata } from "@/lib/seo/metadata";
import { pageMetadata } from "@/data/seo/metadata";
import { getProjects } from "@/lib/content/projects";
import PageHero from "@/components/shared/layout/PageHero";
import Section from "@/components/shared/layout/Section";
import ProjectCard from "@/components/shared/ui/ProjectCard";
import EcosystemNote from "@/components/blocks/projects/EcosystemNote";
import CTASection from "@/components/shared/layout/CTASection";
import { projectsPageContent } from "@/data/content/projects-page";

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: "tr" | "en" }> 
}): Promise<Metadata> {
  const { locale } = await params;
  return getLocalizedMetadata(locale, "/projects", {
    title: pageMetadata.projects.title[locale],
    description: pageMetadata.projects.description[locale],
  });
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "tr" | "en" };
  const projects = await getProjects();
  const content = projectsPageContent;

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": locale === "tr" ? "WeCaHan Projeleri" : "WeCaHan Projects",
    "description": content.hero.description[locale],
    "hasPart": projects.map(p => ({
      "@type": "CreativeWork",
      "name": p.name,
      "url": `https://wecahan.com/${locale}/projects/${p.slug}`,
    }))
  };

  return (
    <div className="flex flex-col">
      <JsonLd data={projectsSchema} />
      <PageHero 
        badge={content.hero.badge}
        title={content.hero.title[locale]}
        description={content.hero.description[locale]}
      />
      
      <Section background="base">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard 
              key={project.slug} 
              project={project} 
              locale={locale} 
            />
          ))}
        </div>
      </Section>

      <EcosystemNote locale={locale} />
      
      <CTASection 
        title={content.contactCTA.title[locale]}
        description={content.contactCTA.description[locale]}
        ctaLabel={content.contactCTA.ctaLabel[locale]}
        ctaHref={content.contactCTA.ctaHref}
      />
    </div>
  );
}

