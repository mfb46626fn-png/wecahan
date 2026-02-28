import { getTranslations } from "next-intl/server";
import { FuturisticCard } from "@/components/ui/FuturisticCard";
import { Cpu, Globe, ShoppingCart, Zap } from "lucide-react";

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Projects" });

    const projects = [
        {
            title: "Prificient",
            desc: t("prificientDesc"),
            icon: <Cpu className="w-8 h-8 text-[#00f0ff]" />,
            status: t("prificientStatus"),
            glowColor: "rgba(0,240,255,0.1)",
        },
        {
            title: "DropSetup",
            desc: t("dropsetupDesc"),
            icon: <Globe className="w-8 h-8 text-[#b026ff]" />,
            glowColor: "rgba(176,38,255,0.1)",
        },
        {
            title: "Shopify Dropshipping",
            desc: t("shopifyDesc"),
            icon: <ShoppingCart className="w-8 h-8 text-green-400" />,
            glowColor: "rgba(74,222,128,0.1)",
        },
        {
            title: "Otomasyon Satış Hattı",
            desc: t("automationDesc"),
            icon: <Zap className="w-8 h-8 text-yellow-400" />,
            glowColor: "rgba(250,204,21,0.1)",
        }
    ];

    return (
        <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-20 relative">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6 uppercase">
                    {t("title")}
                </h1>
                <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                    {t("description")}
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto relative z-10">
                {projects.map((project, i) => (
                    <FuturisticCard key={project.title} delay={i * 0.1}>
                        <div className="flex items-start justify-between mb-8 relative z-20">
                            <div className="p-4 rounded-sm bg-white/5 border border-white/10 backdrop-blur-sm">
                                {project.icon}
                            </div>
                            {project.status && (
                                <span className="px-3 py-1 text-xs font-mono font-medium text-black bg-[#00f0ff] rounded-sm tracking-wider uppercase">
                                    {project.status}
                                </span>
                            )}
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                            {project.title}
                        </h3>

                        <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                            {project.desc}
                        </p>

                        {/* Project Specific Glow Override via Inline Style for Demo */}
                        <div
                            className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                            style={{ background: `radial-gradient(circle at right bottom, ${project.glowColor}, transparent 70%)` }}
                        />
                    </FuturisticCard>
                ))}
            </div>
        </div>
    );
}
