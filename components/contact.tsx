"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Copy, Check, ExternalLink } from "lucide-react";

const EMAIL = "info@wecahan.com";

export function Contact() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="relative section-padding"
        >
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-neon-blue/5 to-transparent" />
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <span className="text-neon-blue text-sm font-medium tracking-widest uppercase mb-4 block">
                        Get in Touch
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        Connect <span className="gradient-text">With Us</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                        We are always open to discussing new ventures, partnerships, and
                        innovative opportunities. Let&apos;s build something extraordinary together.
                    </p>

                    {/* Email display */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="glass glass-hover p-6 md:p-8 mb-8"
                    >
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-lg md:text-xl font-medium">{EMAIL}</span>
                            </div>
                            <div className="flex gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={copyEmail}
                                    className="glass border-white/10 hover:bg-white/5 hover:border-white/20"
                                >
                                    {copied ? (
                                        <>
                                            <Check className="w-4 h-4 mr-2 text-green-400" />
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-4 h-4 mr-2" />
                                            Copy
                                        </>
                                    )}
                                </Button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Open email button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <Button
                            asChild
                            size="lg"
                            className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 text-white px-8 py-6 text-base font-medium shadow-lg shadow-neon-blue/20"
                        >
                            <a href={`mailto:${EMAIL}`}>
                                <Mail className="w-5 h-5 mr-2" />
                                Send us an Email
                                <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
