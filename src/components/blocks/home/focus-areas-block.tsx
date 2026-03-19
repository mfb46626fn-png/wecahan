import React from "react";
import SectionShell from "@/components/layout/section-shell";
import SectionHeading from "@/components/ui/section-heading";
import { focusAreas } from "@/data/focus-areas";
import { ChevronRight } from "lucide-react";

/**
 * FocusAreasBlock
 * Displays core expertise areas in a compact grid.
 */
export default function FocusAreasBlock() {
  return (
    <SectionShell className="bg-neutral-950/30">
      <SectionHeading 
        subtitle="Expertise"
        title="Focus Areas"
        align="left"
        className="mb-12"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-16">
        {focusAreas.map((area) => (
          <div key={area.id} className="group flex flex-col space-y-4 border-l border-white/10 pl-6 hover:border-[#00f0ff] transition-all duration-500">
            <h3 className="text-white text-lg font-bold uppercase tracking-widest flex items-center group-hover:text-[#00f0ff] transition-colors">
              {area.title}
              <ChevronRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              {area.description}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
