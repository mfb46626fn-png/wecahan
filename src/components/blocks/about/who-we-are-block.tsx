import React from "react";
import SectionShell from "@/components/layout/section-shell";
import SectionHeading from "@/components/ui/section-heading";

/**
 * WhoWeAreBlock
 * Narrative about origin and purpose.
 */
export default function WhoWeAreBlock() {
  return (
    <SectionShell className="bg-neutral-950/40">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <SectionHeading 
          subtitle="Mission"
          title="Who We Are"
          align="left"
          className="mb-0"
        />
        <div className="space-y-8 text-neutral-400 text-lg leading-relaxed">
          <p>
            WeCaHan was established with a singular focus: to solve complex 
            operational challenges through intelligent digital architecture. 
            We believe that the most effective systems are those that blend 
            technical excellence with absolute practicality.
          </p>
          <p>
            Our purpose is to empower businesses by building the foundational 
            infrastructure they need to scale. We don&apos;t just build software; 
            we engineer long-term assets that simplify digital workflows and 
            generate measurable value.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
