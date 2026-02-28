"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "GitHub", href: "#", icon: Github },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-white/5">
            <div className="container-custom section-padding py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo and copyright */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <span className="text-xl font-bold gradient-text">We CaHan</span>
                        <p className="text-sm text-muted-foreground">
                            © {currentYear} We CaHan. All rights reserved.
                        </p>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                                aria-label={link.name}
                            >
                                <link.icon className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Bottom tagline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="mt-8 pt-8 border-t border-white/5 text-center"
                >
                    <p className="text-xs text-muted-foreground">
                        Architecting the Future of Digital Commerce
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
