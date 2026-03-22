import React from 'react';
import Section from '@/components/shared/layout/Section';
import { homeContent } from '@/data/content/home';
import Image from 'next/image';
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
           <Image 
             src="/brand-visual.png" 
             alt="WeCaHan Brand Visual" 
             fill
             className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
             sizes="(max-w-7xl) 50vw, 100vw"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
        </div>
      </div>
    </Section>
  );
}
