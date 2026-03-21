"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { homeContent } from '@/data/content/home';

interface HomeHeroProps {
  locale: 'tr' | 'en';
}

export default function HomeHero({ locale }: HomeHeroProps) {
  const content = homeContent.hero;

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(0,180,216,0.02)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.4]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-brand-accent text-xs font-bold tracking-[0.3em] uppercase mb-6">
            {content.badge}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 max-w-5xl leading-[1.05] tracking-tight font-display">
            {content.title[locale]}
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mb-12 leading-relaxed">
            {content.description[locale]}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={content.ctaPrimary.href} className="btn-primary w-full sm:w-[200px]">
              {content.ctaPrimary[locale]}
            </Link>
            <Link href={content.ctaSecondary.href} className="btn-secondary w-full sm:w-[200px]">
              {content.ctaSecondary[locale]}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
