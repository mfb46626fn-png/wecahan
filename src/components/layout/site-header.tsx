"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/routing";
import { mainNavigation } from "@/data/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * SiteHeader
 * A fixed, glassmorphism-enhanced navigation header.
 */
export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on logic page change is handled by link click handlers

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-panel py-3 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#00f0ff] rounded-sm transform rotate-45 group-hover:rotate-90 transition-transform duration-500 shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
          <span className="text-xl font-bold tracking-tighter uppercase text-white glow-text">
            We CaHan
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {mainNavigation.map((item) => {
             const isActive = pathname.includes(item.href);
             return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium tracking-widest uppercase transition-colors hover:text-[#00f0ff] ${
                  isActive ? "text-[#00f0ff]" : "text-neutral-400"
                }`}
              >
                {item.name}
              </Link>
             );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-white/10"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {mainNavigation.map((item) => {
                const isActive = pathname.includes(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-semibold tracking-widest uppercase transition-colors ${
                      isActive ? "text-[#00f0ff]" : "text-neutral-300"
                    }`}
                  >
                    {item.name}
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
