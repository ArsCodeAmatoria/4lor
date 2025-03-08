"use client";

import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar, Pie, Radar } from 'react-chartjs-2';
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, Brain, Globe, AlertTriangle, School, Radio, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// Data for Cultural Marxism Influence Timeline
const timelineData = {
  labels: ['1930s', '1940s', '1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'],
  datasets: [
    {
      label: 'Frankfurt School Influence',
      data: [20, 35, 45, 75, 65, 60, 70, 80, 90, 95],
      borderColor: 'rgb(255, 193, 7)',
      backgroundColor: 'rgba(255, 193, 7, 0.5)',
      tension: 0.3,
    },
    {
      label: 'Traditional Marxism',
      data: [80, 75, 65, 60, 50, 40, 30, 25, 20, 15],
      borderColor: 'rgb(220, 53, 69)',
      backgroundColor: 'rgba(220, 53, 69, 0.5)',
      tension: 0.3,
    },
  ],
};

// Data for Institutional Control
const institutionalControlData = {
  labels: ['Academia', 'Media', 'Entertainment', 'Big Tech', 'Government', 'Corporate'],
  datasets: [
    {
      label: 'Critical Theory Influence',
      data: [90, 85, 80, 75, 65, 70],
      backgroundColor: 'rgba(255, 193, 7, 0.7)',
    },
    {
      label: 'Traditional Values Representation',
      data: [10, 15, 20, 25, 35, 30],
      backgroundColor: 'rgba(13, 110, 253, 0.7)',
    },
  ],
};

// Data for Critical Race Theory Components
const crtComponentsData = {
  labels: [
    'Systemic Racism', 
    'White Privilege', 
    'Intersectionality', 
    'Equity over Equality', 
    'Anti-Meritocracy',
    'Identity Politics'
  ],
  datasets: [
    {
      label: 'Prevalence in Institutions',
      data: [85, 80, 75, 90, 70, 85],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(255, 159, 64, 0.7)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

// Data for WEF Great Reset Components
const wefComponentsData = {
  labels: [
    'Stakeholder Capitalism', 
    'Climate Change Agenda', 
    'Digital Identity', 
    'Global Governance', 
    'AI Regulation',
    'Wealth Redistribution'
  ],
  datasets: [
    {
      label: 'Implementation Progress',
      data: [75, 80, 65, 70, 85, 60],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(255, 159, 64, 0.7)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

// Data for Media Censorship Trends
const censorshipTrendsData = {
  labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
  datasets: [
    {
      label: 'Conservative Content Restricted',
      data: [30, 45, 60, 75, 90, 95, 90, 85],
      borderColor: 'rgb(220, 53, 69)',
      backgroundColor: 'rgba(220, 53, 69, 0.5)',
      tension: 0.3,
    },
    {
      label: 'Progressive Content Restricted',
      data: [25, 20, 15, 10, 5, 10, 15, 20],
      borderColor: 'rgb(13, 110, 253)',
      backgroundColor: 'rgba(13, 110, 253, 0.5)',
      tension: 0.3,
    },
  ],
};

// Chart options
const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Historical Trends',
    },
  },
};

const barChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Institutional Analysis',
    },
  },
};

const pieChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    title: {
      display: true,
      text: 'Component Analysis',
    },
  },
};

// Key metrics data
const keyMetrics = [
  {
    title: "Universities with CRT",
    value: "87%",
    change: "+12%",
    trend: "up",
    description: "Top 100 universities with CRT programs"
  },
  {
    title: "Media Bias Index",
    value: "78/100",
    change: "+8%",
    trend: "up",
    description: "Measured ideological bias in mainstream media"
  },
  {
    title: "Free Speech Index",
    value: "42/100",
    change: "-15%",
    trend: "down",
    description: "Academic freedom and open discourse metrics"
  }
];

// Recent research data
const recentResearch = [
  {
    title: "Herbert Marcuse's Influence on Critical Race Theory",
    excerpt: "How Marcuse's ideas shaped modern academia, media censorship, and identity politics.",
    date: "May 15, 2023",
    url: "/research/herbert-marcuse"
  },
  {
    title: "Yuval Noah Harari, the WEF, and the Great Reset",
    excerpt: "How Harari's vision aligns with Klaus Schwab's Great Reset agenda for AI governance.",
    date: "May 18, 2023",
    url: "/research/harari-wef-great-reset"
  },
  {
    title: "The Frankfurt School and Western Institutions",
    excerpt: "Tracing the influence of Critical Theory on educational and cultural institutions.",
    date: "April 10, 2023",
    url: "#"
  }
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="container py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">Research Dashboard</h1>
        <p className="text-muted-foreground mb-6">
          Tracking the influence of Cultural Marxism, Critical Theory, and the World Economic Forum
        </p>
        
        <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="cultural-marxism">Cultural Marxism</TabsTrigger>
            <TabsTrigger value="crt">Critical Race Theory</TabsTrigger>
            <TabsTrigger value="wef">WEF & Great Reset</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              {keyMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Card className={metric.trend === "down" ? "border-t-4 border-t-red-500" : "border-t-4 border-t-highlight"}>
                    <CardHeader className="pb-2">
                      <CardTitle>{metric.title}</CardTitle>
                      <CardDescription>{metric.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">{metric.value}</div>
                      <p className="text-sm text-muted-foreground mt-2">
                        <span className={metric.trend === "up" ? "text-green-500" : "text-red-500"}>
                          {metric.change}
                        </span> from last year
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Cultural Marxism Influence Timeline</CardTitle>
                    <CardDescription>Tracking the rise of Cultural Marxism vs. Traditional Marxism</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <Line options={lineChartOptions} data={timelineData} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Institutional Control Analysis</CardTitle>
                    <CardDescription>Critical Theory influence across major institutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <Bar options={barChartOptions} data={institutionalControlData} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Recent Research</CardTitle>
                  <CardDescription>Latest analysis on Cultural Marxism and the WEF</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentResearch.map((item, index) => (
                      <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                        <h3 className="text-lg font-medium hover:text-highlight">
                          <Link href={item.url}>{item.title}</Link>
                        </h3>
                        <p className="text-muted-foreground mt-1">{item.excerpt}</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-sm text-muted-foreground">{item.date}</span>
                          <Link href={item.url}>
                            <Button variant="link" size="sm" className="gap-1 hover:text-highlight">
                              Read Analysis
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="cultural-marxism" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Herbert Marcuse & Cultural Marxism</CardTitle>
                <CardDescription>Analysis of Marcuse's influence on modern institutions and ideology</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Marcuse's Key Contributions</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                        <div className="bg-highlight/20 p-2 rounded-full">
                          <BookOpen className="h-5 w-5 text-highlight" />
                        </div>
                        <div>
                          <h4 className="font-medium">Repressive Tolerance</h4>
                          <p className="text-sm text-muted-foreground">Theory justifying censorship of right-wing views while promoting leftist narratives</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                        <div className="bg-highlight/20 p-2 rounded-full">
                          <BookOpen className="h-5 w-5 text-highlight" />
                        </div>
                        <div>
                          <h4 className="font-medium">Identity-Based Marxism</h4>
                          <p className="text-sm text-muted-foreground">Transformed class struggle into racial, gender, and cultural conflict</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                        <div className="bg-highlight/20 p-2 rounded-full">
                          <BookOpen className="h-5 w-5 text-highlight" />
                        </div>
                        <div>
                          <h4 className="font-medium">Long March Strategy</h4>
                          <p className="text-sm text-muted-foreground">Blueprint for infiltrating and transforming Western institutions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-80">
                    <Line options={{
                      responsive: true,
                      plugins: {
                        legend: {
                          position: 'top' as const,
                        },
                        title: {
                          display: true,
                          text: 'Media Censorship Trends (2016-2023)',
                        },
                      },
                    }} data={censorshipTrendsData} />
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Institutional Control Mechanisms</h3>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-medium flex items-center gap-2">
                        <School className="h-5 w-5 text-highlight" />
                        Academia
                      </h4>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>• Radical professors in humanities</li>
                        <li>• Speech codes & safe spaces</li>
                        <li>• DEI mandates</li>
                        <li>• Conservative purges</li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-medium flex items-center gap-2">
                        <Radio className="h-5 w-5 text-highlight" />
                        Media & Tech
                      </h4>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>• Narrative control</li>
                        <li>• Deplatforming</li>
                        <li>• "Fact-checking" censorship</li>
                        <li>• Algorithm manipulation</li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-medium flex items-center gap-2">
                        <Globe className="h-5 w-5 text-highlight" />
                        Corporate
                      </h4>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>• Mandatory DEI training</li>
                        <li>• ESG policies</li>
                        <li>• Political activism</li>
                        <li>• Identity-based hiring</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Current Implementation</h3>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="font-medium mb-2">Tech Enforcement</h4>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          <li>Social media censorship</li>
                          <li>Search result manipulation</li>
                          <li>Payment processor bans</li>
                          <li>Platform-wide speech control</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Institutional Control</h4>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          <li>Academic indoctrination</li>
                          <li>Media narrative control</li>
                          <li>Corporate DEI mandates</li>
                          <li>Government policy shifts</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="crt" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Marcuse's Influence on Critical Race Theory</CardTitle>
                <CardDescription>How Cultural Marxism evolved into modern CRT</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Evolution of Theory</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                        <div className="bg-highlight/20 p-2 rounded-full">
                          <Shield className="h-5 w-5 text-highlight" />
                        </div>
                        <div>
                          <h4 className="font-medium">From Class to Race</h4>
                          <p className="text-sm text-muted-foreground">Transformed economic class struggle into racial conflict</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                        <div className="bg-highlight/20 p-2 rounded-full">
                          <Shield className="h-5 w-5 text-highlight" />
                        </div>
                        <div>
                          <h4 className="font-medium">Systemic Oppression</h4>
                          <p className="text-sm text-muted-foreground">Claims Western civilization itself is inherently oppressive</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                        <div className="bg-highlight/20 p-2 rounded-full">
                          <Shield className="h-5 w-5 text-highlight" />
                        </div>
                        <div>
                          <h4 className="font-medium">Forced Equity</h4>
                          <p className="text-sm text-muted-foreground">Demands equal outcomes through social engineering</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-80">
                    <Pie options={pieChartOptions} data={crtComponentsData} />
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Marcuse to CRT Pipeline</h3>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="font-medium mb-2">Traditional Marxism</h4>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          <li>Class-based conflict</li>
                          <li>Economic determinism</li>
                          <li>Workers as revolutionaries</li>
                          <li>Material conditions focus</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Critical Race Theory</h4>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          <li>Race-based conflict</li>
                          <li>Cultural determinism</li>
                          <li>Minorities as revolutionaries</li>
                          <li>Identity politics focus</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Current Implementation</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Mandatory DEI training in corporations</li>
                        <li>Removal of merit-based systems</li>
                        <li>Identity-based hiring quotas</li>
                        <li>Educational curriculum changes</li>
                        <li>Government equity initiatives</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="wef" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>World Economic Forum & The Great Reset</CardTitle>
                <CardDescription>Analysis of WEF's agenda and global influence</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Great Reset Components</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                        <div className="bg-highlight/20 p-2 rounded-full">
                          <Globe className="h-5 w-5 text-highlight" />
                        </div>
                        <div>
                          <h4 className="font-medium">Stakeholder Capitalism</h4>
                          <p className="text-sm text-muted-foreground">Replacing shareholder model with ESG-driven corporate governance</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                        <div className="bg-highlight/20 p-2 rounded-full">
                          <Globe className="h-5 w-5 text-highlight" />
                        </div>
                        <div>
                          <h4 className="font-medium">Digital Identity</h4>
                          <p className="text-sm text-muted-foreground">Implementation of digital IDs and CBDCs for tracking and control</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                        <div className="bg-highlight/20 p-2 rounded-full">
                          <Globe className="h-5 w-5 text-highlight" />
                        </div>
                        <div>
                          <h4 className="font-medium">Global Governance</h4>
                          <p className="text-sm text-muted-foreground">Shifting power from nation-states to international organizations</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                        <div className="bg-highlight/20 p-2 rounded-full">
                          <Brain className="h-5 w-5 text-highlight" />
                        </div>
                        <div>
                          <h4 className="font-medium">AI Governance</h4>
                          <p className="text-sm text-muted-foreground">Centralized control of AI development and deployment</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-80">
                    <Pie options={pieChartOptions} data={wefComponentsData} />
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Yuval Noah Harari's Vision</h3>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="bg-highlight/20 p-2 rounded-full">
                        <AlertTriangle className="h-5 w-5 text-highlight" />
                      </div>
                      <div>
                        <h4 className="font-medium">Key Beliefs</h4>
                        <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                          <li>Humans are "hackable animals" without free will</li>
                          <li>AI will make most humans "useless" economically</li>
                          <li>Global elites should manage the "useless class"</li>
                          <li>Traditional religions and nation-states are obsolete</li>
                          <li>Digital surveillance is necessary for global governance</li>
                        </ul>
                        <p className="text-sm mt-3">
                          <span className="font-medium text-highlight">Connection to WEF:</span> As Klaus Schwab's top advisor, Harari's philosophy shapes the WEF's vision for humanity's future under AI governance and surveillance capitalism.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
} 