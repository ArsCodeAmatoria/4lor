export interface Article {
  id: number
  title: string
  slug: string
  excerpt: string
  author: string
  date: string
  category: string
  tags: string[]
  readTime: string
  featured?: boolean
} 