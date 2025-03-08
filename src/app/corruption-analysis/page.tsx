"use client";

import Link from "next/link";
import { ArrowLeft, TrendingUp, Users, Building, Globe, AlertTriangle, Scale, Landmark, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line } from "react-chartjs-2";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Sample data for charts
const yearlyCorruptionData = {
  labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
  datasets: [
    {
      label: 'Corruption Score',
      data: [45, 52, 58, 65, 72, 78],
      borderColor: '#FF8042',
      backgroundColor: '#FF8042',
      tension: 0.4,
    },
    {
      label: 'Reported Incidents',
      data: [120, 145, 180, 210, 250, 285],
      borderColor: '#0088FE',
      backgroundColor: '#0088FE',
      tension: 0.4,
    },
  ],
};

const lineChartOptions = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  scales: {
    y: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
      ticks: {
        color: '#888888',
      }
    },
    x: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
      ticks: {
        color: '#888888',
      }
    }
  },
  plugins: {
    legend: {
      labels: {
        color: '#888888',
      }
    }
  }
};

const institutionalBreakdown = [
  { id: "Education", label: "Education", value: 35, color: "#FF8042" },
  { id: "Media", label: "Media", value: 28, color: "#FFBB28" },
  { id: "Government", label: "Government", value: 22, color: "#00C49F" },
  { id: "Corporate", label: "Corporate", value: 15, color: "#0088FE" },
];

const impactMetrics = [
  { category: "Academic Freedom", value: 85 },
  { category: "Media Independence", value: 78 },
  { category: "Political Discourse", value: 72 },
  { category: "Corporate Policy", value: 68 },
  { category: "Public Education", value: 82 },
];

export default function CorruptionAnalysis() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="gap-1 pl-0 hover:text-highlight hover:bg-transparent">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        
        <div className="bg-zinc-800 text-white px-6 py-10 rounded-lg mb-10">
          <h1 className="text-4xl font-bold mb-4">Political Corruption Analysis</h1>
          <h2 className="text-2xl text-highlight mb-4">Institutional Capture & Ideological Subversion</h2>
          <p className="text-xl opacity-90">
            A data-driven analysis of how Cultural Marxism has corrupted Western institutions
          </p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
              <TrendingUp className="h-6 w-6 text-highlight" />
              1. Corruption Trend Analysis
            </h2>
            
            <div className="bg-highlight/10 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-highlight mb-4">
                <Scale className="h-5 w-5" />
                Historical Trends
              </h3>
              <div className="h-[300px] relative bg-zinc-900/50 p-4 rounded-lg">
                <Line options={lineChartOptions} data={yearlyCorruptionData} />
              </div>
            </div>

            <div className="bg-highlight/10 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-highlight mb-4">
                <AlertTriangle className="h-5 w-5" />
                Key Observations
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Corruption scores have increased by 73% since 2018</li>
                <li>Reported incidents of institutional subversion up 137%</li>
                <li>Acceleration in both metrics since 2020</li>
                <li>Projected to continue rising through 2024</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
              <Building className="h-6 w-6 text-highlight" />
              2. Institutional Impact Analysis
            </h2>
            
            <div className="bg-highlight/10 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-highlight mb-4">
                <Globe className="h-5 w-5" />
                Sector Distribution
              </h3>
              <div className="h-[300px] relative bg-zinc-900/50 p-4 rounded-lg">
                <ResponsivePie
                  data={institutionalBreakdown}
                  margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                  innerRadius={0.5}
                  padAngle={0.7}
                  cornerRadius={3}
                  activeOuterRadiusOffset={8}
                  colors={{ scheme: 'nivo' }}
                  borderWidth={1}
                  borderColor={{ theme: 'background' }}
                  arcLinkLabelsSkipAngle={10}
                  arcLinkLabelsTextColor="#888888"
                  arcLinkLabelsThickness={2}
                  arcLinkLabelsColor={{ from: 'color' }}
                  arcLabelsSkipAngle={10}
                  arcLabelsTextColor="#ffffff"
                  theme={{
                    labels: {
                      text: {
                        fontSize: 14,
                        fill: '#888888'
                      }
                    }
                  }}
                />
              </div>
            </div>

            <div className="bg-highlight/10 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-highlight mb-4">
                <AlertTriangle className="h-5 w-5" />
                Severity Assessment
              </h3>
              <div className="h-[300px] relative bg-zinc-900/50 p-4 rounded-lg">
                <ResponsiveBar
                  data={impactMetrics}
                  keys={['value']}
                  indexBy="category"
                  margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
                  padding={0.3}
                  valueScale={{ type: 'linear' }}
                  colors={{ scheme: 'nivo' }}
                  borderColor={{ theme: 'background' }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: -45,
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                  }}
                  labelSkipWidth={12}
                  labelSkipHeight={12}
                  labelTextColor="#ffffff"
                  theme={{
                    axis: {
                      ticks: {
                        text: {
                          fill: '#888888'
                        }
                      }
                    }
                  }}
                />
              </div>
            </div>
          </section>

          <section className="mb-12 bg-zinc-800 text-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-zinc-600 pb-2 text-highlight">
              <AlertTriangle className="h-6 w-6" />
              Conclusions & Recommendations
            </h2>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start">
                <span className="text-highlight font-bold mr-2 mt-1">✓</span>
                <div>
                  Education sector shows highest vulnerability to ideological capture (35%)
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-highlight font-bold mr-2 mt-1">✓</span>
                <div>
                  Media control mechanisms have strengthened significantly (28%)
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-highlight font-bold mr-2 mt-1">✓</span>
                <div>
                  Government institutions show increasing signs of subversion (22%)
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-highlight font-bold mr-2 mt-1">✓</span>
                <div>
                  Corporate sector adopting ideological mandates through ESG and DEI (15%)
                </div>
              </li>
            </ul>
          </section>

          <div className="border-t pt-6 mt-12">
            <h3 className="text-lg font-semibold mb-2">Related Research</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <Link href="/research/herbert-marcuse" className="block">
                <Card className="h-full hover:border-highlight transition-colors">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Users className="h-4 w-4 text-highlight" />
                      Herbert Marcuse's Influence
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      How Marcuse's ideas shaped institutional corruption through Critical Theory.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/research/kalergi-plan" className="block">
                <Card className="h-full hover:border-highlight transition-colors">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Globe className="h-4 w-4 text-highlight" />
                      The Kalergi Plan
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Global implementation of institutional subversion through mass migration and elite control.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 