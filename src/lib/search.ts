import { Article } from '@/types/article'

export interface SearchResult {
  title: string
  excerpt: string
  url: string
  category: string
}

export function searchArticles(query: string, articles: Article[]): SearchResult[] {
  const searchTerms = query.toLowerCase().split(' ')
  
  return articles
    .filter(article => {
      const searchableText = `
        ${article.title.toLowerCase()}
        ${article.excerpt.toLowerCase()}
        ${article.category.toLowerCase()}
        ${article.tags.join(' ').toLowerCase()}
      `
      return searchTerms.every(term => searchableText.includes(term))
    })
    .map(article => ({
      title: article.title,
      excerpt: article.excerpt,
      url: `/research/${article.slug}`,
      category: article.category
    }))
    .sort((a, b) => {
      // Sort by relevance (exact matches first)
      const aExactMatch = a.title.toLowerCase().includes(query.toLowerCase())
      const bExactMatch = b.title.toLowerCase().includes(query.toLowerCase())
      if (aExactMatch && !bExactMatch) return -1
      if (!aExactMatch && bExactMatch) return 1
      return 0
    })
} 