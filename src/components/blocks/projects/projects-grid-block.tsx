import React from "react";
import SectionShell from "@/components/layout/section-shell";
import StatusBadge from "@/components/ui/status-badge";
import { projects } from "@/data/projects";
import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";

/**
 * ProjectsGridBlock
 * Showcases exactly 3 projects with high clarity and balanced grid.
 */
export default function ProjectsGridBlock() {
  // Only use the 3 curated projects
  const displayProjects = projects.slice(0, 3);

  return (
    <SectionShell className="bg-neutral-950/40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayProjects.map((project) => (
          <div 
            key={project.slug}
            className="flex flex-col glass-panel p-12 border border-white/5 hover:border-[#00f0ff]/20 transition-all duration-500 group min-h-[450px]"
          >
            <div className="flex justify-between items-start mb-10">
               <StatusBadge status={project.status} />
               <span className="text-neutral-600 text-[10px] uppercase font-bold tracking-widest border border-white/5 px-2 py-1">
                 {project.category}
               </span>
            </div>
            
            <div className="flex-grow space-y-6">
              <h3 className="text-3xl font-bold tracking-tighter text-white uppercase group-hover:text-[#00f0ff] transition-colors">
                {project.name}
              </h3>
              <p className="text-neutral-500 text-base leading-relaxed group-hover:text-neutral-400 transition-colors">
                {project.shortDescription}
              </p>
            </div>
            
            <div className="pt-10 border-t border-white/5">
              <Link 
                href={project.href}
                className="group/link flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-[#00f0ff] transition-all"
              >
                <span>View Project Details</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
