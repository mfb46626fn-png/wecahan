"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Cpu } from "lucide-react";

const features = [
    {
        icon: <Cpu className="w-6 h-6 text-blue-400" />,
        title: "Akıllı Otomasyon",
        description: "Operasyonel yükleri azaltarak, zamanınızı daha değerli stratejik kararlara ayırmanızı sağlıyoruz."
    },
    {
        icon: <TrendingUp className="w-6 h-6 text-indigo-400" />,
        title: "Kârlılık Odaklı",
        description: "Verileri en iyi şekilde analiz ederek e-ticaret satıcılarının marjlarını ve cirolarını maksimize ediyoruz."
    },
    {
        icon: <Zap className="w-6 h-6 text-cyan-400" />,
        title: "Sınırsız İnovasyon",
        description: "Gelişen teknolojileri anında entegre ederek, rakiplerinizden her zaman bir adım önde olmanızı garanti ediyoruz."
    }
];

export function Vision() {
    return (
        <section className="py-24 relative overflow-hidden bg-white/[0.01]">
            <div className="container-custom px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Sıradan Olanı Otomatikleştirip, <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                            Yaratıcılığa Alan Açıyoruz
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-neutral-400 leading-relaxed"
                    >
                        Vizyonumuz, insan hatasını ve manuel süreçleri ortadan kaldıran sistemler inşa etmek.
                        Müşterilerimizin işlerini daha hızlı, daha akıllı ve daha kârlı bir şekilde büyütmeleri
                        için yorulmadan çalışıyoruz.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]"
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.05] mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-neutral-400 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
