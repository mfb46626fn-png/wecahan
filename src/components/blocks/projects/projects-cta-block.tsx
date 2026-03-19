import React from "react";
import SectionShell from "@/components/layout/section-shell";
import PrimaryButton from "@/components/ui/primary-button";
import { Link } from "@/i18n/routing";

/**
 * ProjectsCtaBlock
 * Final conversion block for the Projects page.
 */
export default function ProjectsCtaBlock() {
  return (
    <SectionShell className="">
      <div className="max-w-3xl mx-auto text-center space-y-10">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white uppercase leading-tight">
          Interested in what <br /> 
          we are building?
        </h2>
        
        <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
          We are always open to discussing new initiatives, technical architectures, 
          and scalable digital systems.
        </p>

        <Link href="/contact" className="inline-block pt-4">
          <PrimaryButton>Contact Us</PrimaryButton>
        </Link>
      </div>
    </SectionShell>
  );
}
