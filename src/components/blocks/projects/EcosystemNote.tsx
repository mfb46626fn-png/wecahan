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
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center gap-6 p-10 rounded-xl bg-background border border-border-card">
          <div className="w-12 h-12 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center">
            <Info className="w-6 h-6 text-brand-accent" />
          </div>
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold mb-4 font-display">
              {content.title[locale]}
            </h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              {content.description[locale]}
            </p>
            <div className="inline-block px-4 py-2 rounded-full bg-surface-lighter border border-border-subtle">
              <p className="text-text-muted text-[10px] font-bold tracking-widest uppercase">
                * {content.statusNote[locale]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
