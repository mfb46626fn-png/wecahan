import React from "react";
import SectionShell from "@/components/layout/section-shell";
import { Mail, Linkedin, MapPin, ExternalLink } from "lucide-react";

/**
 * ContactInfoBlock
 * Professional display of contact categories.
 */
const infoItems = [
  {
    label: "Email",
    value: "contact@wecahan.com",
    href: "mailto:contact@wecahan.com",
    icon: Mail,
  },
  {
    label: "Professional",
    value: "linkedin.com/company/wecahan",
    href: "https://linkedin.com/company/wecahan",
    icon: Linkedin,
  },
  {
    label: "Location",
    value: "Remote First / Turkey",
    icon: MapPin,
  },
];

export default function ContactInfoBlock() {
  return (
    <SectionShell>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {infoItems.map((item) => (
          <div key={item.label} className="glass-panel p-10 border border-white/5 space-y-4 group hover:border-[#00f0ff]/10 transition-all">
            <div className="flex items-center justify-between">
              <item.icon className="w-6 h-6 text-[#00f0ff]" />
              {item.href && <ExternalLink className="w-3 h-3 text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity" />}
            </div>
            <div>
              <span className="text-neutral-600 text-[10px] uppercase font-bold tracking-widest block mb-1">
                {item.label}
              </span>
              {item.href ? (
                <a 
                  href={item.href}
                  className="text-white text-lg font-bold tracking-tight hover:text-[#00f0ff] transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-white text-lg font-bold tracking-tight">
                  {item.value}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
