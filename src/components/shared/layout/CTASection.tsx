import React from 'react';
import Section from './Section';
import { Link } from '@/i18n/routing';

interface CTASectionProps {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  isExternal?: boolean;
  background?: 'base' | 'surface' | 'surface-lighter';
}

export default function CTASection({ 
  title, 
  description, 
  ctaLabel, 
  ctaHref,
  isExternal = false,
  background = 'surface'
}: CTASectionProps) {
  return (
    <Section background={background} className="text-center overflow-hidden border-t border-border-subtle">
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
          {title}
        </h2>
        <p className="text-lg text-text-secondary mb-10 leading-relaxed">
          {description}
        </p>
        
        {isExternal ? (
          <a 
            href={ctaHref} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
          >
            {ctaLabel}
          </a>
        ) : (
          <Link href={ctaHref} className="btn-primary">
            {ctaLabel}
          </Link>
        )}
      </div>
    </Section>
  );
}
