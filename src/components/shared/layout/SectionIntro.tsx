import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionIntroProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionIntro({ 
  badge, 
  title, 
  description,
  centered = false,
  className
}: SectionIntroProps) {
  return (
    <div className={twMerge(
      "mb-12 md:mb-16",
      centered ? 'text-center' : '',
      className
    )}>
      {badge && (
        <span className="inline-block text-brand-accent text-xs font-bold tracking-[0.2em] uppercase mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        {title}
      </h2>
      {description && (
        <p className={`text-lg text-text-secondary max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}
