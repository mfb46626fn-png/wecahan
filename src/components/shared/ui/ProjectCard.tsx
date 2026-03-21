import React from 'react';
import { ProjectListingItem } from '@/types/projects';
import { Link } from '@/i18n/routing';
import ProjectStatusBadge from '@/components/shared/ui/ProjectStatusBadge';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectListingItem;
  locale: 'tr' | 'en';
}

export default function ProjectCard({ project, locale }: ProjectCardProps) {
  return (
    <Link 
      href={`/projects/${project.slug}`}
      className="premium-card flex flex-col group h-full"
    >
      <div className="flex justify-between items-start mb-8">
        <ProjectStatusBadge status={project.status} locale={locale} />
        <ArrowUpRight className="w-5 h-5 text-text-muted transition-all duration-300 group-hover:text-brand-accent group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
      
      <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-accent transition-colors">
        {project.name}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-auto">
        {project.shortDescription}
      </p>
      
      <div className="mt-8 pt-6 border-t border-border-subtle">
        <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">
          {project.category}
        </span>
      </div>
    </Link>
  );
}
