"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const founders = [
    {
        name: "Hakan",
        role: "Co-Founder",
        bio: "Visionary entrepreneur with deep expertise in e-commerce and digital strategy.",
        initials: "H",
        gradient: "from-blue-600 to-cyan-600",
    },
    {
        name: "Furkan",
        role: "Co-Founder",
        bio: "Technology leader bridging the gap between innovation and commercial success.",
        initials: "F",
        gradient: "from-purple-600 to-pink-600",
    },
];

export function Leadership() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            id="team"
            ref={sectionRef}
            className="relative section-padding overflow-hidden"
        >
            {/* Subtle background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-neon-cyan text-sm font-medium tracking-widest uppercase mb-4 block">
                        Leadership
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        The <span className="gradient-text">Founders</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Led by passionate entrepreneurs bridging the gap between technology
                        and commerce, shaping the future of digital business.
                    </p>
                </motion.div>

                {/* Founders grid */}
                <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
                    {founders.map((founder, index) => (
                        <motion.div
                            key={founder.name}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                            className="flex-1 max-w-sm"
                        >
                            <div className="glass glass-hover p-8 text-center group">
                                {/* Avatar */}
                                <motion.div
                                    className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${founder.gradient} flex items-center justify-center text-3xl font-bold text-white shadow-lg`}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {founder.initials}
                                </motion.div>

                                {/* Info */}
                                <h3 className="text-2xl font-semibold mb-1">{founder.name}</h3>
                                <p className="text-neon-blue text-sm font-medium mb-4">
                                    {founder.role}
                                </p>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                    {founder.bio}
                                </p>

                                {/* Social links */}
                                <div className="flex justify-center gap-3">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                                        aria-label={`${founder.name}'s LinkedIn`}
                                    >
                                        <Linkedin className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                                        aria-label={`${founder.name}'s Twitter`}
                                    >
                                        <Twitter className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Quote section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-20 text-center"
                >
                    <blockquote className="text-xl md:text-2xl text-muted-foreground italic max-w-3xl mx-auto">
                        &ldquo;We believe in building technology that empowers entrepreneurs
                        to achieve more than they ever thought possible.&rdquo;
                    </blockquote>
                </motion.div>
            </div>
        </section>
    );
}
