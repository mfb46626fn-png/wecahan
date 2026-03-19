import React from "react";
import SectionShell from "@/components/layout/section-shell";
import SecondaryButton from "@/components/ui/secondary-button";
import { Link } from "@/i18n/routing";

/**
 * AboutSnapshotBlock
 * A concise summary of the brand mission.
 */
export default function AboutSnapshotBlock() {
  return (
    <SectionShell>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <span className="text-[#00f0ff] text-xs font-bold tracking-[0.2em] uppercase glow-text">
            About WeCaHan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white uppercase leading-tight">
            Engineering Simplicity for <br className="hidden md:block" />
            the Digital economy
          </h2>
          <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
            <p>
              WeCaHan builds modern, scalable, and practical digital systems designed 
              to thrive in the modern economy. Our focus is on removing complexity 
              from operational workflows.
            </p>
            <p>
              By combining engineering excellence with a focus on real-world value, 
              we ensure that every system we build serves as a long-term asset.
            </p>
          </div>
          <Link href="/about" className="inline-block pt-4">
            <SecondaryButton>Learn More About Us</SecondaryButton>
          </Link>
        </div>
        
        <div className="relative aspect-video glass-panel overflow-hidden border border-white/10 group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 to-transparent opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-24 h-24 border border-[#00f0ff]/20 rounded-full animate-ping" />
          </div>
          {/* Abstract visual content */}
          <div className="absolute bottom-8 left-8">
            <div className="h-1 w-32 bg-white/10 mb-2" />
            <div className="h-1 w-16 bg-white/10" />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
