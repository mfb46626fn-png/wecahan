import React from "react";
import SectionShell from "@/components/layout/section-shell";
import SectionHeading from "@/components/ui/section-heading";
import { focusAreas } from "@/data/focus-areas";
import { ChevronRight } from "lucide-react";

/**
 * AboutFocusAreasBlock
 * Detailed display of core expertise areas for the About page.
 */
export default function AboutFocusAreasBlock() {
  return (
    <SectionShell>
      <SectionHeading 
        subtitle="Expertise"
        title="Focus Areas"
        align="left"
        className="mb-16"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {focusAreas.map((area) => (
          <div key={area.id} className="group flex flex-col space-y-4 border-l-2 border-white/10 pl-8 hover:border-[#00f0ff] transition-all duration-500 py-2">
            <h3 className="text-white text-2xl font-bold uppercase tracking-tighter flex items-center group-hover:text-[#00f0ff] transition-colors">
              {area.title}
              <ChevronRight className="ml-4 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
            </h3>
            <p className="text-neutral-400 text-lg leading-relaxed max-w-xl">
              {area.description}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
