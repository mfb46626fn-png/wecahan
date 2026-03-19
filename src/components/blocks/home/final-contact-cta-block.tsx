import React from "react";
import SectionShell from "@/components/layout/section-shell";
import PrimaryButton from "@/components/ui/primary-button";
import { Link } from "@/i18n/routing";

/**
 * FinalContactCtaBlock
 * A strong closing section for the Home page.
 */
export default function FinalContactCtaBlock() {
  return (
    <SectionShell className="relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
        <div className="space-y-4">
          <span className="text-[#00f0ff] text-xs font-bold tracking-[0.3em] uppercase glow-text">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white uppercase leading-tight">
            Ready to Build the <br className="hidden md:block" />
            Next Generation?
          </h2>
        </div>
        
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Let&apos;s discuss how WeCaHan can help architect your digital infrastructure 
          and automate your core business systems.
        </p>

        <Link href="/contact" className="inline-block pt-4">
          <PrimaryButton>Contact Us</PrimaryButton>
        </Link>
      </div>

      {/* Decorative background visual */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_center,_rgba(0,240,255,0.05)_0%,_transparent_70%)]" />
    </SectionShell>
  );
}
