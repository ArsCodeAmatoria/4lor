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

// Import world map data
import worldCountries from './world_countries.json';

// Timeline data connecting Cultural Marxism and WEF events
const timelineData = [
  { year: 1923, event: "Frankfurt School Founded", type: "cultural_marxism" },
  { year: 1937, event: "Critical Theory Introduced", type: "cultural_marxism" },
  { year: 1971, event: "WEF Founded by Klaus Schwab", type: "wef" },
  { year: 1987, event: "Davos Manifesto Published", type: "wef" },
  { year: 2020, event: "Great Reset Initiative Launched", type: "wef" },
  { year: 2021, event: "You'll Own Nothing Campaign", type: "wef" },
  { year: 2023, event: "AI Governance Framework", type: "wef" },
];

// World map data for WEF member influence
const wefInfluenceMapData = [
  { id: "USA", value: 89 },
  { id: "GBR", value: 85 },
  { id: "DEU", value: 92 },
  { id: "FRA", value: 88 },
  { id: "CAN", value: 86 },
  { id: "AUS", value: 82 },
  // Add more countries...
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
                  <Card>
                    <CardHeader>
                      <CardTitle>Cultural Marxism & WEF Timeline</CardTitle>
                      <CardDescription>Historical progression and interconnection of Cultural Marxist ideology and WEF initiatives</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[600px]">
                        <ResponsiveTimeRange
                          data={timelineData}
                          from={new Date(1920, 0, 1)}
                          to={new Date(2024, 0, 1)}
                          emptyColor="#eeeeee"
                          colors={['#f59e0b', '#ef4444']}
                          margin={{ top: 40, right: 40, bottom: 100, left: 40 }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="world" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Global WEF Member Influence</CardTitle>
                      <CardDescription>Geographic distribution of WEF member positions in governments and institutions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[600px]">
                        <ResponsiveChoropleth
                          data={wefInfluenceMapData}
                          features={worldCountries.features}
                          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                          colors="YlOrRd"
                          domain={[0, 100]}
                          unknownColor="#666666"
                          label="properties.name"
                          projectionScale={140}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="elections" className="space-y-6">
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
                </TabsContent>
                
                <TabsContent value="covid" className="space-y-6">
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
                        />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="wef" className="space-y-6">
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
                </TabsContent>
                
                <TabsContent value="impact" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Institutional Impact Assessment</CardTitle>
                      <CardDescription>Measuring the combined effects of ideological subversion</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
} 