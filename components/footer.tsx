"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative pt-24 pb-8 border-t border-white/5 bg-neutral-950">
            <div className="container-custom px-4">
                <div className="grid md:grid-cols-2 gap-12 mb-16 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold text-white tracking-tight">We CaHan</h2>
                        <p className="text-neutral-400 max-w-sm leading-relaxed">
                            Teknoloji, e-ticaret ve otomasyon çözümleriyle dijital geleceğinizi inşa ediyoruz.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col md:items-end space-y-4"
                    >
                        <a
                            href="mailto:contact@wecahan.com"
                            className="inline-flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group"
                        >
                            <Mail className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
                            <span>contact@wecahan.com</span>
                        </a>
                        <div className="inline-flex items-center gap-3 text-neutral-300">
                            <MapPin className="w-5 h-5" />
                            <span>Global Operations</span>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center pt-8 border-t border-white/5"
                >
                    <p className="text-sm text-neutral-500">
                        &copy; 2026 We CaHan. Tüm hakları saklıdır.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
