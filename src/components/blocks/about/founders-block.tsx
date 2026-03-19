import React from "react";
import SectionShell from "@/components/layout/section-shell";
import SectionHeading from "@/components/ui/section-heading";
import { founders } from "@/data/founders";

/**
 * FoundersBlock
 * Controlled display of founders for the About page.
 * Keeps the brand narrative dominant.
 */
export default function FoundersBlock() {
  return (
    <SectionShell className="bg-neutral-950/30">
      <SectionHeading 
        subtitle="Leadership"
        title="Founders"
        description="Driven by specialized engineering focus and practical execution."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {founders.map((founder) => (
          <div 
            key={founder.id}
            className="glass-panel p-10 border border-white/5 group hover:border-white/10 transition-all duration-500"
          >
            <div className="flex items-center space-x-6 mb-8">
               <div className="w-16 h-16 bg-neutral-900 border border-white/5 p-1">
                  <div className="w-full h-full bg-neutral-950 flex items-center justify-center font-bold text-white/10 group-hover:text-[#00f0ff]/10 transition-colors uppercase">
                    WC
                  </div>
               </div>
               <div>
                 <h3 className="text-white text-lg font-bold uppercase tracking-tight">{founder.name}</h3>
                 <span className="text-[#00f0ff] text-[10px] font-bold uppercase tracking-[0.3em]">{founder.role}</span>
               </div>
            </div>
            <p className="text-neutral-500 text-base leading-relaxed border-t border-white/5 pt-8 group-hover:text-neutral-400 transition-colors">
              {founder.bio}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center max-w-2xl mx-auto text-neutral-500 text-xs italic">
        * Founders focus solely on architectural oversight and specialized system design for the WeCaHan ecosystem.
      </div>
    </SectionShell>
  );
}
