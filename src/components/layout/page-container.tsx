import React from "react";

/**
 * PageContainer
 * The outermost wrapper for all pages.
 * Ensures consistent main content alignment and min-height.
 */
interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageContainer({
  children,
  className = "",
}: PageContainerProps) {
  return (
    <main className={`min-h-screen pt-12 md:pt-16 ${className}`}>
      {children}
    </main>
  );
}
