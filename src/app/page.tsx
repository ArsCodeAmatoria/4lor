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
  TrendingUp,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { CorrelationHeatmap } from "@/components/CorrelationHeatmap";
import { CorrelationAnalysis } from "@/components/CorrelationAnalysis"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="flex justify-center bg-background">
        <div className="w-full max-w-7xl">
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block bg-highlight px-3 py-1 rounded-md text-white text-sm font-medium mb-2">
                      Data-Driven Analysis
                    </div>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Critical Analysis of <span className="text-highlight">Cultural Marxism</span> & <span className="text-highlight">WEF</span>
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Data-driven insights into the intellectual origins, influence, and real-world consequences of Cultural Marxism and the World Economic Forum.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
                    <Link href="/dashboard">
                      <Button size="lg" className="gap-1.5 bg-highlight hover:bg-amber-600 text-white">
                        Explore Data
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/about">
                      <Button size="lg" variant="outline" className="hover:text-highlight hover:border-highlight">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 md:gap-8">
                    <div className="flex flex-col gap-4">
                      <div className="rounded-lg bg-highlight/10 p-8 border border-highlight/20 hover:bg-highlight/20 transition-colors">
                        <BookOpen className="h-12 w-12 text-highlight" />
                      </div>
                      <div className="rounded-lg bg-highlight/10 p-8 border border-highlight/20 hover:bg-highlight/20 transition-colors">
                        <Building className="h-12 w-12 text-highlight" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 pt-4">
                      <div className="rounded-lg bg-highlight/10 p-8 border border-highlight/20 hover:bg-highlight/20 transition-colors">
                        <Globe className="h-12 w-12 text-highlight" />
                      </div>
                      <div className="rounded-lg bg-highlight/10 p-8 border border-highlight/20 hover:bg-highlight/20 transition-colors">
                        <TrendingUp className="h-12 w-12 text-highlight" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-highlight">
        <div className="flex justify-center">
          <div className="w-full max-w-7xl">
            <section className="w-full py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2 text-white">
                    <div className="inline-block bg-white/10 px-3 py-1 rounded-md text-white text-sm font-medium mb-2">
                      In-Depth Research
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                      Comprehensive Analysis
                    </h2>
                    <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed opacity-90">
                      Rigorous investigation into the intellectual foundations, institutional influence, and societal impact of Cultural Marxism and the World Economic Forum's agenda.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
                  <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all">
                    <CardHeader>
                      <BookOpen className="h-10 w-10 text-highlight mb-2" />
                      <CardTitle className="text-gray-900">Critical Theory Analysis</CardTitle>
                      <CardDescription className="text-gray-600">
                        From Frankfurt School to Modern Academia
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                        <li>Origins in Frankfurt School</li>
                        <li>Evolution through postmodernism</li>
                        <li>Contemporary applications</li>
                        <li>Academic infiltration patterns</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/research/herbert-marcuse" className="w-full">
                        <Button variant="outline" size="sm" className="w-full hover:text-highlight hover:border-highlight">
                          Explore Research
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all">
                    <CardHeader>
                      <Globe className="h-10 w-10 text-highlight mb-2" />
                      <CardTitle className="text-gray-900">WEF Agenda Analysis</CardTitle>
                      <CardDescription className="text-gray-600">
                        Great Reset & Global Governance
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                        <li>Stakeholder capitalism</li>
                        <li>Digital identity systems</li>
                        <li>ESG framework impact</li>
                        <li>Centralization patterns</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/research/harari-wef-great-reset" className="w-full">
                        <Button variant="outline" size="sm" className="w-full hover:text-highlight hover:border-highlight">
                          View Analysis
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all">
                    <CardHeader>
                      <Building className="h-10 w-10 text-highlight mb-2" />
                      <CardTitle className="text-gray-900">Institutional Impact</CardTitle>
                      <CardDescription className="text-gray-600">
                        Tracking Influence & Control
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                        <li>Education system changes</li>
                        <li>Corporate policy shifts</li>
                        <li>Media narrative control</li>
                        <li>Government integration</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/analysis" className="w-full">
                        <Button variant="outline" size="sm" className="w-full hover:text-highlight hover:border-highlight">
                          View Data
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all">
                    <CardHeader>
                      <TrendingUp className="h-10 w-10 text-highlight mb-2" />
                      <CardTitle className="text-gray-900">Resistance Strategies</CardTitle>
                      <CardDescription className="text-gray-600">
                        Practical Counter-Measures
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                        <li>Educational alternatives</li>
                        <li>Cultural preservation</li>
                        <li>Economic independence</li>
                        <li>Local governance</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/research/fighting-cultural-marxism-bc" className="w-full">
                        <Button variant="outline" size="sm" className="w-full hover:text-highlight hover:border-highlight">
                          Learn More
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>

                <div className="flex justify-center mt-8">
                  <Link href="/dashboard">
                    <Button size="lg" className="bg-white text-highlight hover:bg-white/90">
                      Explore Full Dashboard
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Key Topics Section */}
      <div className="bg-zinc-100">
        <div className="flex justify-center">
          <div className="w-full max-w-7xl">
            <section className="w-full py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
                  <div className="space-y-2">
                    <div className="inline-block bg-highlight px-3 py-1 rounded-md text-white text-sm font-medium mb-2">
                      Research Focus
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                      Key Areas of Research
                    </h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Our analysis covers several critical dimensions of influence and impact
                    </p>
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-l-4 border-l-highlight">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Building className="h-5 w-5 mr-2 text-highlight" />
                        Institutional Influence
                      </CardTitle>
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
                  
                  <Card className="border-l-4 border-l-highlight">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <TrendingUp className="h-5 w-5 mr-2 text-highlight" />
                        Economic Impact
                      </CardTitle>
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
                  
                  <Card className="border-l-4 border-l-highlight">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BookOpen className="h-5 w-5 mr-2 text-highlight" />
                        Cultural Transformation
                      </CardTitle>
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
                  
                  <Card className="border-l-4 border-l-highlight">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Globe className="h-5 w-5 mr-2 text-highlight" />
                        Governance & Sovereignty
                      </CardTitle>
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
          </div>
        </div>
      </div>

      {/* Correlation Analysis Section */}
      <div className="flex justify-center bg-background">
        <div className="w-full max-w-7xl">
          <section className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <div className="inline-block bg-highlight px-3 py-1 rounded-md text-white text-sm font-medium mb-2">
                    Data Analysis
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Correlation Analysis
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Exploring the relationships between WEF initiatives and Cultural Marxist concepts through data-driven analysis
                  </p>
                </div>
              </div>
              
              <CorrelationAnalysis />
            </div>
          </section>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex justify-center bg-background">
        <div className="w-full max-w-7xl">
          <section className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block bg-highlight px-3 py-1 rounded-md text-white text-sm font-medium mb-2">
                    Get Started
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Explore Our Research
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Dive into our data-driven analysis and discover the connections between ideology and real-world outcomes.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
                  <Link href="/dashboard">
                    <Button size="lg" className="gap-1.5 bg-highlight hover:bg-amber-600 text-white">
                      View Dashboard
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/research">
                    <Button size="lg" variant="outline" className="gap-1.5 hover:text-highlight hover:border-highlight">
                      Read Research
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
