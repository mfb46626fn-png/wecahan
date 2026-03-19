import React from "react";

/**
 * StatusBadge
 * Minimal indicator for project status.
 */
interface StatusBadgeProps {
  status: "active" | "in-development";
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const isActive = status === "active";

  return (
    <div className="flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
      <div className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]" : "bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.4)]"}`} />
      <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
        {isActive ? "Active" : "Development"}
      </span>
    </div>
  );
}
