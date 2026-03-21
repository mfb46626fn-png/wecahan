import React from 'react';
import Section from '@/components/shared/layout/Section';
import { aboutContent } from '@/data/content/about';
import { Target, Eye } from 'lucide-react';

interface VisionMissionProps {
  locale: 'tr' | 'en';
}

export default function VisionMission({ locale }: VisionMissionProps) {
  const content = aboutContent.visionMission;

  return (
    <Section background="surface" className="border-y border-border-subtle">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        <div className="premium-card">
          <div className="w-12 h-12 rounded-lg bg-background border border-border-subtle flex items-center justify-center mb-6">
            <Target className="w-6 h-6 text-brand-accent" />
          </div>
          <h3 className="text-2xl font-bold mb-4">{content.mission.title[locale]}</h3>
          <p className="text-text-secondary leading-relaxed">
            {content.mission.text[locale]}
          </p>
        </div>
        
        <div className="premium-card">
          <div className="w-12 h-12 rounded-lg bg-background border border-border-subtle flex items-center justify-center mb-6">
            <Eye className="w-6 h-6 text-brand-accent" />
          </div>
          <h3 className="text-2xl font-bold mb-4">{content.vision.title[locale]}</h3>
          <p className="text-text-secondary leading-relaxed">
            {content.vision.text[locale]}
          </p>
        </div>
      </div>
    </Section>
  );
}
