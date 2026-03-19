import React from "react";
import SectionShell from "@/components/layout/section-shell";
import PrimaryButton from "@/components/ui/primary-button";
import SecondaryButton from "@/components/ui/secondary-button";
import { Link } from "@/i18n/routing";

/**
 * HomeHeroBlock
 * High-impact brand introduction with neon accents.
 */
export default function HomeHeroBlock() {
  return (
    <SectionShell className="min-h-[80vh] flex items-center">
      <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
        <div className="space-y-4">
          <span className="text-[#00f0ff] text-xs font-bold tracking-[0.4em] uppercase glow-text">
            WeCaHan
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white uppercase leading-tight">
            Building Smart <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00f0ff] to-white/50">
              Digital Systems
            </span>
          </h1>
        </div>
        
        <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-2xl">
          We architect scalable automation, AI-powered systems, and financial tools 
          to build the future of digital infrastructure.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link href="/projects">
            <PrimaryButton>Explore Projects</PrimaryButton>
          </Link>
          <Link href="/about">
            <SecondaryButton>About WeCaHan</SecondaryButton>
          </Link>
        </div>
      </div>
      
      {/* Background visual element placeholder */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] bg-[#00f0ff]/5 blur-[120px] rounded-full pointer-events-none" />
    </SectionShell>
  );
}
