import React from 'react';
import Section from '@/components/shared/layout/Section';

interface LegalContentProps {
  title: string;
  content: string;
  lastUpdated?: string;
}

export default function LegalContent({ title, content, lastUpdated }: LegalContentProps) {
  return (
    <Section background="base">
      <div className="max-w-3xl mx-auto">
        {lastUpdated && (
          <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-8">
            Last Updated: {lastUpdated}
          </p>
        )}
        <h2 className="text-3xl font-bold mb-12 font-display">{title}</h2>
        <div 
          className="prose prose-invert prose-brand max-w-none text-text-secondary leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </Section>
  );
}
