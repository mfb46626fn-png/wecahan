import React from "react";
import SectionShell from "@/components/layout/section-shell";

/**
 * ContactIntroBlock
 * Professional page header for the Contact page.
 */
export default function ContactIntroBlock() {
  return (
    <SectionShell className="min-h-[40vh] flex flex-col justify-end">
      <div className="max-w-4xl">
        <div className="flex items-center space-x-2 mb-6 text-neutral-500 text-[10px] font-bold uppercase tracking-[0.2em]">
          <span>Home</span>
          <span className="text-white/20">/</span>
          <span className="text-[#00f0ff]">Contact</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase leading-tight">
          Contact <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">
            WeCaHan
          </span>
        </h1>
        <p className="mt-8 text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed">
          For project inquiries, technical collaborations, or general ecosystem 
          communication, reach out to us using the form below.
        </p>
      </div>
    </SectionShell>
  );
}
