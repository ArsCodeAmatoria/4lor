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
  Zap 
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
                  Interactive Data Visualization Platform
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Explore, analyze, and visualize complex data with our powerful and intuitive tools.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/dashboard">
                  <Button size="lg" className="gap-1.5">
                    Get Started
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
                    <BarChart3 className="h-12 w-12 text-primary" />
                  </div>
                  <div className="rounded-lg bg-primary/10 p-8">
                    <LineChart className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <div className="flex flex-col gap-4 pt-4">
                  <div className="rounded-lg bg-primary/10 p-8">
                    <PieChart className="h-12 w-12 text-primary" />
                  </div>
                  <div className="rounded-lg bg-primary/10 p-8">
                    <AreaChart className="h-12 w-12 text-primary" />
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
                Powerful Visualization Tools
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform offers a comprehensive suite of tools for data analysis and visualization.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Database className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Data Analysis</CardTitle>
                <CardDescription>
                  Powerful tools for analyzing complex datasets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Transform raw data into actionable insights with our advanced analysis tools.</p>
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
                <Layers className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Interactive Visualizations</CardTitle>
                <CardDescription>
                  Create stunning visualizations with ease
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Build interactive charts, graphs, and maps to communicate your data effectively.</p>
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
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Real-time Dashboards</CardTitle>
                <CardDescription>
                  Monitor key metrics in real-time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Create customizable dashboards to track and visualize your most important data.</p>
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

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Get Started?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of users who are already transforming their data into actionable insights.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/dashboard">
                <Button size="lg" className="gap-1.5">
                  Explore Dashboard
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
