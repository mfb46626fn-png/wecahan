import React from "react";
import SectionShell from "@/components/layout/section-shell";
import PrimaryButton from "@/components/ui/primary-button";
import SecondaryButton from "@/components/ui/secondary-button";
import { Link } from "@/i18n/routing";

/**
 * AboutClosingBlock
 * Strong closing for the About page.
 */
export default function AboutClosingBlock() {
  return (
    <SectionShell className="">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white uppercase leading-tight">
          Building the foundation for <br className="hidden md:block" />
          focused Digital systems
        </h2>
        
        <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          WeCaHan is building focused digital systems for a more efficient and 
          scalable digital economy. Every line of code is an investment in stability 
          and performance.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 py-4">
          <Link href="/projects">
            <PrimaryButton>View Projects</PrimaryButton>
          </Link>
          <Link href="/contact">
            <SecondaryButton>Contact Us</SecondaryButton>
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}
