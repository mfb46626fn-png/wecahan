import React from 'react';
import Section from '@/components/shared/layout/Section';
import { homeContent } from '@/data/content/home';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';

interface AboutSnapshotProps {
  locale: 'tr' | 'en';
}

export default function AboutSnapshot({ locale }: AboutSnapshotProps) {
  const content = homeContent.aboutSnapshot;

  return (
    <Section background="base">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <span className="inline-block text-brand-accent text-xs font-bold tracking-[0.2em] uppercase mb-4">
            {(content.badge as any)[locale]}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            {content.title[locale]}
          </h2>
          <p className="text-lg text-text-secondary mb-10 leading-relaxed">
            {content.description[locale]}
          </p>
          <Link href={content.cta.href} className="btn-secondary group">
            {content.cta[locale]}
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="relative aspect-video rounded-xl overflow-hidden border border-border-card bg-surface-lighter">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,180,216,0.1)_0%,transparent_70%)]" />
           {/* Placeholder for an abstract image or graphic */}
           <div className="flex items-center justify-center h-full text-text-muted text-xs uppercase tracking-widest">
              Brand Visual
           </div>
        </div>
      </div>
    </Section>
  );
}
