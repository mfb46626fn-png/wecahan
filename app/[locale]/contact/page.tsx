import { getTranslations } from "next-intl/server";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Contact" });

    return (
        <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-[85vh] flex items-center justify-center">
            <div className="w-full max-w-2xl glow-border glass-panel p-10 md:p-14 rounded-sm relative">

                {/* Background Decorative Blur */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00f0ff]/20 blur-[80px] pointer-events-none" />

                <div className="text-center mb-12 relative z-10">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-4 uppercase">
                        {t("title")}
                    </h1>
                    <p className="text-neutral-400">
                        {t("description")}
                    </p>
                </div>

                <form className="space-y-6 flex flex-col items-center relative z-10">
                    <div className="w-full">
                        <label className="block text-xs font-mono text-[#00f0ff] mb-2 uppercase tracking-widest">{t("nameLabel")}</label>
                        <input
                            type="text"
                            className="futuristic-input w-full"
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="w-full">
                        <label className="block text-xs font-mono text-[#b026ff] mb-2 uppercase tracking-widest">{t("emailLabel")}</label>
                        <input
                            type="email"
                            className="futuristic-input w-full"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="w-full">
                        <label className="block text-xs font-mono text-white mb-2 uppercase tracking-widest">{t("messageLabel")}</label>
                        <textarea
                            rows={4}
                            className="futuristic-input w-full resize-none"
                            placeholder="..."
                        ></textarea>
                    </div>

                    <button type="button" className="futuristic-btn w-full mt-6 flex justify-center items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse"></span>
                        {t("submit")}
                    </button>
                </form>
            </div>
        </div>
    );
}
