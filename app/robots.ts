import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const base = process.env.BASE_URL;
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
      disallow: ['/admin','/api'],
    },
    sitemap: [`${base}/sitemap.xml`],
    host: base,
  };
}
