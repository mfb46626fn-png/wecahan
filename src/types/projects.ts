import { LocalizedText } from './content';

export type ProjectStatus = 'active' | 'in-development' | 'maintenance' | 'archived' | 'active-and-expanding';

export interface ProjectData {
  slug: string;
  name: string;
  category: string;
  status: ProjectStatus;
  shortDescription: string;
  externalUrl?: string;
  image?: string;
  
  // Detailed content
  heroDescription: string;
  overviewTitle: string;
  overviewDescription: string;
  capabilitiesTitle: string;
  capabilities: string[];
  statusTitle: string;
  statusDescription: string;
  connectionTitle: string;
  connectionDescription: string;
  ctaTitle: string;
  ctaLabel: string;
}

export interface ProjectListingItem {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  status: ProjectStatus;
}
