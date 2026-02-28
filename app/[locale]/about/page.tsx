import { getTranslations } from "next-intl/server";
import { FuturisticCard } from "@/components/ui/FuturisticCard";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "About" });

    return (
        <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-20 relative">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6 uppercase">
                    {t("title")}
                </h1>
                <p className="text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                    {t("description")}
                </p>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#b026ff]/30 blur-[100px] pointer-events-none" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <FuturisticCard delay={0.1}>
                    <div className="w-16 h-16 bg-[#00f0ff]/10 rounded-sm border border-[#00f0ff]/30 mb-6 flex items-center justify-center">
                        <span className="text-[#00f0ff] font-mono font-bold">CA</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">M. Can Akar</h2>
                    <p className="text-[#00f0ff] text-sm font-mono mb-4">{t("founder1Role")}</p>
                    <p className="text-neutral-400 leading-relaxed text-sm">
                        {t("founder1Desc")}
                    </p>
                </FuturisticCard>

                <FuturisticCard delay={0.2}>
                    <div className="w-16 h-16 bg-[#b026ff]/10 rounded-sm border border-[#b026ff]/30 mb-6 flex items-center justify-center">
                        <span className="text-[#b026ff] font-mono font-bold">HA</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">Hakan Aşcı</h2>
                    <p className="text-[#b026ff] text-sm font-mono mb-4">{t("founder2Role")}</p>
                    <p className="text-neutral-400 leading-relaxed text-sm">
                        {t("founder2Desc")}
                    </p>
                </FuturisticCard>
            </div>
        </div>
    );
}
