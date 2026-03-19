import React from "react";
import SectionShell from "@/components/layout/section-shell";
import { Mail, Linkedin, MapPin, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";

/**
 * ContactInfoBlock
 * Professional, clean display of contact categories.
 */
export default function ContactInfoBlock() {
  const t = useTranslations("Contact");

  const infoItems = [
    {
      id: "email",
      labelKey: "infoLabels.email",
      value: "contact@wecahan.com",
      href: "mailto:contact@wecahan.com",
      icon: Mail,
    },
    {
      id: "linkedin",
      labelKey: "infoLabels.linkedin",
      value: "linkedin.com/company/wecahan",
      href: "https://linkedin.com/company/wecahan",
      icon: Linkedin,
    },
    {
      id: "location",
      labelKey: "infoLabels.location",
      valueKey: "infoValues.location",
      icon: MapPin,
    },
  ];

  return (
    <SectionShell>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {infoItems.map((item) => (
          <div key={item.id} className="bg-neutral-950 p-12 border border-white/5 space-y-6 group hover:border-white/20 transition-all duration-300">
            <div className="flex items-center justify-between">
              <item.icon className="w-6 h-6 text-white" />
              {item.href && <ExternalLink className="w-3 h-3 text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity" />}
            </div>
            <div className="space-y-2">
              <span className="text-neutral-600 text-[10px] uppercase font-bold tracking-[0.3em] block">
                {t(item.labelKey)}
              </span>
              {item.href ? (
                <a 
                  href={item.href}
                  className="text-white text-xl font-bold tracking-tight hover:text-white/70 transition-colors block"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-white text-xl font-bold tracking-tight block">
                  {item.valueKey ? t(item.valueKey) : item.value}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
