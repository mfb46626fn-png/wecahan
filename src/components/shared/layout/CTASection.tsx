import React from 'react';
import Section from './Section';
import { Link } from '@/i18n/routing';

interface CTASectionProps {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  background?: 'base' | 'surface' | 'surface-lighter';
}

export default function CTASection({ 
  title, 
  description, 
  ctaLabel, 
  ctaHref,
  background = 'surface'
}: CTASectionProps) {
  return (
    <Section background={background} className="text-center overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,180,216,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          {title}
        </h2>
        <p className="text-lg text-text-secondary mb-10">
          {description}
        </p>
        <Link href={ctaHref} className="btn-primary">
          {ctaLabel}
        </Link>
      </div>
    </Section>
  );
}
