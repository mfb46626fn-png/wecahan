import React from 'react';
import { ProjectStatus } from '@/types/projects';
import { twMerge } from 'tailwind-merge';

interface ProjectStatusBadgeProps {
  status: ProjectStatus;
  tr?: string;
  en?: string;
  locale: string;
}

export default function ProjectStatusBadge({ status, tr, en, locale }: ProjectStatusBadgeProps) {
  const label = locale === 'tr' ? (tr || (status === 'active' ? 'Aktif' : 'Geliştirme Aşamasında')) : (en || (status === 'active' ? 'Active' : 'In Development'));
  
  const statusClasses: Record<ProjectStatus, string> = {
    active: 'text-brand-accent border-brand-accent/20 bg-brand-accent/5',
    'in-development': 'text-text-secondary border-border-card bg-white/5',
    maintenance: 'text-text-muted border-border-subtle bg-transparent',
    archived: 'text-text-muted border-border-subtle bg-transparent'
  };

  return (
    <span className={twMerge(
      "inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border",
      statusClasses[status]
    )}>
      <span className={twMerge(
        "w-1 h-1 rounded-full mr-2",
        status === 'active' ? "bg-brand-accent animate-pulse" : "bg-text-secondary"
      )} />
      {label}
    </span>
  );
}
