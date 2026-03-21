import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/seo/metadata';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/static/'],
    },
    sitemap: `${siteConfig.baseUrl}/sitemap.xml`,
  };
}
