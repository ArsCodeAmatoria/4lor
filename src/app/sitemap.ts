import { MetadataRoute } from 'next'
import { getArticles } from '@/app/api/articles/route'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://4lor.co'

  // Static routes
  const staticRoutes = [
    '',
    '/dashboard',
    '/analysis',
    '/visualizations',
    '/research',
    '/about',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic routes from articles
  const articleRoutes = getArticles().map(article => ({
    url: `${baseUrl}/research/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'weekly' as const,
    priority: article.featured ? 0.9 : 0.7,
  }))

  return [...staticRoutes, ...articleRoutes]
} 