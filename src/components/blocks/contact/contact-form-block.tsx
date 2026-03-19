import React from "react";
import SectionShell from "@/components/layout/section-shell";
import SectionHeading from "@/components/ui/section-heading";
import ContactForm from "@/components/forms/contact-form";
import { useTranslations } from "next-intl";

/**
 * ContactFormBlock
 * A clean, structured section for the technical brief form.
 */
export default function ContactFormBlock() {
  const t = useTranslations("Contact");

  return (
    <SectionShell className="bg-neutral-900/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <SectionHeading 
          subtitle="formBadge"
          title="formTitle"
          description={t("formDescription")}
          align="left"
          className="lg:sticky lg:top-32"
        />
        
        <div className="bg-neutral-950 p-10 md:p-16 border border-white/5">
          <ContactForm />
        </div>
      </div>
    </SectionShell>
  );
}
