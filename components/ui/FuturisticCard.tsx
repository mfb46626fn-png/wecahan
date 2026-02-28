"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FuturisticCardProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export function FuturisticCard({ children, delay = 0, className = "" }: FuturisticCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={`glow-border glass-panel p-8 rounded-sm relative overflow-hidden group ${className}`}
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f0ff]/5 rounded-full blur-3xl group-hover:bg-[#00f0ff]/10 transition-colors pointer-events-none" />
            <div className="relative z-10">{children}</div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00f0ff]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
    );
}
