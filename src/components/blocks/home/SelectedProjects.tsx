import React from 'react';
import Section from '@/components/shared/layout/Section';
import SectionIntro from '@/components/shared/layout/SectionIntro';
import ProjectCard from '@/components/shared/ui/ProjectCard';
import { homeContent } from '@/data/content/home';
import { ProjectListingItem } from '@/types/projects';
import { Link } from '@/i18n/routing';

interface SelectedProjectsProps {
  projects: ProjectListingItem[];
  locale: 'tr' | 'en';
}

export default function SelectedProjects({ projects, locale }: SelectedProjectsProps) {
  const content = homeContent.selectedProjects;

  return (
    <Section background="surface">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <SectionIntro 
          badge={(content.badge as any)[locale]}
          title={content.title[locale]}
          description={content.description[locale]}
          className="mb-0"
        />
        <Link href="/projects" className="btn-secondary whitespace-nowrap hidden md:flex">
          {locale === 'tr' ? 'Tüm Projeler' : 'All Projects'}
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard 
            key={project.slug} 
            project={project} 
            locale={locale} 
          />
        ))}
      </div>
      
      <div className="mt-12 md:hidden">
        <Link href="/projects" className="btn-secondary w-full">
          {locale === 'tr' ? 'Tüm Projeler' : 'All Projects'}
        </Link>
      </div>
    </Section>
  );
}
