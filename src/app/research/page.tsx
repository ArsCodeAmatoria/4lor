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
import { BookOpen, Calendar, User, Tag, ArrowRight } from "lucide-react";

// Sample research articles
const articles = [
  {
    id: 1,
    title: "The Impact of Data Visualization on Decision Making",
    excerpt: "This study examines how effective data visualization can significantly improve decision-making processes in organizations.",
    author: "Dr. Sarah Johnson",
    date: "March 15, 2023",
    category: "Data Science",
    tags: ["Visualization", "Decision Making", "Business Intelligence"],
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Trends in Interactive Data Visualization Techniques",
    excerpt: "An exploration of emerging trends in interactive data visualization and their applications in various industries.",
    author: "Michael Chen",
    date: "February 22, 2023",
    category: "Visualization",
    tags: ["Interactive", "Trends", "Technology"],
    readTime: "12 min read"
  },
  {
    id: 3,
    title: "Ethical Considerations in Data Visualization",
    excerpt: "This paper discusses the ethical implications of data visualization and how to present data in a responsible manner.",
    author: "Dr. Emily Rodriguez",
    date: "January 10, 2023",
    category: "Ethics",
    tags: ["Ethics", "Responsibility", "Best Practices"],
    readTime: "10 min read"
  },
  {
    id: 4,
    title: "Comparative Analysis of Data Visualization Libraries",
    excerpt: "A comprehensive comparison of popular data visualization libraries and frameworks for web applications.",
    author: "Alex Thompson",
    date: "December 5, 2022",
    category: "Development",
    tags: ["Libraries", "Frameworks", "Comparison"],
    readTime: "15 min read"
  },
  {
    id: 5,
    title: "The Psychology of Color in Data Visualization",
    excerpt: "An examination of how color choices in data visualization affect user perception and interpretation of data.",
    author: "Dr. James Wilson",
    date: "November 18, 2022",
    category: "Psychology",
    tags: ["Color Theory", "Perception", "User Experience"],
    readTime: "9 min read"
  },
  {
    id: 6,
    title: "Accessibility in Data Visualization",
    excerpt: "Best practices for creating accessible data visualizations that can be understood by users with various disabilities.",
    author: "Sophia Martinez",
    date: "October 30, 2022",
    category: "Accessibility",
    tags: ["Accessibility", "Inclusive Design", "Best Practices"],
    readTime: "11 min read"
  }
];

// Sample categories
const categories = [
  { name: "Data Science", count: 12 },
  { name: "Visualization", count: 18 },
  { name: "Ethics", count: 7 },
  { name: "Development", count: 15 },
  { name: "Psychology", count: 5 },
  { name: "Accessibility", count: 8 },
  { name: "Business Intelligence", count: 10 },
];

export default function Research() {
  return (
    <div className="container py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Research & Insights</h1>
        
        <p className="text-xl text-muted-foreground mb-8">
          Explore our latest research articles, case studies, and insights on data visualization and analysis.
        </p>
        
        <Tabs defaultValue="articles" className="w-full mb-10">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
            <TabsTrigger value="whitepapers">Whitepapers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="articles" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {articles.map((article) => (
                <Card key={article.id} className="flex flex-col h-full">
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
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                    <Button variant="ghost" size="sm" className="gap-1">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Button>
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
                  Real-world examples of how data visualization has transformed businesses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our case studies section is currently being updated with new content. 
                  Please check back soon for detailed case studies on how organizations 
                  have leveraged data visualization to drive business outcomes.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Subscribe for Updates</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="whitepapers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Whitepapers</CardTitle>
                <CardDescription>
                  In-depth research papers on data visualization and analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our whitepapers section is currently being updated with new content. 
                  Please check back soon for comprehensive research papers on various 
                  aspects of data visualization and analysis.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Subscribe for Updates</Button>
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
                  Our most impactful research on data visualization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h3 className="text-lg font-medium">The Future of Data Visualization</h3>
                    <p className="text-muted-foreground mt-2">
                      This comprehensive study explores emerging trends and technologies 
                      that will shape the future of data visualization over the next decade.
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm text-muted-foreground">Published: April 2023</span>
                      <Button variant="link" size="sm" className="gap-1">
                        Read Full Study
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border-b pb-4">
                    <h3 className="text-lg font-medium">Data Visualization in Healthcare</h3>
                    <p className="text-muted-foreground mt-2">
                      An examination of how data visualization is transforming healthcare 
                      delivery, patient outcomes, and medical research.
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm text-muted-foreground">Published: March 2023</span>
                      <Button variant="link" size="sm" className="gap-1">
                        Read Full Study
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium">AI-Powered Data Visualization</h3>
                    <p className="text-muted-foreground mt-2">
                      This research explores how artificial intelligence is enhancing 
                      data visualization capabilities and automating insights generation.
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm text-muted-foreground">Published: February 2023</span>
                      <Button variant="link" size="sm" className="gap-1">
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
                      <Link href="#" className="hover:underline">
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
                <Button variant="outline" className="w-full">View All Categories</Button>
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
                <Button className="w-full">Subscribe</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 