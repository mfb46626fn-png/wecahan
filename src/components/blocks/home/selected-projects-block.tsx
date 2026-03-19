import React from "react";
import SectionShell from "@/components/layout/section-shell";
import SectionHeading from "@/components/ui/section-heading";
import StatusBadge from "@/components/ui/status-badge";
import { projects } from "@/data/projects";
import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";

/**
 * SelectedProjectsBlock
 * Showcases exactly 3 featured projects.
 */
export default function SelectedProjectsBlock() {
  // Only use the first 3 projects as required
  const featuredProjects = projects.slice(0, 3);

  return (
    <SectionShell>
      <SectionHeading 
        subtitle="Showcase"
        title="Selected Projects"
        description="A list of intelligent systems and high-impact digital initiatives."
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project) => (
          <div 
            key={project.slug}
            className="group flex flex-col glass-panel p-10 border border-white/5 hover:border-[#00f0ff]/20 transition-all duration-500 hover:-translate-y-2"
          >
            <div className="flex justify-between items-start mb-8">
               <StatusBadge status={project.status} />
               <span className="text-neutral-600 text-[10px] uppercase font-bold tracking-widest border border-white/5 px-2 py-1">
                 {project.category}
               </span>
            </div>
            
            <h3 className="text-2xl font-bold tracking-tighter text-white uppercase mb-4 group-hover:text-[#00f0ff] transition-colors">
              {project.name}
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-10 flex-grow">
              {project.shortDescription}
            </p>
            
            <Link 
              href={project.href}
              className="group/link flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-[#00f0ff] transition-all"
            >
              <span>Explore Initiative</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
            </Link>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
