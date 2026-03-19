import React from "react";

/**
 * SectionShell
 * A standardized wrapper for all page sections.
 * Ensures consistent vertical and horizontal padding, and a clean baseline for blocks.
 */
interface SectionShellProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  isFullWidth?: boolean;
}

export default function SectionShell({
  children,
  className = "",
  id,
  isFullWidth = false,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`relative py-12 md:py-20 lg:py-24 overflow-hidden ${className}`}
    >
      <div className={isFullWidth ? "w-full" : "max-w-7xl mx-auto px-6"}>
        {children}
      </div>
    </section>
  );
}
