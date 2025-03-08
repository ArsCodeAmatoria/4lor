import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  LineChart, 
  PieChart, 
  AreaChart, 
  ArrowRight, 
  Database, 
  Layers, 
  Zap,
  Globe,
  Building,
  BookOpen,
  TrendingUp
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Critical Analysis of Cultural Marxism & WEF
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Data-driven insights into the intellectual origins, influence, and real-world consequences of Cultural Marxism and the World Economic Forum.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/dashboard">
                  <Button size="lg" className="gap-1.5">
                    Explore Data
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                <div className="flex flex-col gap-4">
                  <div className="rounded-lg bg-primary/10 p-8">
                    <BookOpen className="h-12 w-12 text-primary" />
                  </div>
                  <div className="rounded-lg bg-primary/10 p-8">
                    <Building className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <div className="flex flex-col gap-4 pt-4">
                  <div className="rounded-lg bg-primary/10 p-8">
                    <Globe className="h-12 w-12 text-primary" />
                  </div>
                  <div className="rounded-lg bg-primary/10 p-8">
                    <TrendingUp className="h-12 w-12 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Comprehensive Analysis
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform offers a deep dive into the intellectual origins, influence, and consequences of Cultural Marxism and the WEF.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <BookOpen className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Cultural Marxism</CardTitle>
                <CardDescription>
                  From Frankfurt School to modern influence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Explore the intellectual origins of Cultural Marxism, from the Frankfurt School to its expansion through postmodernist ideology and critical theory.</p>
              </CardContent>
              <CardFooter>
                <Link href="/analysis">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Globe className="h-10 w-10 text-primary mb-2" />
                <CardTitle>World Economic Forum</CardTitle>
                <CardDescription>
                  Goals, influence, and socio-economic impact
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Analyze the WEF's stated goals versus actual outcomes, focusing on centralization of power, ESG mandates, and stakeholder capitalism.</p>
              </CardContent>
              <CardFooter>
                <Link href="/visualizations">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Impact Analysis</CardTitle>
                <CardDescription>
                  Real-world consequences and trends
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Examine the impact on national sovereignty, economic structures, and individual freedoms through data-driven insights and visualizations.</p>
              </CardContent>
              <CardFooter>
                <Link href="/dashboard">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Topics Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Key Areas of Research
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our analysis covers several critical dimensions of influence and impact
              </p>
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Institutional Influence</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Education systems and curriculum changes</li>
                  <li>Media narratives and representation</li>
                  <li>Corporate governance and ESG policies</li>
                  <li>Political discourse and policy-making</li>
                  <li>Legal frameworks and judicial activism</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Economic Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Stakeholder capitalism vs. shareholder value</li>
                  <li>ESG mandates and market distortions</li>
                  <li>Global governance and regulatory frameworks</li>
                  <li>Public-private partnerships and conflicts of interest</li>
                  <li>Central bank policies and financial sovereignty</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Cultural Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Traditional values and social cohesion</li>
                  <li>Identity politics and group categorization</li>
                  <li>Language policing and concept redefinition</li>
                  <li>Historical revisionism and cultural memory</li>
                  <li>Religious institutions and spiritual frameworks</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Governance & Sovereignty</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>National sovereignty vs. global governance</li>
                  <li>Democratic accountability and technocracy</li>
                  <li>Supranational organizations and policy alignment</li>
                  <li>Digital IDs and surveillance infrastructure</li>
                  <li>Crisis response and emergency powers</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Explore Our Research
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Dive into our data-driven analysis and discover the connections between ideology and real-world outcomes.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/dashboard">
                <Button size="lg" className="gap-1.5">
                  View Dashboard
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/research">
                <Button size="lg" variant="outline" className="gap-1.5">
                  Read Research
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
