"use client";

import React, { useState } from "react";
import PrimaryButton from "@/components/ui/primary-button";
import { useTranslations } from "next-intl";

/**
 * ContactForm
 * Standardized, professional contact form with verification states.
 * Minimal design for a clean corporate look.
 */
export default function ContactForm() {
  const t = useTranslations("Contact");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="bg-neutral-900/50 p-16 border border-white/10 text-center space-y-8">
        <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto text-white">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="space-y-4">
          <h3 className="text-white text-3xl font-bold uppercase tracking-tight">{t("successTitle")}</h3>
          <p className="text-neutral-500 max-w-sm mx-auto font-light">
            {t("successDescription")}
          </p>
        </div>
        <button 
          onClick={() => setStatus("idle")}
          className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em] hover:text-white transition-colors pt-8 border-t border-white/5 w-full block"
        >
          {t("sendAnother")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label className="text-neutral-600 text-[10px] uppercase font-bold tracking-[0.3em] ml-1">{t("labels.name")}</label>
          <input 
            required
            type="text" 
            placeholder={t("placeholders.name")}
            className="w-full bg-neutral-900 border-b border-white/10 p-4 text-white text-lg focus:outline-none focus:border-white/40 transition-colors font-light placeholder:text-neutral-700"
          />
        </div>
        <div className="space-y-3">
          <label className="text-neutral-600 text-[10px] uppercase font-bold tracking-[0.3em] ml-1">{t("labels.email")}</label>
          <input 
            required
            type="email" 
            placeholder={t("placeholders.email")}
            className="w-full bg-neutral-900 border-b border-white/10 p-4 text-white text-lg focus:outline-none focus:border-white/40 transition-colors font-light placeholder:text-neutral-700"
          />
        </div>
      </div>
      
      <div className="space-y-3">
        <label className="text-neutral-600 text-[10px] uppercase font-bold tracking-[0.3em] ml-1">{t("labels.company")}</label>
        <input 
          type="text" 
          placeholder={t("placeholders.company")}
          className="w-full bg-neutral-900 border-b border-white/10 p-4 text-white text-lg focus:outline-none focus:border-white/40 transition-colors font-light placeholder:text-neutral-700"
        />
      </div>

      <div className="space-y-3">
        <label className="text-neutral-600 text-[10px] uppercase font-bold tracking-[0.3em] ml-1">{t("labels.message")}</label>
        <textarea 
          required
          rows={4}
          placeholder={t("placeholders.message")}
          className="w-full bg-neutral-900 border-b border-white/10 p-4 text-white text-lg focus:outline-none focus:border-white/40 transition-colors resize-none font-light placeholder:text-neutral-700"
        />
      </div>

      <div className="pt-8">
        <PrimaryButton type="submit" disabled={status === "submitting"} className="w-full md:w-auto">
          {status === "submitting" ? t("submitting") : t("submit")}
        </PrimaryButton>
      </div>
    </form>
  );
}
