"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Zap, Users } from "lucide-react";

const features = [
    {
        icon: Globe,
        title: "Global Reach",
        description: "Operating across markets with scalable digital infrastructure.",
    },
    {
        icon: Zap,
        title: "Innovation First",
        description: "Pioneering technologies that reshape commerce and finance.",
    },
    {
        icon: Users,
        title: "Expert Team",
        description: "Visionaries bridging technology and business excellence.",
    },
];

// Pre-generated network line coordinates for pure component rendering
const networkLines = [
    { x1: 123, y1: 456, x2: 789, y2: 234 },
    { x1: 567, y1: 890, x2: 123, y2: 678 },
    { x1: 345, y1: 123, x2: 890, y2: 567 },
    { x1: 789, y1: 345, x2: 234, y2: 890 },
    { x1: 456, y1: 678, x2: 567, y2: 123 },
    { x1: 890, y1: 234, x2: 345, y2: 789 },
    { x1: 234, y1: 567, x2: 678, y2: 345 },
    { x1: 678, y1: 890, x2: 456, y2: 234 },
    { x1: 123, y1: 789, x2: 890, y2: 456 },
    { x1: 567, y1: 345, x2: 234, y2: 678 },
    { x1: 890, y1: 123, x2: 567, y2: 890 },
    { x1: 345, y1: 678, x2: 789, y2: 123 },
    { x1: 678, y1: 456, x2: 123, y2: 567 },
    { x1: 234, y1: 890, x2: 456, y2: 345 },
    { x1: 456, y1: 234, x2: 890, y2: 678 },
    { x1: 789, y1: 567, x2: 345, y2: 890 },
    { x1: 123, y1: 345, x2: 678, y2: 789 },
    { x1: 567, y1: 678, x2: 234, y2: 456 },
    { x1: 890, y1: 789, x2: 567, y2: 234 },
    { x1: 345, y1: 456, x2: 890, y2: 567 },
];

export function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative section-padding overflow-hidden"
        >
            {/* Background network visualization */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <svg
                    className="absolute w-full h-full opacity-[0.03]"
                    viewBox="0 0 1000 1000"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <defs>
                        <pattern
                            id="network-pattern"
                            x="0"
                            y="0"
                            width="100"
                            height="100"
                            patternUnits="userSpaceOnUse"
                        >
                            <circle cx="50" cy="50" r="1" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#network-pattern)" />
                    {/* Connection lines */}
                    {networkLines.map((line, i) => (
                        <motion.line
                            key={i}
                            x1={line.x1}
                            y1={line.y1}
                            x2={line.x2}
                            y2={line.y2}
                            stroke="currentColor"
                            strokeWidth="0.5"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={isInView ? { pathLength: 1, opacity: 0.1 } : {}}
                            transition={{ duration: 2, delay: i * 0.1 }}
                        />
                    ))}
                </svg>
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-neon-blue text-sm font-medium tracking-widest uppercase mb-4 block">
                        Who We Are
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        A Global <span className="gradient-text">Innovation Hub</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        We are a team of visionaries building intelligent systems and scalable
                        e-commerce infrastructures. Our mission is to empower businesses with
                        cutting-edge technology that transforms how commerce operates globally.
                    </p>
                </motion.div>

                {/* Feature cards */}
                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                            className="glass glass-hover p-8 text-center group"
                        >
                            <motion.div
                                className="w-14 h-14 mx-auto mb-6 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                                whileHover={{ rotate: 5 }}
                            >
                                <feature.icon className="w-7 h-7 text-neon-blue" />
                            </motion.div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Stats section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/5"
                >
                    {[
                        { value: "3+", label: "Active Ventures" },
                        { value: "2", label: "Co-Founders" },
                        { value: "∞", label: "Possibilities" },
                        { value: "2024", label: "Founded" },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                        >
                            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
