import React from "react";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import SectionShell from "@/components/layout/section-shell";
import StatusBadge from "@/components/ui/status-badge";
import PrimaryButton from "@/components/ui/primary-button";
import { projects } from "@/data/projects";
import { CheckCircle2, Link as LinkIcon } from "lucide-react";

/**
 * ProjectDetailPage
 * Refined project detail page with specialized blocks and professional content.
 * Follows the clean, premium corporate tech aesthetic.
 */
interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.name} | WeCaHan Ecosystem`,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "ProjectsData" });

  const capabilities = t.raw(`${slug}.capabilities`) as string[];

  return (
    <main className="min-h-screen">
      {/* 1. Hero Section */}
      <SectionShell className="pt-40 md:pt-56 pb-20 md:pb-32">
        <div className="max-w-5xl">
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em] px-4 py-2 border border-white/5 bg-white/5">
              {t(`${slug}.wecahanProject`)}
            </span>
            <StatusBadge status={project.status} />
            <span className="text-neutral-500 text-[10px] font-bold uppercase tracking-[0.3em]">
              {t(`${slug}.category`)}
            </span>
          </div>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-white uppercase leading-[0.8] mb-12">
            {project.name}
          </h1>
          <p className="text-neutral-400 text-xl md:text-3xl leading-relaxed max-w-3xl font-light">
            {t(`${slug}.heroDescription`)}
          </p>
        </div>
      </SectionShell>

      {/* 2. Overview Section */}
      <SectionShell className="bg-neutral-900/10 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-6">
            <span className="text-neutral-500 text-[10px] font-bold uppercase tracking-[0.4em]">
              {t(`${slug}.overviewTitle`)}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase leading-tight">
              Strategic <br /> Intent
            </h2>
          </div>
          <div className="text-neutral-400 text-lg md:text-xl leading-relaxed font-light border-l border-white/5 pl-10">
            <p>{t(`${slug}.overviewDescription`)}</p>
          </div>
        </div>
      </SectionShell>

      {/* 3. Core Capabilities */}
      <SectionShell>
        <div className="space-y-16">
          <div className="max-w-3xl">
             <span className="text-neutral-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">
               Engineered Logic
             </span>
             <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase leading-tight">
               {t(`${slug}.capabilitiesTitle`)}
             </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability) => (
              <div key={capability} className="flex flex-col justify-between p-8 bg-neutral-950 border border-white/5 transition-all hover:border-white/20 group">
                <CheckCircle2 className="w-5 h-5 text-white/10 group-hover:text-white transition-colors mb-6" />
                <h3 className="text-white text-sm font-bold tracking-widest uppercase leading-snug">{capability}</h3>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* 4. Current Status & 5. Connection */}
      <SectionShell className="bg-neutral-900/10 border-t border-b border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          {/* Status */}
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-neutral-500 text-[10px] font-bold uppercase tracking-[0.4em]">
                Availability
              </span>
              <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">
                {t(`${slug}.statusTitle`)}
              </h3>
            </div>
            <p className="text-neutral-500 text-lg font-light leading-relaxed">
              {t(`${slug}.statusDescription`)}
            </p>
          </div>

          {/* Connection */}
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-neutral-500 text-[10px] font-bold uppercase tracking-[0.4em]">
                Ecosystem
              </span>
              <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">
                {t(`${slug}.connectionTitle`)}
              </h3>
            </div>
            <p className="text-neutral-500 text-lg font-light leading-relaxed">
              {t(`${slug}.connectionDescription`)}
            </p>
          </div>
        </div>
      </SectionShell>

      {/* 6. CTA Section */}
      <SectionShell className="py-24 md:py-48">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="inline-flex items-center space-x-2 text-white/20">
            <LinkIcon className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.5em]">Initiative Link</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white uppercase leading-tight">
             {t(`${slug}.ctaTitle`)}
          </h2>
          <div className="pt-8">
            {project.ctaHref && (
              <a href={project.ctaHref} target="_blank" rel="noopener noreferrer">
                <PrimaryButton>{t(`${slug}.ctaLabel`)}</PrimaryButton>
              </a>
            )}
          </div>
        </div>
      </SectionShell>
    </main>
  );
}
