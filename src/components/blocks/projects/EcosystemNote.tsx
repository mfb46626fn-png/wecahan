import React from 'react';
import Section from '@/components/shared/layout/Section';
import { projectsPageContent } from '@/data/content/projects-page';
import { Info } from 'lucide-react';

interface EcosystemNoteProps {
  locale: 'tr' | 'en';
}

export default function EcosystemNote({ locale }: EcosystemNoteProps) {
  const content = projectsPageContent.ecosystemNote;

  return (
    <Section background="surface" className="border-y border-border-subtle">
      <div className="max-w-4xl">
        <div className="flex items-start gap-4 p-8 rounded-xl bg-background border border-border-card">
          <div className="w-10 h-10 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
            <Info className="w-5 h-5 text-brand-accent" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 font-display">
              {content.title[locale]}
            </h3>
            <p className="text-text-secondary mb-4 leading-relaxed">
              {content.description[locale]}
            </p>
            <p className="text-text-muted text-sm italic">
              * {content.statusNote[locale]}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
