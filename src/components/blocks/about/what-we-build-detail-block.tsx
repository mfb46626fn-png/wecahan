import React from "react";
import SectionShell from "@/components/layout/section-shell";
import SectionHeading from "@/components/ui/section-heading";
import { Cpu, Globe, BarChart3, Layers } from "lucide-react";

/**
 * WhatWeBuildDetailBlock
 * Dives deeper into specific engineering capabilities.
 */
const details = [
  {
    title: "Automation Systems",
    items: ["Workflow Optimization", "Legacy System Integration", "Custom API Middleware"],
    icon: Cpu,
  },
  {
    title: "Digital Infrastructure",
    items: ["Cloud Architecture", "Scalable Database Design", "System Reliability"],
    icon: Globe,
  },
  {
    title: "Financial Intelligence",
    items: ["Cost Tracking Platforms", "Profit Visibility Tools", "Operational Analytics"],
    icon: BarChart3,
  },
  {
    title: "Product Ecosystems",
    items: ["Modular Software Design", "Unified Control Panels", "Scalable Extensions"],
    icon: Layers,
  },
];

export default function WhatWeBuildDetailBlock() {
  return (
    <SectionShell>
      <SectionHeading 
        subtitle="Capabilities"
        title="What We Build"
        description="Our engineering focus spans across multiple disciplines of digital automation and infrastructure."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {details.map((detail) => (
          <div key={detail.title} className="glass-panel p-10 border border-white/5 space-y-6 group hover:border-[#00f0ff]/20 transition-all">
            <div className="flex items-center space-x-4">
               <detail.icon className="w-8 h-8 text-[#00f0ff]" />
               <h3 className="text-white text-xl font-bold uppercase tracking-tight">{detail.title}</h3>
            </div>
            <ul className="space-y-3">
              {detail.items.map((item) => (
                <li key={item} className="flex items-center text-neutral-500 text-sm">
                  <div className="w-1.5 h-1.5 bg-[#00f0ff]/40 rounded-full mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
