import React from 'react';
import Section from '@/components/shared/layout/Section';
import { ProjectData } from '@/types/projects';

interface ProjectOverviewProps {
  project: ProjectData;
  locale: 'tr' | 'en';
}

export default function ProjectOverview({ project, locale }: ProjectOverviewProps) {
  return (
    <Section background="base">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight font-display">
            {project.overviewTitle}
          </h2>
        </div>
        <div>
          <p className="text-lg text-text-secondary leading-relaxed">
            {project.overviewDescription}
          </p>
        </div>
      </div>
    </Section>
  );
}
