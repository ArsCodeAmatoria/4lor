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
  BookOpen
} from "lucide-react";

export default function About() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About DataViz</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            DataViz is a modern data visualization and analysis platform designed to help users transform complex data into actionable insights through interactive visualizations and comprehensive analytics.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
          <p>
            Our mission is to democratize data analysis by providing powerful yet intuitive tools that enable users of all skill levels to explore, analyze, and visualize their data effectively. We believe that data-driven decision making should be accessible to everyone, not just data scientists and analysts.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Key Features</h2>
          
          <div className="grid gap-6 md:grid-cols-2 mt-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Database className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Data Analysis</CardTitle>
                  <CardDescription>
                    Powerful tools for analyzing complex datasets
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>Transform raw data into actionable insights with our advanced analysis tools. Filter, sort, and manipulate your data with ease.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Layers className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Interactive Visualizations</CardTitle>
                  <CardDescription>
                    Create stunning visualizations with ease
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>Build interactive charts, graphs, and maps to communicate your data effectively. Customize every aspect of your visualizations.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Zap className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Real-time Dashboards</CardTitle>
                  <CardDescription>
                    Monitor key metrics in real-time
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>Create customizable dashboards to track and visualize your most important data. Set up alerts and notifications for critical changes.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Code className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Developer-Friendly</CardTitle>
                  <CardDescription>
                    Built with modern web technologies
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>DataViz is built with Next.js, React, TypeScript, and Tailwind CSS, making it fast, responsive, and easy to extend.</p>
              </CardContent>
            </Card>
          </div>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Technology Stack</h2>
          <p>
            DataViz is built with the following technologies:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li><strong>Next.js:</strong> A React framework for building server-rendered applications</li>
            <li><strong>React:</strong> A JavaScript library for building user interfaces</li>
            <li><strong>TypeScript:</strong> A typed superset of JavaScript that compiles to plain JavaScript</li>
            <li><strong>Tailwind CSS:</strong> A utility-first CSS framework for rapidly building custom designs</li>
            <li><strong>shadcn/ui:</strong> A collection of reusable UI components built with Radix UI and Tailwind CSS</li>
            <li><strong>Chart.js:</strong> Simple yet flexible JavaScript charting library</li>
            <li><strong>Nivo:</strong> A rich set of dataviz components, built on top of D3 and React</li>
            <li><strong>Framer Motion:</strong> A production-ready motion library for React</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Team</h2>
          <p>
            DataViz is developed by a team of passionate developers, designers, and data scientists who are committed to creating the best data visualization platform possible.
          </p>
          
          <div className="flex items-center justify-center mt-12 mb-8">
            <div className="flex flex-col items-center">
              <div className="flex space-x-4">
                <BarChart3 className="h-12 w-12 text-primary" />
                <LineChart className="h-12 w-12 text-primary" />
                <PieChart className="h-12 w-12 text-primary" />
                <AreaChart className="h-12 w-12 text-primary" />
              </div>
              <p className="text-center text-muted-foreground mt-4">
                Transforming data into insights
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 