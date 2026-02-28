import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Hero" });

  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden">
      {/* Background Core Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00f0ff] opacity-10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center mt-24 relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 uppercase text-white">
          <span className="block mb-2 text-white/90">{t("title1")}</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#b026ff] glow-text">
            {t("title2")}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-12">
          {t("subtitle")}
        </p>

        <Link href="/projects" className="futuristic-btn inline-block">
          {t("cta")}
        </Link>
      </div>

      {/* Decorative Cyber Lines */}
      <div className="absolute bottom-10 left-0 w-full flex justify-center space-x-4 opacity-30">
        <div className="w-16 h-px bg-[#00f0ff]" />
        <div className="w-8 h-px bg-[#b026ff]" />
        <div className="w-32 h-px bg-[#00f0ff]" />
      </div>
    </div>
  );
}
