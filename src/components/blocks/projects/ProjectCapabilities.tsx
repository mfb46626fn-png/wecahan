import React from 'react';
import Section from '@/components/shared/layout/Section';
import { ProjectData } from '@/types/projects';
import { Check } from 'lucide-react';

interface ProjectCapabilitiesProps {
  project: ProjectData;
  locale: 'tr' | 'en';
}

export default function ProjectCapabilities({ project, locale }: ProjectCapabilitiesProps) {
  return (
    <Section background="surface" className="border-y border-border-subtle">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <h2 className="text-3xl font-bold mb-4 font-display">{project.capabilitiesTitle}</h2>
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.capabilities.map((cap, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-brand-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-3 h-3 text-brand-accent" />
              </div>
              <p className="text-text-secondary font-medium">{cap}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
