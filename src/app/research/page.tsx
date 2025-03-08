import Link from "next/link";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Calendar, User, Tag, ArrowRight, Users, Building, Globe, TrendingUp } from "lucide-react";

// Research articles
const articles = [
  {
    id: 1,
    title: "Herbert Marcuse: The Father of Cultural Marxism",
    excerpt: "An analysis of Herbert Marcuse's influence on Cultural Marxism and how his ideas transformed Marxism from economic theory to cultural revolution.",
    author: "Dr. James Wilson",
    date: "May 15, 2023",
    category: "Cultural Marxism",
    tags: ["Frankfurt School", "Critical Theory", "Repressive Tolerance"],
    readTime: "10 min read",
    href: "/research/herbert-marcuse"
  },
  {
    id: 2,
    title: "The World Economic Forum's Great Reset Initiative",
    excerpt: "A critical examination of the WEF's Great Reset initiative and its implications for national sovereignty and individual freedoms.",
    author: "Dr. Sarah Johnson",
    date: "April 22, 2023",
    category: "WEF Analysis",
    tags: ["Great Reset", "Stakeholder Capitalism", "Global Governance"],
    readTime: "12 min read",
    href: "#"
  },
  {
    id: 3,
    title: "ESG Mandates: Impact on Market Freedom",
    excerpt: "This paper analyzes how Environmental, Social, and Governance (ESG) mandates affect market dynamics and corporate decision-making.",
    author: "Dr. Emily Rodriguez",
    date: "March 10, 2023",
    category: "Economic Impact",
    tags: ["ESG", "Corporate Governance", "Market Distortion"],
    readTime: "9 min read",
    href: "#"
  },
  {
    id: 4,
    title: "The Long March Through the Institutions",
    excerpt: "A historical analysis of how neo-Marxist ideas infiltrated and transformed Western educational, media, and cultural institutions.",
    author: "Alex Thompson",
    date: "February 5, 2023",
    category: "Institutional Analysis",
    tags: ["Education", "Media", "Cultural Institutions"],
    readTime: "15 min read",
    href: "#"
  },
  {
    id: 5,
    title: "Identity Politics vs. Class Struggle",
    excerpt: "An examination of how traditional Marxist class struggle was replaced by identity-based politics in modern leftist movements.",
    author: "Dr. Michael Chen",
    date: "January 18, 2023",
    category: "Cultural Marxism",
    tags: ["Identity Politics", "Class Struggle", "Neo-Marxism"],
    readTime: "11 min read",
    href: "#"
  },
  {
    id: 6,
    title: "Public-Private Partnerships in Global Governance",
    excerpt: "Analysis of how public-private partnerships are reshaping global governance structures and challenging democratic accountability.",
    author: "Sophia Martinez",
    date: "December 30, 2022",
    category: "WEF Analysis",
    tags: ["Global Governance", "Public-Private", "Democracy"],
    readTime: "13 min read",
    href: "#"
  }
];

// Categories
const categories = [
  { name: "Cultural Marxism", count: 14 },
  { name: "WEF Analysis", count: 12 },
  { name: "Institutional Analysis", count: 9 },
  { name: "Economic Impact", count: 11 },
  { name: "Global Governance", count: 8 },
  { name: "Critical Theory", count: 7 },
  { name: "Stakeholder Capitalism", count: 6 },
];

export default function Research() {
  return (
    <div className="container py-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Research & Insights</h1>
          
          <p className="text-xl text-muted-foreground">
            Explore our critical analysis of Cultural Marxism and the World Economic Forum, examining their intellectual origins, influence, and real-world consequences.
          </p>
        </div>
        
        <div className="bg-highlight text-white px-6 py-8 rounded-lg mb-10">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-2">Featured Analysis</h2>
              <h3 className="text-xl font-semibold mb-3">Herbert Marcuse: The Father of Cultural Marxism</h3>
              <p className="opacity-90 mb-4">
                Discover how Herbert Marcuse's ideas transformed Marxism from economic theory to cultural revolution, laying the foundation for modern identity politics and institutional transformation.
              </p>
              <Link href="/research/herbert-marcuse">
                <Button className="bg-white text-highlight hover:bg-gray-100">
                  Read Analysis
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/20 p-4 rounded-lg">
                  <BookOpen className="h-10 w-10" />
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <Users className="h-10 w-10" />
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <Building className="h-10 w-10" />
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <Globe className="h-10 w-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="articles" className="w-full mb-10">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
            <TabsTrigger value="whitepapers">Whitepapers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="articles" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {articles.map((article) => (
                <Card key={article.id} className="flex flex-col h-full border-t-4 border-t-highlight">
                  <CardHeader>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {article.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{article.title}</CardTitle>
                    <CardDescription className="text-sm">
                      <span className="flex items-center">
                        <Tag className="h-4 w-4 mr-1" />
                        {article.category}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p>{article.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {article.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-highlight/10 text-highlight"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                    <Link href={article.href}>
                      <Button variant="ghost" size="sm" className="gap-1 hover:text-highlight">
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="case-studies" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Case Studies</CardTitle>
                <CardDescription>
                  Real-world examples of Cultural Marxism and WEF influence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our case studies section is currently being updated with new content. 
                  Please check back soon for detailed case studies examining the real-world 
                  impact of Cultural Marxism and WEF policies on various institutions and societies.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="hover:text-highlight hover:border-highlight">Subscribe for Updates</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="whitepapers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Whitepapers</CardTitle>
                <CardDescription>
                  In-depth research papers on Cultural Marxism and the WEF
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our whitepapers section is currently being updated with new content. 
                  Please check back soon for comprehensive research papers on various 
                  aspects of Cultural Marxism, the WEF, and their impact on society.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="hover:text-highlight hover:border-highlight">Subscribe for Updates</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Featured Research</CardTitle>
                <CardDescription>
                  Our most impactful research on Cultural Marxism and the WEF
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h3 className="text-lg font-medium">The Frankfurt School and Western Institutions</h3>
                    <p className="text-muted-foreground mt-2">
                      This comprehensive study explores how the Frankfurt School's critical theory 
                      has influenced Western educational institutions, media, and cultural organizations.
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm text-muted-foreground">Published: April 2023</span>
                      <Button variant="link" size="sm" className="gap-1 hover:text-highlight">
                        Read Full Study
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border-b pb-4">
                    <h3 className="text-lg font-medium">Stakeholder Capitalism: A Critical Analysis</h3>
                    <p className="text-muted-foreground mt-2">
                      An examination of the WEF's stakeholder capitalism model and its 
                      implications for market freedom, corporate governance, and economic outcomes.
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm text-muted-foreground">Published: March 2023</span>
                      <Button variant="link" size="sm" className="gap-1 hover:text-highlight">
                        Read Full Study
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium">The Great Reset and National Sovereignty</h3>
                    <p className="text-muted-foreground mt-2">
                      This research explores how the WEF's Great Reset initiative impacts 
                      national sovereignty, democratic processes, and individual freedoms.
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm text-muted-foreground">Published: February 2023</span>
                      <Button variant="link" size="sm" className="gap-1 hover:text-highlight">
                        Read Full Study
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
                <CardDescription>
                  Browse research by category
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <Link href="#" className="hover:text-highlight">
                        {category.name}
                      </Link>
                      <span className="text-sm text-muted-foreground">
                        ({category.count})
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full hover:text-highlight hover:border-highlight">View All Categories</Button>
              </CardFooter>
            </Card>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Subscribe</CardTitle>
                <CardDescription>
                  Get the latest research delivered to your inbox
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid w-full items-center gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-highlight hover:bg-amber-600 text-white">Subscribe</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 