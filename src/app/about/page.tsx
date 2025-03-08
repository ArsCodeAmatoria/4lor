import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  BarChart3, 
  LineChart, 
  PieChart, 
  AreaChart, 
  Database, 
  Layers, 
  Zap,
  Code,
  Users,
  BookOpen,
  Globe,
  Building,
  Scale,
  FileText
} from "lucide-react";

export default function About() {
  return (
    <div className="flex justify-center bg-background">
      <div className="w-full max-w-4xl">
        <section className="w-full py-10">
          <div className="container px-4 md:px-6 mx-auto">
            <h1 className="text-4xl font-bold mb-6">About 4lor</h1>
            
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-xl text-muted-foreground mb-8">
                4lor is a data-driven analysis platform focused on providing critical insights into Cultural Marxism and the World Economic Forum (WEF). We examine the intellectual origins, influence, and real-world consequences of these ideologies and organizations.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
              <p>
                Our mission is to provide well-researched, data-driven analysis of Cultural Marxism and the World Economic Forum, examining their intellectual origins, influence on institutions, and real-world consequences. We aim to offer a critical perspective that helps people understand the connections between ideology and socio-economic outcomes.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Research Focus</h2>
              
              <div className="grid gap-6 md:grid-cols-2 mt-6 mb-8">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <BookOpen className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle>Cultural Marxism</CardTitle>
                      <CardDescription>
                        Intellectual origins and institutional influence
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>We analyze the development of Cultural Marxism from the Frankfurt School to its expansion through postmodernist ideology, critical theory, and its influence on modern institutions, media, and policy-making.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Globe className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle>World Economic Forum</CardTitle>
                      <CardDescription>
                        Goals, influence, and socio-economic outcomes
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>We examine the WEF's stated goals versus their actual socio-economic outcomes, focusing on the centralization of power, ESG mandates, stakeholder capitalism, and global governance.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Building className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle>Institutional Analysis</CardTitle>
                      <CardDescription>
                        Impact on key social institutions
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>We analyze how these ideologies have shaped political discourse, education systems, corporate governance, media narratives, and public policy, with documented real-world consequences.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Scale className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle>Sovereignty & Freedom</CardTitle>
                      <CardDescription>
                        Impact on nations and individuals
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>We assess the impact on national sovereignty, economic structures, and individual freedoms through data-driven insights and comprehensive analysis.</p>
                  </CardContent>
                </Card>
              </div>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Our Methodology</h2>
              <p>
                Our analysis is based on rigorous research, primary sources, and data-driven insights. We examine:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Primary Sources:</strong> Original texts, speeches, and policy documents from key figures and organizations</li>
                <li><strong>Historical Context:</strong> Tracing the development of ideas and their implementation over time</li>
                <li><strong>Institutional Impact:</strong> Analyzing changes in education, media, corporate governance, and policy</li>
                <li><strong>Economic Data:</strong> Examining economic outcomes, market distortions, and financial trends</li>
                <li><strong>Policy Analysis:</strong> Evaluating the implementation and consequences of specific policies</li>
                <li><strong>Comparative Studies:</strong> Contrasting stated goals with actual outcomes across different regions</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Technology Stack</h2>
              <p>
                4lor is built with modern web technologies to provide an engaging and informative experience:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Next.js & React:</strong> For a responsive, interactive user interface</li>
                <li><strong>Chart.js & Nivo:</strong> For data visualization and interactive analytics</li>
                <li><strong>WebDataRocks:</strong> For pivot tables and deep-dive data analysis</li>
                <li><strong>Tailwind CSS & shadcn/ui:</strong> For a clean, modern design</li>
                <li><strong>Framer Motion:</strong> For smooth animations that enhance storytelling</li>
                <li><strong>Sanity:</strong> For structured content management of research articles</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Our Commitment</h2>
              <p>
                We are committed to providing factual, well-researched analysis that helps people understand the complex interplay between ideology, institutions, and socio-economic outcomes. Our goal is to foster informed discussion and critical thinking about important issues that affect our society.
              </p>
              
              <div className="flex items-center justify-center mt-12 mb-8">
                <div className="flex flex-col items-center">
                  <div className="flex space-x-4">
                    <FileText className="h-12 w-12 text-primary" />
                    <Globe className="h-12 w-12 text-primary" />
                    <Building className="h-12 w-12 text-primary" />
                    <Scale className="h-12 w-12 text-primary" />
                  </div>
                  <p className="text-center text-muted-foreground mt-4">
                    Analyzing ideology and impact through data
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 