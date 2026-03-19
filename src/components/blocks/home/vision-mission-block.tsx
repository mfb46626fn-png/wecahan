import React from "react";
import SectionShell from "@/components/layout/section-shell";
import SectionHeading from "@/components/ui/section-heading";

/**
 * VisionMissionBlock
 * Explains the long-term outlook of the brand.
 */
export default function VisionMissionBlock() {
  return (
    <SectionShell className="bg-neutral-950/40">
      <SectionHeading 
        subtitle="Strategy"
        title="Vision & Mission"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        <div className="glass-panel p-12 border border-white/5 space-y-6">
          <h3 className="text-[#00f0ff] text-xl font-bold uppercase tracking-widest">Vision</h3>
          <p className="text-neutral-400 text-lg leading-relaxed">
            To architect the foundational digital systems that power the next 
            generation of the global economy, making complexity invisible through 
            intelligent engineering.
          </p>
        </div>
        
        <div className="glass-panel p-12 border border-white/5 space-y-6 bg-gradient-to-br from-white/5 to-transparent">
          <h3 className="text-white text-xl font-bold uppercase tracking-widest">Mission</h3>
          <p className="text-neutral-400 text-lg leading-relaxed">
            We build focused, scalable, and reliable software infrastructure 
            and automated tools that enable businesses to execute with clarity 
            and efficiency.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
