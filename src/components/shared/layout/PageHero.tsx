import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface PageHeroProps {
  badge?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  centered?: boolean;
}

export default function PageHero({ 
  badge, 
  title, 
  description, 
  children,
  centered = false
}: PageHeroProps) {
  return (
    <section 
      className={twMerge(
        "pt-32 pb-16 md:pt-48 md:pb-24 border-b border-border-subtle bg-background relative overflow-hidden",
        centered && "text-center"
      )}
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,180,216,0.03)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {badge && (
          <span className="inline-block text-brand-accent text-xs font-bold tracking-[0.2em] uppercase mb-4">
            {badge}
          </span>
        )}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl mx-auto leading-[1.1]">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        {children && <div className="mt-10 flex flex-wrap gap-4 items-center justify-center">{children}</div>}
      </div>
    </section>
  );
}
