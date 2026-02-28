"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code, ShoppingBag } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Prificient",
        description: "E-ticaret satıcıları (Shopify, Amazon, Trendyol, Etsy) için otomasyon, sipariş yönetimi ve detaylı kârlılık analizi sunan SaaS platformu.",
        status: "Şu anda aktif geliştirme aşamasında ve dışarıya kapalı.",
        icon: <Code className="w-8 h-8 text-blue-400" />,
        color: "from-blue-500/20 to-transparent",
        href: "#"
    },
    {
        title: "Yuvaa Store",
        description: "Duvar dekorasyonu, rölyef ve el sanatları (handmade art) üzerine odaklanan, estetik ve minimalizm sunan global e-ticaret markası.",
        status: "Aktif",
        icon: <ShoppingBag className="w-8 h-8 text-indigo-400" />,
        color: "from-indigo-500/20 to-transparent",
        href: "https://yuvaastore.com" // Placeholder or actual link
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-24 relative">
            <div className="container-custom px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Projelerimiz</h2>
                    <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                        Geliştirdiğimiz ürünler ve yönettiğimiz markalarla e-ticaret
                        ekosistemine değer katmaya devam ediyoruz.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project, i) => (
                        <Link href={project.href} key={project.title} target={project.href !== "#" ? "_blank" : undefined}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.4, delay: i * 0.2 }}
                                className="group relative h-full p-8 rounded-3xl bg-neutral-900 border border-white/5 overflow-hidden transition-all hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10"
                            >
                                {/* Background Gradient */}
                                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-8">
                                        <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:bg-white/10 transition-colors">
                                            {project.icon}
                                        </div>
                                        <ArrowUpRight className="w-6 h-6 text-neutral-500 group-hover:text-white transition-colors" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                                    <p className="text-neutral-400 leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300">
                                        <span className={`w-1.5 h-1.5 rounded-full mr-2 ${project.status === "Aktif" ? "bg-green-400" : "bg-yellow-400"}`}></span>
                                        {project.status}
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
