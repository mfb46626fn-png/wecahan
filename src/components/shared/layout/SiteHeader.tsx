"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/routing";
import { mainNavigation } from "@/data/site/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/shared/navigation/LanguageSwitcher";

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("Navigation");

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg py-4 border-b border-border-subtle"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex justify-between items-center">
        <Link href="/" className="group flex items-center" aria-label="WeCaHan Home">
          <Image 
            src="/logo.png" 
            alt="WeCaHan" 
            width={160} 
            height={32} 
            className="h-8 md:h-9 w-auto object-contain" 
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8 mr-4 border-r border-border-subtle pr-8">
            {mainNavigation.map((item) => {
              const isActive = pathname === `/${pathname.split('/')[1]}${item.href === '/' ? '' : item.href}`;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:text-brand-accent ${
                    isActive ? "text-brand-accent" : "text-text-secondary"
                  }`}
                >
                  {t(item.label)}
                </Link>
              );
            })}
          </nav>
          <LanguageSwitcher />
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center space-x-4">
          <LanguageSwitcher />
          <button
            className="text-text-primary p-2 transition-colors hover:text-brand-accent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-surface border-t border-border-subtle overflow-hidden shadow-2xl"
          >
            <nav className="flex flex-col p-8 space-y-6">
              {mainNavigation.map((item) => {
                const isActive = pathname === `/${pathname.split('/')[1]}${item.href === '/' ? '' : item.href}`;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-xl font-bold tracking-widest uppercase transition-colors font-display ${
                      isActive ? "text-brand-accent" : "text-text-secondary"
                    }`}
                  >
                    {t(item.label)}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
