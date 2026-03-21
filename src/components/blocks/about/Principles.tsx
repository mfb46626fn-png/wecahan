import React from 'react';
import Section from '@/components/shared/layout/Section';
import SectionIntro from '@/components/shared/layout/SectionIntro';
import { aboutContent } from '@/data/content/about';

interface PrinciplesProps {
  locale: 'tr' | 'en';
}

export default function Principles({ locale }: PrinciplesProps) {
  const content = aboutContent.principles;

  return (
    <Section background="base">
      <SectionIntro 
        badge={content.badge}
        title={content.title[locale]}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {content.items.map((item, idx) => (
          <div key={idx} className="space-y-4">
            <div className="text-4xl font-bold text-brand-accent/20 font-display">
              0{idx + 1}
            </div>
            <h3 className="text-xl font-bold">{item.title[locale]}</h3>
            <p className="text-text-secondary leading-relaxed">
              {item.description[locale]}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
