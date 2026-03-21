import React from 'react';
import Section from '@/components/shared/layout/Section';
import { ProjectData } from '@/types/projects';
import { Share2 } from 'lucide-react';

interface ProjectBrandConnectionProps {
  project: ProjectData;
  locale: 'tr' | 'en';
}

export default function ProjectBrandConnection({ project, locale }: ProjectBrandConnectionProps) {
  return (
    <Section background="surface" className="border-t border-border-subtle" size="medium">
      <div className="flex items-start gap-4 p-8 rounded-xl bg-background border border-border-card">
        <div className="w-10 h-10 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
          <Share2 className="w-5 h-5 text-brand-accent" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 font-display">
            {project.connectionTitle}
          </h3>
          <p className="text-text-secondary leading-relaxed">
            {project.connectionDescription}
          </p>
        </div>
      </div>
    </Section>
  );
}
