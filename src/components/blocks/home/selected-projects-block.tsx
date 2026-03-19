import React from "react";
import SectionShell from "@/components/layout/section-shell";
import SectionHeading from "@/components/ui/section-heading";
import StatusBadge from "@/components/ui/status-badge";
import { projects } from "@/data/projects";
import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

/**
 * SelectedProjectsBlock
 * Showcases featured projects in a clean, modern architecture.
 * Links to dynamic detail pages.
 */
export default function SelectedProjectsBlock() {
  const t = useTranslations("ProjectsData");
  const tHome = useTranslations("Home");
  const tCommon = useTranslations("Common");

  const featuredProjects = projects.slice(0, 3);

  return (
    <SectionShell>
      <SectionHeading 
        subtitle="showcase"
        title="selectedProjects"
        description={tHome("projectsDescription")}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {featuredProjects.map((project) => (
          <div 
            key={project.slug}
            className="group flex flex-col bg-neutral-950 border border-white/5 p-12 hover:border-white/20 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-10">
               <StatusBadge status={project.status} />
               <span className="text-neutral-500 text-[10px] uppercase font-bold tracking-[0.2em] border border-white/10 px-3 py-1 bg-white/5">
                 {t(`${project.slug}.category`)}
               </span>
            </div>
            
            <h3 className="text-2xl font-bold tracking-tighter text-white uppercase mb-4 transition-colors">
              {t(`${project.slug}.name`)}
            </h3>
            <p className="text-neutral-500 text-sm leading-relaxed mb-12 flex-grow font-light">
              {t(`${project.slug}.shortDescription`)}
            </p>
            
            <Link 
              href={`/projects/${project.slug}`}
              className="group/link flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.3em] text-white/50 hover:text-white transition-all border-t border-white/5 pt-6"
            >
              <span>{tCommon("explore")}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
            </Link>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
