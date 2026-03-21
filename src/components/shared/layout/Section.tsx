import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Shared Section component for consistent spacing and container behavior.
 */
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'base' | 'surface' | 'surface-lighter';
  size?: 'wide' | 'medium' | 'narrow';
}

export default function Section({ 
  children, 
  className, 
  id, 
  background = 'base',
  size = 'wide'
}: SectionProps) {
  const backgroundClasses = {
    base: 'bg-background',
    surface: 'bg-surface',
    'surface-lighter': 'bg-surface-lighter'
  };

  const sizeClasses = {
    wide: 'max-w-7xl',
    medium: 'max-w-4xl',
    narrow: 'max-w-3xl'
  };

  return (
    <section 
      id={id} 
      className={twMerge(
        'py-20 md:py-32 relative overflow-hidden',
        backgroundClasses[background],
        className
      )}
    >
      <div className={twMerge(
        'mx-auto px-6 md:px-12 lg:px-16',
        sizeClasses[size]
      )}>
        {children}
      </div>
    </section>
  );
}
