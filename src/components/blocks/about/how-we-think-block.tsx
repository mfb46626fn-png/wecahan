import React from "react";
import SectionShell from "@/components/layout/section-shell";
import SectionHeading from "@/components/ui/section-heading";
import { Zap, Box, TrendingUp, Maximize } from "lucide-react";

/**
 * HowWeThinkBlock
 * Brand philosophy cards.
 */
const philosophies = [
  {
    title: "Simplicity",
    description: "Removing complexity from operational workflows for true efficiency.",
    icon: Box,
  },
  {
    title: "Scalability",
    description: "Building foundational infrastructure that grows with the business.",
    icon: Maximize,
  },
  {
    title: "Execution",
    description: "Prioritizing practical, real-world value over theoretical complexity.",
    icon: Zap,
  },
  {
    title: "Long-term Thinking",
    description: "Architecting systems as long-term assets, not just short-term fixes.",
    icon: TrendingUp,
  },
];

export default function HowWeThinkBlock() {
  return (
    <SectionShell className="bg-neutral-950/20">
      <SectionHeading 
        subtitle="Philosophy"
        title="How We Think"
        description="Our core principles drive every architectural decision we make."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {philosophies.map((phil) => (
          <div key={phil.title} className="glass-panel p-8 border border-white/5 group hover:border-white/10 transition-all">
            <phil.icon className="w-8 h-8 text-[#00f0ff] mb-6 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-4">{phil.title}</h3>
            <p className="text-neutral-500 text-xs leading-relaxed">{phil.description}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
