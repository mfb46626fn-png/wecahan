"use client";

import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="py-24 relative">
            <div className="container-custom px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Hakkımızda</h2>
                    <p className="text-lg text-neutral-400 leading-relaxed">
                        We CaHan, dijital ticaretin potansiyelini maksimize etmek ve işletmelerin operasyonel
                        yüklerini en aza indirmek amacıyla kuruldu. E-ticaretin karmaşık dünyasını sadeleştiren
                        çözümlerimizle, global ölçekte değer yaratıyoruz.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* M. Can Akar */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-colors"
                    >
                        <h3 className="text-2xl font-bold text-white mb-2">M. Can Akar</h3>
                        <p className="text-blue-400 mb-4 font-medium">Kurucu Ortak</p>
                        <p className="text-neutral-400 leading-relaxed">
                            Teknoloji mimarisi, yazılım geliştirme ve ölçeklenebilir sistemler konusunda
                            uzman. Prificient gibi SaaS ürünlerinin teknik altyapısını ve otomasyon stratejilerini
                            tasarlayarak, veri odaklı kararlarla büyüme sağlıyor.
                        </p>
                    </motion.div>

                    {/* Hakan Aşcı */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-colors"
                    >
                        <h3 className="text-2xl font-bold text-white mb-2">Hakan Aşcı</h3>
                        <p className="text-indigo-400 mb-4 font-medium">Kurucu Ortak</p>
                        <p className="text-neutral-400 leading-relaxed">
                            E-ticaret operasyonları, dijital pazarlama ve marka stratejileri üzerine odaklanıyor.
                            Kullanıcı deneyimi ve dönüşüm optimizasyonu konusundaki derin tecrübesiyle,
                            Yuvaa Store ve diğer girişimlerin ticari başarılarını yönetiyor.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
