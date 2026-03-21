import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/seo/metadata';
import { getProjects } from '@/lib/content/projects';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.baseUrl;
  const locales = siteConfig.locales as ("tr" | "en")[];

  const staticPages = [
    '',
    '/about',
    '/projects',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Static Pages for all locales
  for (const locale of locales) {
    for (const page of staticPages) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: page === '' ? 1 : 0.8,
      });
    }
  }

  // Project Detail Pages for all locales
  for (const locale of locales) {
    const projects = await getProjects(locale);
    for (const project of projects) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  return sitemapEntries;
}
