import React from 'react';
import Section from '@/components/shared/layout/Section';
import SectionIntro from '@/components/shared/layout/SectionIntro';
import { homeContent } from '@/data/content/home';
import { Zap, Shield, Layout, Settings } from 'lucide-react';

interface CapabilityGridProps {
  locale: 'tr' | 'en';
}

const icons = {
  automation: Zap,
  financial: Shield,
  tools: Layout,
  system: Settings
};

export default function CapabilityGrid({ locale }: CapabilityGridProps) {
  const content = homeContent.capabilities;

  return (
    <Section background="surface" className="border-y border-border-subtle">
      <SectionIntro 
        badge={content.badge}
        title={content.title[locale]}
        description={content.description[locale]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {content.items.map((item) => {
          const Icon = icons[item.id as keyof typeof icons] || Layout;
          return (
            <div key={item.id} className="premium-card group">
              <div className="w-12 h-12 rounded-lg bg-background border border-border-subtle flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-brand-accent/30 group-hover:bg-brand-accent/5">
                <Icon className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title[locale]}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {item.description[locale]}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
