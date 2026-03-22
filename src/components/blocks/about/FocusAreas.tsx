import React from 'react';
import Section from '@/components/shared/layout/Section';
import SectionIntro from '@/components/shared/layout/SectionIntro';
import { aboutContent } from '@/data/content/about';

interface FocusAreasProps {
  locale: 'tr' | 'en';
}

export default function FocusAreas({ locale }: FocusAreasProps) {
  const content = aboutContent.focusAreas;

  return (
    <Section background="surface" className="border-t border-border-subtle">
      <SectionIntro 
        badge={(content.badge as any)[locale]}
        title={content.title[locale]}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {content.items.map((item, idx) => (
          <div key={idx} className="premium-card">
            <h3 className="text-xl font-bold mb-4">{item.title[locale]}</h3>
            <p className="text-text-secondary leading-relaxed">
              {item.description[locale]}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
