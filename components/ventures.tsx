"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Sparkles, TrendingUp, Rocket } from "lucide-react";

const ventures = [
    {
        name: "Prificient",
        description:
            "Intelligent financial management and decision support system for online sellers. Empowering merchants with AI-driven insights.",
        tags: ["SaaS", "FinTech", "AI"],
        icon: Sparkles,
        gradient: "from-blue-500 to-cyan-500",
        shadowColor: "shadow-blue-500/20",
        status: "Active",
    },
    {
        name: "Dropsetup",
        description:
            "End-to-end e-commerce setup and operations excellence. From store creation to scaling success.",
        tags: ["E-commerce", "Growth", "Operations"],
        icon: TrendingUp,
        gradient: "from-purple-500 to-pink-500",
        shadowColor: "shadow-purple-500/20",
        status: "Active",
    },
    {
        name: "Future Labs",
        description:
            "Incubating the next generation of digital ideas. Where innovation meets execution.",
        tags: ["R&D", "Innovation", "Incubator"],
        icon: Rocket,
        gradient: "from-orange-500 to-amber-500",
        shadowColor: "shadow-orange-500/20",
        status: "Coming Soon",
    },
];

export function Ventures() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            id="ventures"
            ref={sectionRef}
            className="relative section-padding"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-neon-purple/5 rounded-full blur-3xl -translate-y-1/2" />
                <div className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-neon-blue/5 rounded-full blur-3xl -translate-y-1/2" />
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-neon-purple text-sm font-medium tracking-widest uppercase mb-4 block">
                        Our Ventures
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        Building the <span className="gradient-text">Digital Ecosystem</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Our portfolio of innovative ventures is designed to transform how
                        businesses operate in the digital age.
                    </p>
                </motion.div>

                {/* Ventures grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {ventures.map((venture, index) => (
                        <motion.div
                            key={venture.name}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                            className="group relative"
                        >
                            <div className={`glass glass-hover p-8 h-full flex flex-col ${venture.shadowColor} hover:shadow-lg transition-all duration-300`}>
                                {/* Header */}
                                <div className="flex items-start justify-between mb-6">
                                    <div
                                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${venture.gradient} flex items-center justify-center`}
                                    >
                                        <venture.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-medium ${venture.status === "Active"
                                                ? "bg-green-500/10 text-green-400"
                                                : "bg-amber-500/10 text-amber-400"
                                            }`}
                                    >
                                        {venture.status}
                                    </span>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 group-hover:text-white transition-colors">
                                    {venture.name}
                                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                                    {venture.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {venture.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 rounded-full text-xs bg-white/5 text-muted-foreground border border-white/5"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Gradient border on hover */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${venture.gradient} opacity-10 blur-xl`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
