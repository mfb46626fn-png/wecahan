import React from "react";
import SectionShell from "@/components/layout/section-shell";

/**
 * ProjectsIntroBlock
 * Clean page header for the Projects page.
 */
export default function ProjectsIntroBlock() {
  return (
    <SectionShell className="pt-24 pb-12 md:pt-32 md:pb-16 min-h-[40vh] flex flex-col justify-end">
      <div className="max-w-4xl">
        <div className="flex items-center space-x-2 mb-6 text-neutral-500 text-[10px] font-bold uppercase tracking-[0.2em]">
          <span>Home</span>
          <span className="text-white/20">/</span>
          <span className="text-[#00f0ff]">Projects</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase leading-tight">
          Selected <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">
            Initiatives
          </span>
        </h1>
        <p className="mt-8 text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed">
          A focused collection of intelligent systems, financial tools, and digital 
          infrastructure built within the WeCaHan ecosystem.
        </p>
      </div>
    </SectionShell>
  );
}
