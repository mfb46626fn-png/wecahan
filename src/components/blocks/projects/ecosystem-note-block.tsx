import React from "react";
import SectionShell from "@/components/layout/section-shell";

/**
 * EcosystemNoteBlock
 * Brief statement unifying the projects.
 */
export default function EcosystemNoteBlock() {
  return (
    <SectionShell className="bg-neutral-950/20">
      <div className="max-w-4xl mx-auto text-center border-t border-b border-white/5 py-12">
        <p className="text-neutral-500 text-lg md:text-xl italic leading-relaxed font-light">
          &quot;Each project reflects a different layer of the broader 
          <span className="text-white font-bold uppercase tracking-widest ml-2">WeCaHan</span> product ecosystem.&quot;
        </p>
      </div>
    </SectionShell>
  );
}
