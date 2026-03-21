"use client";

import React from "react";

export default function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen pt-24 pb-12">
      {children}
    </main>
  );
}
