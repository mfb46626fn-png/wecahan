import React from 'react';
import Section from '@/components/shared/layout/Section';
import SectionIntro from '@/components/shared/layout/SectionIntro';
import { homeContent } from '@/data/content/home';
import { founders } from '@/data/people/founders';

interface FoundersSnapshotProps {
  locale: 'tr' | 'en';
}

export default function FoundersSnapshot({ locale }: FoundersSnapshotProps) {
  const content = homeContent.foundersSnapshot;

  return (
    <Section background="base">
      <SectionIntro 
        badge={(content.badge as any)[locale]}
        title={content.title[locale]}
        description={content.description[locale]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {founders.map((founder) => (
          <div key={founder.id} className="premium-card flex flex-col md:flex-row gap-8 items-start">
            <div className="w-24 h-24 rounded-full bg-surface-lighter border border-border-subtle flex-shrink-0 flex items-center justify-center text-text-muted font-bold text-xl uppercase">
              {founder.name[0]}
            </div>
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{founder.name}</h3>
                  <p className="text-brand-accent text-xs font-bold tracking-widest uppercase mt-1">
                    {founder.role}
                  </p>
                </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                {founder.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 p-6 rounded-lg bg-surface border border-border-subtle text-center">
         <p className="text-text-muted text-[10px] font-bold tracking-[0.2em] uppercase">
            * {locale === 'tr' ? 'WeCaHan marka anlatısı bireysel isimlerin önüne geçer.' : 'WeCaHan brand narrative takes priority over individual names.'}
         </p>
      </div>
    </Section>
  );
}
