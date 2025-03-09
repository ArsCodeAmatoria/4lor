import { NextResponse } from 'next/server'
import { Article } from '@/types/article'

const articles: Article[] = [
  {
    id: 1,
    title: "The Bridge Between the Frankfurt School and the World Economic Forum",
    slug: "frankfurt-wef-bridge",
    excerpt: "Exploring the ideological continuity between Cultural Marxism and modern technocratic globalism",
    author: "4lor Research",
    date: "2024-03-08",
    category: "Research",
    tags: ["Frankfurt School", "WEF", "Cultural Marxism", "Globalism"],
    readTime: "15 min",
    featured: true
  },
  // Add more articles here as they are created
]

export async function GET() {
  return NextResponse.json(articles)
} 