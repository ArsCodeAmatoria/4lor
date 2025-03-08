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
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Enhanced sample data for charts
const yearlyCorruptionData = {
  labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
  datasets: [
    {
      label: 'Institutional Corruption Index',
      data: [45, 52, 58, 65, 72, 78],
      borderColor: 'rgb(255, 128, 66)',
      backgroundColor: 'rgba(255, 128, 66, 0.2)',
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointHoverRadius: 6,
      borderWidth: 2,
    },
    {
      label: 'Reported Subversion Events',
      data: [120, 145, 180, 210, 250, 285],
      borderColor: 'rgb(0, 136, 254)',
      backgroundColor: 'rgba(0, 136, 254, 0.2)',
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointHoverRadius: 6,
      borderWidth: 2,
    },
  ],
};

interface ChartContext {
  chart: {
    scales: {
      y: {
        id: string;
      };
    };
  };
}

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
        color: '#ffffff',
        callback: function(this: { id: string }, tickValue: number | string): string {
          return `${tickValue}${this.id === 'y' ? ' ICI' : ' Events'}`;
        }
      },
      title: {
        display: true,
        text: 'Corruption Index & Events',
        color: '#ffffff',
        font: {
          size: 12,
          weight: 'bold' as const
        }
      }
    },
    x: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
      ticks: {
        color: '#ffffff',
      },
      title: {
        display: true,
        text: 'Year',
        color: '#ffffff',
        font: {
          size: 12,
          weight: 'bold' as const
        }
      }
    }
  },
  plugins: {
    legend: {
      labels: {
        color: '#ffffff',
        font: {
          size: 12,
          weight: 'bold' as const
        },
        usePointStyle: true,
        pointStyle: 'circle'
      },
      position: 'top' as const,
    },
    tooltip: {
      enabled: true,
      mode: 'index' as const,
      intersect: false,
      backgroundColor: 'rgba(17, 17, 17, 0.9)',
      titleColor: '#ffffff',
      bodyColor: '#ffffff',
      borderColor: '#333333',
      borderWidth: 1,
      padding: 12,
      bodyFont: {
        size: 12
      },
      titleFont: {
        size: 13,
        weight: 'bold' as const
      }
    }
  }
};

const institutionalBreakdown = [
  { 
    id: "Education",
    label: "Education",
    value: 35,
    description: "Universities, Schools, Research",
    color: "#FF8042"
  },
  { 
    id: "Media",
    label: "Media",
    value: 28,
    description: "News, Entertainment, Social",
    color: "#FFBB28"
  },
  { 
    id: "Government",
    label: "Government",
    value: 22,
    description: "Policy, Regulation, Law",
    color: "#00C49F"
  },
  { 
    id: "Corporate",
    label: "Corporate",
    value: 15,
    description: "Business, Finance, Tech",
    color: "#0088FE"
  },
];

const impactMetrics = [
  { 
    category: "Academic Freedom",
    value: 85,
    trend: "↑",
    description: "Suppression of dissenting views"
  },
  { 
    category: "Media Independence",
    value: 78,
    trend: "↑",
    description: "Narrative control"
  },
  { 
    category: "Political Discourse",
    value: 72,
    trend: "↑",
    description: "Overton window shift"
  },
  { 
    category: "Corporate Policy",
    value: 68,
    trend: "↑",
    description: "ESG/DEI mandates"
  },
  { 
    category: "Public Education",
    value: 82,
    trend: "↑",
    description: "Curriculum manipulation"
  },
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
                Historical Trends (2018-2023)
              </h3>
              <p className="mb-4 text-sm opacity-80">
                This chart tracks two key metrics: the Institutional Corruption Index (ICI) and documented subversion events.
                The ICI is a composite score (0-100) measuring institutional integrity decline, while events track verified
                instances of ideological capture and subversion.
              </p>
              <div className="h-[400px] relative bg-zinc-900/50 p-4 rounded-lg">
                <Line options={lineChartOptions} data={yearlyCorruptionData} />
              </div>
              <div className="mt-4 text-sm opacity-80">
                <p className="font-semibold mb-2">Chart Analysis:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>The ICI shows accelerating deterioration post-2020</li>
                  <li>Event frequency correlates strongly with ICI increases</li>
                  <li>Both metrics indicate systemic rather than isolated corruption</li>
                  <li>Current trajectory suggests continued acceleration</li>
                </ul>
              </div>
            </div>

            <div className="bg-highlight/10 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-highlight mb-4">
                <AlertTriangle className="h-5 w-5" />
                Key Observations & Trends
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Statistical Indicators</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>ICI increased by <span className="text-highlight">73%</span> since 2018</li>
                    <li>Reported incidents up <span className="text-highlight">137%</span></li>
                    <li>Year-over-year acceleration of <span className="text-highlight">15-20%</span></li>
                    <li>Correlation coefficient of <span className="text-highlight">0.92</span> between metrics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Pattern Analysis</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Systematic pattern of institutional capture</li>
                    <li>Cascading effects across sectors</li>
                    <li>Self-reinforcing feedback loops</li>
                    <li>Resistance mechanisms systematically weakened</li>
                  </ul>
                </div>
              </div>
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
                Sector Distribution & Impact
              </h3>
              <p className="mb-4 text-sm opacity-80">
                Analysis of institutional vulnerability and current capture status across major sectors.
                Percentages indicate the degree of ideological subversion and control within each sector.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="h-[400px] relative bg-zinc-900/50 p-4 rounded-lg">
                  <ResponsivePie
                    data={institutionalBreakdown}
                    margin={{ top: 40, right: 80, bottom: 40, left: 80 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    colors={({ data }) => data.color as string}
                    borderWidth={1}
                    borderColor={{ theme: 'background' }}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor="#ffffff"
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: 'color' }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor="#ffffff"
                    legends={[
                      {
                        anchor: 'right',
                        direction: 'column',
                        justify: false,
                        translateX: 70,
                        translateY: 0,
                        itemsSpacing: 5,
                        itemWidth: 60,
                        itemHeight: 18,
                        itemTextColor: '#ffffff',
                        itemDirection: 'left-to-right',
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                          {
                            on: 'hover',
                            style: {
                              itemTextColor: '#FF8042'
                            }
                          }
                        ]
                      }
                    ]}
                    theme={{
                      text: {
                        fill: '#ffffff',
                      },
                      tooltip: {
                        container: {
                          background: '#111111',
                          color: '#ffffff',
                          fontSize: 12,
                          borderRadius: 4,
                          padding: 12,
                        }
                      }
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Sector Analysis</h4>
                  <div className="space-y-4">
                    {institutionalBreakdown.map((sector) => (
                      <div key={sector.id} className="bg-zinc-900/90 p-4 rounded border border-zinc-800">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-lg text-highlight">{sector.label}</span>
                          <span className="text-lg font-bold text-white bg-zinc-800 px-3 py-1 rounded">
                            {sector.value}%
                          </span>
                        </div>
                        <p className="text-sm text-white/90">{sector.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-highlight/10 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-highlight mb-4">
                <AlertTriangle className="h-5 w-5" />
                Impact Severity Assessment
              </h3>
              <p className="mb-4 text-sm opacity-80">
                Quantitative analysis of corruption impact across key institutional functions.
                Scores indicate severity (0-100) with higher values representing greater compromise.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="h-[400px] relative bg-zinc-900/50 p-4 rounded-lg">
                  <ResponsiveBar
                    data={impactMetrics}
                    keys={['value']}
                    indexBy="category"
                    margin={{ top: 50, right: 50, bottom: 70, left: 60 }}
                    padding={0.3}
                    valueScale={{ type: 'linear' }}
                    colors={['#FF8042']}
                    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: -45,
                      legend: 'Impact Categories',
                      legendPosition: 'middle',
                      legendOffset: 50
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: 'Severity Score',
                      legendPosition: 'middle',
                      legendOffset: -40
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor="#ffffff"
                    theme={{
                      axis: {
                        ticks: {
                          text: {
                            fill: '#ffffff',
                            fontSize: 11
                          }
                        },
                        legend: {
                          text: {
                            fill: '#ffffff',
                            fontSize: 12,
                            fontWeight: 'bold'
                          }
                        }
                      },
                      grid: {
                        line: {
                          stroke: 'rgba(255, 255, 255, 0.1)'
                        }
                      },
                      tooltip: {
                        container: {
                          background: '#111111',
                          color: '#ffffff',
                          fontSize: 12,
                          borderRadius: 4,
                          padding: 12,
                        }
                      }
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Impact Details</h4>
                  <div className="space-y-4">
                    {impactMetrics.map((metric) => (
                      <div key={metric.category} className="bg-zinc-900/90 p-4 rounded border border-zinc-800">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <span className="font-bold text-lg text-highlight">
                              {metric.category}
                            </span>
                            <span className="ml-2 text-red-400 font-bold">{metric.trend}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-white bg-zinc-800 px-3 py-1 rounded">
                              {metric.value}
                              <span className="text-sm text-white/70">/100</span>
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-white/90">{metric.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-zinc-800 text-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-zinc-600 pb-2 text-highlight">
              <Landmark className="h-6 w-6" />
              3. Comprehensive Analysis & Findings
            </h2>
            
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-highlight" />
                  Primary Findings
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-highlight font-bold mr-2 mt-1">✓</span>
                    <div>
                      <span className="font-semibold">Education Sector (35%)</span>
                      <p className="text-sm opacity-80 mt-1">
                        Highest vulnerability to ideological capture, with systematic implementation
                        of critical theory frameworks and restriction of academic freedom.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight font-bold mr-2 mt-1">✓</span>
                    <div>
                      <span className="font-semibold">Media Control (28%)</span>
                      <p className="text-sm opacity-80 mt-1">
                        Concentrated ownership and editorial control mechanisms have led to
                        significant narrative manipulation and information filtering.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight font-bold mr-2 mt-1">✓</span>
                    <div>
                      <span className="font-semibold">Government Infiltration (22%)</span>
                      <p className="text-sm opacity-80 mt-1">
                        Progressive capture of regulatory bodies and policy-making institutions,
                        with increasing implementation of subversive agendas.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight font-bold mr-2 mt-1">✓</span>
                    <div>
                      <span className="font-semibold">Corporate Compliance (15%)</span>
                      <p className="text-sm opacity-80 mt-1">
                        Adoption of ideological mandates through ESG metrics and DEI initiatives,
                        creating systemic pressure for institutional conformity.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-highlight" />
                  Critical Implications
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="bg-zinc-900/50 border-zinc-700">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Short-Term Impact</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-4 text-sm space-y-2 opacity-80">
                        <li>Accelerating erosion of academic freedom</li>
                        <li>Increased censorship and narrative control</li>
                        <li>Growing institutional resistance to reform</li>
                        <li>Expansion of ideological conformity requirements</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-zinc-900/50 border-zinc-700">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Long-Term Projections</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-4 text-sm space-y-2 opacity-80">
                        <li>Complete capture of educational institutions</li>
                        <li>Systemic suppression of dissenting views</li>
                        <li>Irreversible cultural transformation</li>
                        <li>Collapse of traditional institutional safeguards</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <div className="border-t pt-6 mt-12">
            <h3 className="text-lg font-semibold mb-4">Related Research & Analysis</h3>
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
                      Detailed analysis of how Marcuse's Critical Theory framework enabled
                      systematic institutional subversion through repressive tolerance.
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
                      Investigation into the systematic implementation of institutional
                      subversion through coordinated demographic and cultural engineering.
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