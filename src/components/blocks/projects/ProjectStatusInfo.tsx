import React from 'react';
import Section from '@/components/shared/layout/Section';
import { ProjectData } from '@/types/projects';
import ProjectStatusBadge from '@/components/shared/ui/ProjectStatusBadge';

interface ProjectStatusInfoProps {
  project: ProjectData;
  locale: 'tr' | 'en';
}

export default function ProjectStatusInfo({ project, locale }: ProjectStatusInfoProps) {
  return (
    <Section background="base" size="medium">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <h2 className="text-3xl font-bold mb-8 font-display">{project.statusTitle}</h2>
          <ProjectStatusBadge status={project.status} locale={locale} />
        </div>
        <div>
          <p className="text-lg text-text-secondary leading-relaxed">
            {project.statusDescription}
          </p>
        </div>
      </div>
    </Section>
  );
}
