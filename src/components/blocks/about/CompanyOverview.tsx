import React from 'react';
import Section from '@/components/shared/layout/Section';
import { aboutContent } from '@/data/content/about';

interface CompanyOverviewProps {
  locale: 'tr' | 'en';
}

export default function CompanyOverview({ locale }: CompanyOverviewProps) {
  const content = aboutContent.overview;

  return (
    <Section background="base" size="medium">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
            {content.title[locale]}
          </h2>
        </div>
        <div className="space-y-6">
          {content.paragraphs.map((p, idx) => (
            <p key={idx} className="text-lg text-text-secondary leading-relaxed first-of-type:text-text-primary first-of-type:font-medium">
              {p[locale]}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
