"use client";

import React, { useState } from "react";
import PrimaryButton from "@/components/ui/primary-button";

/**
 * ContactForm
 * Standardized, professional contact form with validation states.
 */
export default function ContactForm() {
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
      <div className="glass-panel p-12 border border-[#00f0ff]/20 text-center space-y-6">
        <div className="w-16 h-16 bg-[#00f0ff]/10 rounded-full flex items-center justify-center mx-auto text-[#00f0ff]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-white text-2xl font-bold uppercase tracking-tight">Message Received</h3>
        <p className="text-neutral-400 max-w-sm mx-auto">
          Thank you for reaching out. A partner from the WeCaHan ecosystem will contact you shortly.
        </p>
        <button 
          onClick={() => setStatus("idle")}
          className="text-[#00f0ff] text-xs font-bold uppercase tracking-widest hover:underline pt-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-neutral-500 text-[10px] uppercase font-bold tracking-widest ml-1">Full Name</label>
          <input 
            required
            type="text" 
            placeholder="e.g. John Doe"
            className="w-full bg-neutral-900 border border-white/5 p-4 text-white text-sm focus:outline-none focus:border-[#00f0ff]/40 transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="text-neutral-500 text-[10px] uppercase font-bold tracking-widest ml-1">Email Address</label>
          <input 
            required
            type="email" 
            placeholder="e.g. john@company.com"
            className="w-full bg-neutral-900 border border-white/5 p-4 text-white text-sm focus:outline-none focus:border-[#00f0ff]/40 transition-colors"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label className="text-neutral-500 text-[10px] uppercase font-bold tracking-widest ml-1">Company / Project</label>
        <input 
          type="text" 
          placeholder="e.g. Tech Solutions Inc."
          className="w-full bg-neutral-900 border border-white/5 p-4 text-white text-sm focus:outline-none focus:border-[#00f0ff]/40 transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label className="text-neutral-500 text-[10px] uppercase font-bold tracking-widest ml-1">Message</label>
        <textarea 
          required
          rows={5}
          placeholder="How can we help architect your digital foundations?"
          className="w-full bg-neutral-900 border border-white/5 p-4 text-white text-sm focus:outline-none focus:border-[#00f0ff]/40 transition-colors resize-none"
        />
      </div>

      <div className="pt-4">
        <PrimaryButton type="submit" disabled={status === "submitting"} className="w-full md:w-auto">
          {status === "submitting" ? "Sending..." : "Send Message"}
        </PrimaryButton>
      </div>
    </form>
  );
}
