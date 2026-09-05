import { MetadataRoute } from 'next';
import { PROJECTS } from '@/data/projects';
import { JOURNAL_ARTICLES } from '@/data/journal';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://forma-atelier.example';

  const routes = [
    '',
    '/projects',
    '/studio',
    '/services',
    '/journal',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const projectRoutes = PROJECTS.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const journalRoutes = JOURNAL_ARTICLES.map((a) => ({
    url: `${baseUrl}/journal/${a.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...projectRoutes, ...journalRoutes];
}
