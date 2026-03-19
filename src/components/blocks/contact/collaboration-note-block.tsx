import React from "react";
import SectionShell from "@/components/layout/section-shell";

/**
 * CollaborationNoteBlock
 * Brief closing statement on collaboration openness.
 */
export default function CollaborationNoteBlock() {
  return (
    <SectionShell className="bg-neutral-950/20">
      <div className="max-w-4xl mx-auto text-center border-t border-b border-white/10 py-16 px-8">
        <h3 className="text-[#00f0ff] text-[10px] font-bold uppercase tracking-[0.4em] mb-8">
          Philosophy
        </h3>
        <p className="text-neutral-400 text-xl md:text-2xl font-light italic leading-relaxed">
          &quot;We are open to thoughtful collaborations, product discussions 
          and long-term digital system building that removed complexity from 
          the global economy.&quot;
        </p>
      </div>
    </SectionShell>
  );
}
