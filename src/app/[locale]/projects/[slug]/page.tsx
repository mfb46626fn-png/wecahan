import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjects } from "@/lib/content/projects";
import { getLocalizedMetadata } from "@/lib/seo/metadata";
import PageHero from "@/components/shared/layout/PageHero";
import ProjectOverview from "@/components/blocks/projects/ProjectOverview";
import ProjectCapabilities from "@/components/blocks/projects/ProjectCapabilities";
import ProjectStatusInfo from "@/components/blocks/projects/ProjectStatusInfo";
import ProjectBrandConnection from "@/components/blocks/projects/ProjectBrandConnection";
import CTASection from "@/components/shared/layout/CTASection";

interface ProjectPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const allProjects = await getProjects();
  const locales = ["tr", "en"];
  
  return locales.flatMap((locale) => 
    allProjects.map((project) => ({
      locale,
      slug: project.slug,
    }))
  );
}

export async function generateMetadata({ 
  params 
}: ProjectPageProps): Promise<Metadata> {
  const { locale, slug } = (await params) as { locale: "tr" | "en"; slug: string };
  const project = await getProjectBySlug(slug);
  
  if (!project) return {};

  return getLocalizedMetadata(locale, `/projects/${slug}`, {
    title: `${project.name} | WeCaHan`,
    description: project.heroDescription,
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { locale, slug } = (await params) as { locale: "tr" | "en"; slug: string };
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      <PageHero 
        badge={project.category}
        title={project.name}
        description={project.heroDescription}
      />
      
      <ProjectOverview project={project} locale={locale} />
      <ProjectCapabilities project={project} locale={locale} />
      <ProjectStatusInfo project={project} locale={locale} />
      <ProjectBrandConnection project={project} locale={locale} />
      
      <CTASection 
        title={project.ctaTitle}
        description=""
        ctaLabel={project.ctaLabel}
        ctaHref="/contact"
      />
    </div>
  );
}

