import React from "react";

/**
 * StatusBadge
 * A small indicator for project or system status.
 * Supports "active" and "in-development" states.
 */
interface StatusBadgeProps {
  status: "active" | "in-development";
  className?: string;
}

export default function StatusBadge({
  status,
  className = "",
}: StatusBadgeProps) {
  const isWebReady = status === "active";

  return (
    <div
      className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
        isWebReady
          ? "bg-[#00f0ff]/5 border-[#00f0ff]/20 text-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.1)]"
          : "bg-[#b026ff]/5 border-[#b026ff]/20 text-[#b026ff] shadow-[0_0_10px_rgba(176,38,255,0.1)]"
      } ${className}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full animate-pulse ${
          isWebReady ? "bg-[#00f0ff] shadow-[0_0_5px_#00f0ff]" : "bg-[#b026ff] shadow-[0_0_5px_#b026ff]"
        }`}
      />
      <span>{status === "active" ? "Active" : "In Development"}</span>
    </div>
  );
}
