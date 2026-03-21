"use client";

import React from "react";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const currentLocale = params.locale as string;

  const toggleLanguage = () => {
    const nextLocale = currentLocale === "tr" ? "en" : "tr";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="group relative flex items-center space-x-2 text-[10px] font-bold tracking-[0.3em] uppercase text-white/50 hover:text-white transition-colors py-2"
      aria-label="Switch Language"
    >
      <span className={currentLocale === "tr" ? "text-white" : ""}>TR</span>
      <span className="text-white/20">/</span>
      <span className={currentLocale === "en" ? "text-white" : ""}>EN</span>
      
      {/* Subtle indicator underline */}
      <motion.div 
        className="absolute bottom-0 left-0 h-[1px] bg-white/20 w-full"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </button>
  );
}
