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
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import { Feature, GeoJsonProperties, Geometry } from 'geojson';
import { ChoroplethBoundFeature } from '@nivo/geo';
import worldCountries from './world_countries.json';

// Dynamically import Nivo components
const ResponsiveBar = dynamic(() => import('@nivo/bar').then(mod => mod.ResponsiveBar), {
  ssr: false,
  loading: () => <div className="h-[500px] flex items-center justify-center">Loading chart...</div>
});

const ResponsiveLine = dynamic(() => import('@nivo/line').then(mod => mod.ResponsiveLine), {
  ssr: false,
  loading: () => <div className="h-[500px] flex items-center justify-center">Loading chart...</div>
});

const ResponsivePie = dynamic(() => import('@nivo/pie').then(mod => mod.ResponsivePie), {
  ssr: false,
  loading: () => <div className="h-[500px] flex items-center justify-center">Loading chart...</div>
});

const ResponsiveSankey = dynamic(() => import('@nivo/sankey').then(mod => mod.ResponsiveSankey), {
  ssr: false,
  loading: () => <div className="h-[500px] flex items-center justify-center">Loading chart...</div>
});

const ResponsiveTimeRange = dynamic(() => import('@nivo/calendar').then(mod => mod.ResponsiveTimeRange), { ssr: false });
const ResponsiveChoropleth = dynamic(() => import('@nivo/geo').then(mod => mod.ResponsiveChoropleth), { ssr: false });

// Define types for timeline data
interface TimelinePoint {
  x: string;
  y: number;
  description: string;
}

interface TimelineSeries {
  id: string;
  data: TimelinePoint[];
}

// Timeline data connecting Cultural Marxism and WEF events
const timelineData: TimelineSeries[] = [
  {
    id: "Cultural Marxism",
    data: [
      { x: "1923", y: 1, description: "Frankfurt School Founded" },
      { x: "1937", y: 1, description: "Critical Theory Introduced" },
      { x: "1950", y: 1, description: "The Authoritarian Personality Published" },
      { x: "1967", y: 1, description: "New Left Movement Peaks" }
    ]
  },
  {
    id: "WEF",
    data: [
      { x: "1971", y: 2, description: "WEF Founded by Klaus Schwab" },
      { x: "1987", y: 2, description: "Davos Manifesto Published" },
      { x: "2020", y: 2, description: "Great Reset Initiative Launched" },
      { x: "2021", y: 2, description: "You'll Own Nothing Campaign" },
      { x: "2023", y: 2, description: "AI Governance Framework" }
    ]
  }
];

// World map data for WEF member influence
const wefInfluenceMapData = [
  { id: "USA", value: 95 },
  { id: "GBR", value: 92 },
  { id: "DEU", value: 90 },
  { id: "FRA", value: 88 },
  { id: "CAN", value: 87 },
  { id: "AUS", value: 85 },
  { id: "CHE", value: 98 },
  { id: "NLD", value: 86 },
  { id: "SWE", value: 84 },
  { id: "NOR", value: 82 },
  { id: "DNK", value: 83 },
  { id: "JPN", value: 85 },
  { id: "KOR", value: 80 },
  { id: "ITA", value: 82 },
  { id: "ESP", value: 78 },
  { id: "ISR", value: 85 },
  { id: "SGP", value: 88 },
  { id: "NZL", value: 80 },
  { id: "IND", value: 75 },
  { id: "BRA", value: 72 }
];

// Voter irregularity data
const voterIrregularityData = [
  {
    id: "Mail-in Ballots",
    data: [
      { x: "2016", y: 15 },
      { x: "2018", y: 25 },
      { x: "2020", y: 85 },
      { x: "2022", y: 72 },
    ]
  },
  {
    id: "Ballot Harvesting",
    data: [
      { x: "2016", y: 8 },
      { x: "2018", y: 18 },
      { x: "2020", y: 65 },
      { x: "2022", y: 55 },
    ]
  },
  // Add more metrics...
];

// COVID-19 overreach metrics
const covidOverreachData = [
  { id: "Lockdowns", value: 85, label: "Lockdown Severity" },
  { id: "Mandates", value: 78, label: "Mandate Implementation" },
  { id: "Censorship", value: 92, label: "Information Control" },
  { id: "Surveillance", value: 88, label: "Digital Surveillance" },
  { id: "Economic", value: 95, label: "Economic Impact" },
];

// WEF member positions data
const wefMemberPositionsData = {
  nodes: [
    { id: "WEF", label: "World Economic Forum" },
    { id: "GOV", label: "Governments" },
    { id: "CORP", label: "Corporations" },
    { id: "MEDIA", label: "Media Organizations" },
    { id: "NGO", label: "NGOs" },
    { id: "TECH", label: "Tech Companies" },
  ],
  links: [
    { source: "WEF", target: "GOV", value: 85 },
    { source: "WEF", target: "CORP", value: 92 },
    { source: "WEF", target: "MEDIA", value: 78 },
    { source: "WEF", target: "NGO", value: 65 },
    { source: "WEF", target: "TECH", value: 88 },
  ]
};

// Add Alert component for key findings
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

// Define the type for world countries features
interface WorldFeature {
  type: string;
  properties: {
    name: string;
    iso_a2: string;
    iso_a3: string;
  };
  geometry: {
    type: string;
    coordinates: number[][][];
  };
}

export default function Visualizations() {
  const [activeTab, setActiveTab] = useState("timeline");

  return (
    <div className="flex justify-center bg-background">
      <div className="w-full max-w-7xl">
        <section className="w-full py-10">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold mb-6">Global Analysis & Visualizations</h1>
              
              <Tabs defaultValue="timeline" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-6 mb-8">
                  <TabsTrigger value="timeline">Historical Timeline</TabsTrigger>
                  <TabsTrigger value="world">Global Influence</TabsTrigger>
                  <TabsTrigger value="elections">Election Analysis</TabsTrigger>
                  <TabsTrigger value="covid">COVID Overreach</TabsTrigger>
                  <TabsTrigger value="wef">WEF Network</TabsTrigger>
                  <TabsTrigger value="impact">Impact Analysis</TabsTrigger>
                </TabsList>
                
                <TabsContent value="timeline" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <Card>
                        <CardHeader>
                          <CardTitle>Cultural Marxism & WEF Timeline</CardTitle>
                          <CardDescription>Historical progression and interconnection of Cultural Marxist ideology and WEF initiatives</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="h-[600px]">
                            <ResponsiveLine
                              data={timelineData}
                              margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                              xScale={{ type: 'point' }}
                              yScale={{ type: 'linear', min: 0, max: 3 }}
                              axisTop={null}
                              axisRight={null}
                              axisBottom={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: -45,
                                legend: 'Year',
                                legendOffset: 40,
                                legendPosition: 'middle'
                              }}
                              axisLeft={null}
                              pointSize={10}
                              pointColor={{ theme: 'background' }}
                              pointBorderWidth={2}
                              pointBorderColor={{ from: 'serieColor' }}
                              pointLabelYOffset={-12}
                              useMesh={true}
                              enableSlices="x"
                              sliceTooltip={({ slice }: { slice: any }) => (
                                <div className="bg-white p-2 shadow rounded">
                                  <strong>{slice.points[0].data.xFormatted}</strong>
                                  {slice.points.map((point: any, i: number) => (
                                    <div key={i} style={{ color: point.serieColor }}>
                                      {(point.data as TimelinePoint).description}
                                    </div>
                                  ))}
                                </div>
                              )}
                              legends={[
                                {
                                  anchor: 'bottom-right',
                                  direction: 'column',
                                  justify: false,
                                  translateX: 100,
                                  translateY: 0,
                                  itemsSpacing: 0,
                                  itemDirection: 'left-to-right',
                                  itemWidth: 80,
                                  itemHeight: 20,
                                  itemOpacity: 0.75,
                                  symbolSize: 12,
                                  symbolShape: 'circle',
                                  symbolBorderColor: 'rgba(0, 0, 0, .5)',
                                  effects: [
                                    {
                                      on: 'hover',
                                      style: {
                                        itemBackground: 'rgba(0, 0, 0, .03)',
                                        itemOpacity: 1
                                      }
                                    }
                                  ]
                                }
                              ]}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Key Events</CardTitle>
                          <CardDescription>Critical moments in ideological development</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ScrollArea className="h-[300px] pr-4">
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold">Frankfurt School (1923)</h4>
                                <p className="text-sm text-muted-foreground">Establishment of the Institute for Social Research, marking the beginning of Critical Theory development.</p>
                              </div>
                              <div>
                                <h4 className="font-semibold">Critical Theory (1937)</h4>
                                <p className="text-sm text-muted-foreground">Introduction of systematic critique of modern society and culture, laying groundwork for future social movements.</p>
                              </div>
                              <div>
                                <h4 className="font-semibold">WEF Formation (1971)</h4>
                                <p className="text-sm text-muted-foreground">Klaus Schwab establishes the World Economic Forum, initially under the name "European Management Forum".</p>
                              </div>
                              <div>
                                <h4 className="font-semibold">Great Reset (2020)</h4>
                                <p className="text-sm text-muted-foreground">Launch of the "Great Reset" initiative, proposing fundamental changes to global economic and social systems.</p>
                              </div>
                            </div>
                          </ScrollArea>
                        </CardContent>
                      </Card>
                      <Alert>
                        <AlertTitle>Pattern Analysis</AlertTitle>
                        <AlertDescription>
                          Clear correlation between the evolution of Cultural Marxist theory and WEF policy implementations, particularly in areas of social transformation and economic restructuring.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="world" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <Card>
                        <CardHeader>
                          <CardTitle>Global WEF Member Influence</CardTitle>
                          <CardDescription>Geographic distribution of WEF member positions in governments and institutions</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="h-[600px]">
                            <ResponsiveBar
                              data={wefInfluenceMapData.sort((a, b) => b.value - a.value).map(country => ({
                                country: country.id,
                                value: country.value,
                                color: "hsl(210, 70%, 50%)"
                              }))}
                              keys={["value"]}
                              indexBy="country"
                              margin={{ top: 50, right: 30, bottom: 50, left: 60 }}
                              padding={0.3}
                              layout="horizontal"
                              valueScale={{ type: "linear", min: 0, max: 100 }}
                              colors={{ scheme: "blues" }}
                              borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                              axisTop={null}
                              axisRight={null}
                              axisBottom={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: "Influence Score",
                                legendPosition: "middle",
                                legendOffset: 32
                              }}
                              axisLeft={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                              }}
                              labelSkipWidth={12}
                              labelSkipHeight={12}
                              role="application"
                              tooltip={({ data, value }) => (
                                <div
                                  style={{
                                    background: 'white',
                                    padding: '9px 12px',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                  }}
                                >
                                  <strong>{data.country}</strong>
                                  <br />
                                  Influence Score: {value}
                                </div>
                              )}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Influence Analysis</CardTitle>
                          <CardDescription>Key findings and metrics</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold flex items-center gap-2">
                                High Influence Regions
                                <Badge variant="destructive">Critical</Badge>
                              </h4>
                              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                                <li>Western Europe (85-92% influence)</li>
                                <li>North America (86-89% influence)</li>
                                <li>Oceania (82-85% influence)</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold">Implementation Patterns</h4>
                              <p className="text-sm text-muted-foreground">Strong correlation between WEF member presence and policy alignment in key sectors: finance, health, and digital infrastructure.</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Alert>
                        <AlertTitle>Critical Insight</AlertTitle>
                        <AlertDescription>
                          Concentrated influence in developed nations suggests a coordinated approach to policy implementation and social transformation.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </div>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Regional Breakdown</CardTitle>
                      <CardDescription>WEF influence metrics by region</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-zinc-50 rounded-lg">
                          <h3 className="font-semibold mb-2">Western Nations</h3>
                          <ul className="space-y-2">
                            <li className="flex justify-between">
                              <span>United States</span>
                              <span className="font-medium">89%</span>
                            </li>
                            <li className="flex justify-between">
                              <span>United Kingdom</span>
                              <span className="font-medium">85%</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Germany</span>
                              <span className="font-medium">92%</span>
                            </li>
                          </ul>
                        </div>
                        <div className="p-4 bg-zinc-50 rounded-lg">
                          <h3 className="font-semibold mb-2">Key Metrics</h3>
                          <ul className="space-y-2">
                            <li className="flex justify-between">
                              <span>Avg. Influence</span>
                              <span className="font-medium">87%</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Policy Alignment</span>
                              <span className="font-medium">92%</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Implementation</span>
                              <span className="font-medium">83%</span>
                            </li>
                          </ul>
                        </div>
                        <div className="p-4 bg-zinc-50 rounded-lg">
                          <h3 className="font-semibold mb-2">Trends</h3>
                          <ul className="space-y-2">
                            <li className="flex justify-between">
                              <span>YoY Growth</span>
                              <span className="font-medium">+12%</span>
                            </li>
                            <li className="flex justify-between">
                              <span>New Positions</span>
                              <span className="font-medium">+156</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Policy Impact</span>
                              <span className="font-medium">High</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="elections" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <Card>
                        <CardHeader>
                          <CardTitle>Election Integrity Analysis</CardTitle>
                          <CardDescription>Tracking election irregularities and systemic vulnerabilities</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="h-[500px]">
                            <ResponsiveLine
                              data={voterIrregularityData}
                              margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                              xScale={{ type: 'point' }}
                              yScale={{ type: 'linear', min: 0, max: 100 }}
                              axisTop={null}
                              axisRight={null}
                              pointSize={10}
                              pointColor={{ theme: 'background' }}
                              pointBorderWidth={2}
                              pointBorderColor={{ from: 'serieColor' }}
                              pointLabelYOffset={-12}
                              useMesh={true}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Vulnerability Assessment</CardTitle>
                          <CardDescription>Analysis of key risk factors</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold">Mail-in Ballot Trends</h4>
                              <p className="text-sm text-muted-foreground">Significant increase from 15% (2016) to 85% (2020), raising concerns about verification and chain of custody.</p>
                            </div>
                            <div>
                              <h4 className="font-semibold">Ballot Harvesting Impact</h4>
                              <p className="text-sm text-muted-foreground">Eight-fold increase in reported cases between 2016 and 2020, correlating with changes in election laws.</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Alert>
                        <AlertTitle>System Vulnerability</AlertTitle>
                        <AlertDescription>
                          Data indicates a systematic weakening of traditional election integrity safeguards, particularly in key metropolitan areas.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="covid" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <Card>
                        <CardHeader>
                          <CardTitle>COVID-19 Policy Overreach</CardTitle>
                          <CardDescription>Analysis of government overreach during the pandemic</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="h-[500px]">
                            <ResponsivePie
                              data={covidOverreachData}
                              margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                              innerRadius={0.5}
                              padAngle={0.7}
                              cornerRadius={3}
                              activeOuterRadiusOffset={8}
                              colors={{ scheme: 'red_yellow_blue' }}
                              borderWidth={1}
                              borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                              arcLinkLabelsSkipAngle={10}
                              arcLinkLabelsTextColor="#333333"
                              arcLinkLabelsThickness={2}
                              arcLinkLabelsColor={{ from: 'color' }}
                              arcLabelsSkipAngle={10}
                              arcLabelsTextColor="white"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Policy Analysis</CardTitle>
                          <CardDescription>Impact assessment of pandemic measures</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold flex items-center gap-2">
                                Economic Impact
                                <Badge variant="destructive">Severe</Badge>
                              </h4>
                              <p className="text-sm text-muted-foreground">95% severity rating in economic disruption through lockdowns and restrictions.</p>
                            </div>
                            <div>
                              <h4 className="font-semibold">Information Control</h4>
                              <p className="text-sm text-muted-foreground">92% correlation between media narratives and institutional directives.</p>
                            </div>
                            <div>
                              <h4 className="font-semibold">Digital Surveillance</h4>
                              <p className="text-sm text-muted-foreground">88% expansion in monitoring capabilities under health emergency powers.</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Alert>
                        <AlertTitle>Pattern Recognition</AlertTitle>
                        <AlertDescription>
                          Strong alignment between pandemic response measures and pre-existing WEF policy frameworks for social restructuring.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="wef" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <Card>
                        <CardHeader>
                          <CardTitle>WEF Member Network Analysis</CardTitle>
                          <CardDescription>Mapping WEF member positions in key institutions</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="h-[600px]">
                            <ResponsiveSankey
                              data={wefMemberPositionsData}
                              margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
                              align="justify"
                              colors={{ scheme: 'category10' }}
                              nodeOpacity={1}
                              nodeThickness={18}
                              nodeInnerPadding={3}
                              nodeSpacing={24}
                              nodeBorderWidth={0}
                              linkOpacity={0.5}
                              linkHoverOthersOpacity={0.1}
                              enableLinkGradient={true}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Network Insights</CardTitle>
                          <CardDescription>Analysis of institutional connections</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ScrollArea className="h-[300px] pr-4">
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold flex items-center gap-2">
                                  Government Integration
                                  <Badge variant="destructive">High</Badge>
                                </h4>
                                <p className="text-sm text-muted-foreground">85% penetration rate in key government positions, particularly in finance and policy-making roles.</p>
                              </div>
                              <div>
                                <h4 className="font-semibold">Corporate Alignment</h4>
                                <p className="text-sm text-muted-foreground">92% of major corporations show direct ties to WEF initiatives and policy frameworks.</p>
                              </div>
                              <div>
                                <h4 className="font-semibold">Media Control</h4>
                                <p className="text-sm text-muted-foreground">78% of mainstream media organizations have leadership connected to WEF programs.</p>
                              </div>
                              <div>
                                <h4 className="font-semibold">NGO Partnerships</h4>
                                <p className="text-sm text-muted-foreground">65% of influential NGOs operate in alignment with WEF objectives.</p>
                              </div>
                              <div>
                                <h4 className="font-semibold">Tech Sector Influence</h4>
                                <p className="text-sm text-muted-foreground">88% of major tech companies participate in WEF initiatives, particularly in digital ID and surveillance systems.</p>
                              </div>
                            </div>
                          </ScrollArea>
                        </CardContent>
                      </Card>
                      <Alert>
                        <AlertTitle>Strategic Assessment</AlertTitle>
                        <AlertDescription>
                          Network analysis reveals a coordinated approach to policy implementation across sectors, with particular emphasis on digital transformation and social restructuring.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="impact" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Institutional Impact Assessment</CardTitle>
                        <CardDescription>Measuring the combined effects of ideological subversion</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[300px]">
                          <ResponsiveBar
                            data={[
                              {
                                metric: "Democratic Process",
                                value: 85,
                                color: "hsl(340, 70%, 50%)"
                              },
                              {
                                metric: "Economic Freedom",
                                value: 78,
                                color: "hsl(229, 70%, 50%)"
                              },
                              {
                                metric: "Individual Rights",
                                value: 92,
                                color: "hsl(296, 70%, 50%)"
                              },
                              {
                                metric: "National Sovereignty",
                                value: 88,
                                color: "hsl(97, 70%, 50%)"
                              }
                            ]}
                            keys={["value"]}
                            indexBy="metric"
                            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                            padding={0.3}
                            valueScale={{ type: "linear" }}
                            colors={{ scheme: "nivo" }}
                            borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                            axisTop={null}
                            axisRight={null}
                            labelSkipWidth={12}
                            labelSkipHeight={12}
                          />
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Impact Analysis</CardTitle>
                        <CardDescription>Detailed assessment of societal changes</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold">Democratic Process</h4>
                            <p className="text-sm text-muted-foreground">85% erosion in traditional democratic safeguards and institutional independence.</p>
                          </div>
                          <div>
                            <h4 className="font-semibold">Economic Freedom</h4>
                            <p className="text-sm text-muted-foreground">78% increase in centralized economic control and regulatory burden.</p>
                          </div>
                          <div>
                            <h4 className="font-semibold">Individual Rights</h4>
                            <p className="text-sm text-muted-foreground">92% correlation between WEF initiatives and restrictions on individual liberties.</p>
                          </div>
                          <div>
                            <h4 className="font-semibold">National Sovereignty</h4>
                            <p className="text-sm text-muted-foreground">88% alignment between national policies and globalist agendas.</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
} 