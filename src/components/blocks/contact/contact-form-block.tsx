import React from "react";
import SectionShell from "@/components/layout/section-shell";
import ContactForm from "@/components/forms/contact-form";

/**
 * ContactFormBlock
 * Houses the contact form in a clean, focused layout.
 */
export default function ContactFormBlock() {
  return (
    <SectionShell className="bg-neutral-950/40">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div className="space-y-8">
           <span className="text-[#00f0ff] text-[10px] font-bold uppercase tracking-[0.3em] glow-text">
             Project Inquiry
           </span>
           <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white uppercase leading-tight">
             Send Us a <br className="hidden md:block" />
             Technical Brief
           </h2>
           <p className="text-neutral-400 text-lg leading-relaxed max-w-lg">
             Whether it&apos;s a specific software architecture request or a 
             strategic digital system build-out, our partners are ready 
             to provide technical clarity.
           </p>
        </div>
        
        <div className="glass-panel p-8 md:p-12 border border-white/5">
          <ContactForm />
        </div>
      </div>
    </SectionShell>
  );
}
