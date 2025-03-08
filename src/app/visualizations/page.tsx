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
import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveLine } from '@nivo/line';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveSankey } from '@nivo/sankey';
import { motion } from "framer-motion";

// Data for institutional influence over time
const institutionalInfluenceData = [
  {
    id: 'Universities',
    color: 'hsl(340, 70%, 50%)',
    data: [
      { x: '2010', y: 45 },
      { x: '2012', y: 52 },
      { x: '2014', y: 58 },
      { x: '2016', y: 65 },
      { x: '2018', y: 75 },
      { x: '2020', y: 85 },
      { x: '2022', y: 92 },
      { x: '2023', y: 95 },
    ],
  },
  {
    id: 'Media',
    color: 'hsl(229, 70%, 50%)',
    data: [
      { x: '2010', y: 55 },
      { x: '2012', y: 60 },
      { x: '2014', y: 68 },
      { x: '2016', y: 72 },
      { x: '2018', y: 78 },
      { x: '2020', y: 82 },
      { x: '2022', y: 85 },
      { x: '2023', y: 88 },
    ],
  },
  {
    id: 'Corporate',
    color: 'hsl(296, 70%, 50%)',
    data: [
      { x: '2010', y: 25 },
      { x: '2012', y: 30 },
      { x: '2014', y: 38 },
      { x: '2016', y: 45 },
      { x: '2018', y: 58 },
      { x: '2020', y: 68 },
      { x: '2022', y: 75 },
      { x: '2023', y: 80 },
    ],
  },
];

// Data for CRT components prevalence
const crtComponentsData = [
  { institution: 'Universities', 'Systemic Racism': 95, 'White Privilege': 90, 'Intersectionality': 85, 'Anti-Meritocracy': 80, 'Identity Politics': 88 },
  { institution: 'K-12 Schools', 'Systemic Racism': 75, 'White Privilege': 70, 'Intersectionality': 65, 'Anti-Meritocracy': 60, 'Identity Politics': 72 },
  { institution: 'Media', 'Systemic Racism': 85, 'White Privilege': 82, 'Intersectionality': 78, 'Anti-Meritocracy': 75, 'Identity Politics': 80 },
  { institution: 'Tech Companies', 'Systemic Racism': 70, 'White Privilege': 75, 'Intersectionality': 72, 'Anti-Meritocracy': 68, 'Identity Politics': 73 },
  { institution: 'Government', 'Systemic Racism': 60, 'White Privilege': 55, 'Intersectionality': 50, 'Anti-Meritocracy': 45, 'Identity Politics': 52 },
];

// Data for ideological distribution
const ideologicalData = [
  { id: 'Critical Race Theory', label: 'Critical Race Theory', value: 35, color: 'hsl(340, 70%, 50%)' },
  { id: 'Cultural Marxism', label: 'Cultural Marxism', value: 25, color: 'hsl(229, 70%, 50%)' },
  { id: 'Postmodernism', label: 'Postmodernism', value: 20, color: 'hsl(296, 70%, 50%)' },
  { id: 'Intersectionality', label: 'Intersectionality', value: 15, color: 'hsl(97, 70%, 50%)' },
  { id: 'Other Critical Theories', label: 'Other Critical Theories', value: 5, color: 'hsl(141, 70%, 50%)' },
];

// Data for influence flow
const influenceFlowData = {
  nodes: [
    { id: 'Frankfurt School', color: 'hsl(340, 70%, 50%)' },
    { id: 'Critical Theory', color: 'hsl(229, 70%, 50%)' },
    { id: 'Universities', color: 'hsl(296, 70%, 50%)' },
    { id: 'Media', color: 'hsl(97, 70%, 50%)' },
    { id: 'K-12 Education', color: 'hsl(141, 70%, 50%)' },
    { id: 'Corporate', color: 'hsl(43, 70%, 50%)' },
    { id: 'Government', color: 'hsl(283, 70%, 50%)' },
  ],
  links: [
    { source: 'Frankfurt School', target: 'Critical Theory', value: 100 },
    { source: 'Critical Theory', target: 'Universities', value: 90 },
    { source: 'Universities', target: 'Media', value: 75 },
    { source: 'Universities', target: 'K-12 Education', value: 65 },
    { source: 'Media', target: 'Corporate', value: 60 },
    { source: 'Media', target: 'Government', value: 50 },
    { source: 'K-12 Education', target: 'Corporate', value: 40 },
    { source: 'Corporate', target: 'Government', value: 35 },
  ],
};

export default function Visualizations() {
  const [activeTab, setActiveTab] = useState("trends");

  return (
    <div className="container py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">Data Visualizations</h1>
        
        <Tabs defaultValue="trends" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="trends">Historical Trends</TabsTrigger>
            <TabsTrigger value="components">CRT Components</TabsTrigger>
            <TabsTrigger value="distribution">Ideological Distribution</TabsTrigger>
            <TabsTrigger value="flow">Influence Flow</TabsTrigger>
          </TabsList>
          
          <TabsContent value="trends" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Institutional Influence Over Time</CardTitle>
                <CardDescription>Tracking the rise of Cultural Marxism across institutions (2010-2023)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[500px]">
                  <ResponsiveLine
                    data={institutionalInfluenceData}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: 'point' }}
                    yScale={{ type: 'linear', min: 0, max: 100 }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: 'Year',
                      legendOffset: 36,
                      legendPosition: 'middle'
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: 'Influence Level (%)',
                      legendOffset: -40,
                      legendPosition: 'middle'
                    }}
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabelYOffset={-12}
                    useMesh={true}
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
          </TabsContent>
          
          <TabsContent value="components" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>CRT Components by Institution</CardTitle>
                <CardDescription>Distribution of Critical Race Theory components across different sectors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[500px]">
                  <ResponsiveBar
                    data={crtComponentsData}
                    keys={['Systemic Racism', 'White Privilege', 'Intersectionality', 'Anti-Meritocracy', 'Identity Politics']}
                    indexBy="institution"
                    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                    padding={0.3}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={{ scheme: 'nivo' }}
                    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: -45,
                      legend: 'Institution',
                      legendPosition: 'middle',
                      legendOffset: 45
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: 'Prevalence (%)',
                      legendPosition: 'middle',
                      legendOffset: -40
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    legends={[
                      {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                          {
                            on: 'hover',
                            style: {
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
          </TabsContent>
          
          <TabsContent value="distribution" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Ideological Distribution</CardTitle>
                <CardDescription>Breakdown of Critical Theory influence by ideology type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[500px]">
                  <ResponsivePie
                    data={ideologicalData}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    borderWidth={1}
                    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor="#333333"
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: 'color' }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
                    legends={[
                      {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 56,
                        itemsSpacing: 0,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                          {
                            on: 'hover',
                            style: {
                              itemTextColor: '#000'
                            }
                          }
                        ]
                      }
                    ]}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="flow" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Influence Flow Analysis</CardTitle>
                <CardDescription>Tracing the flow of Cultural Marxist influence through institutions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[500px]">
                  <ResponsiveSankey
                    data={influenceFlowData}
                    margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
                    align="justify"
                    colors={{ scheme: 'category10' }}
                    nodeOpacity={1}
                    nodeThickness={18}
                    nodeInnerPadding={3}
                    nodeSpacing={24}
                    nodeBorderWidth={0}
                    nodeBorderColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
                    linkOpacity={0.5}
                    linkHoverOthersOpacity={0.1}
                    enableLinkGradient={true}
                    labelPosition="outside"
                    labelOrientation="horizontal"
                    labelPadding={16}
                    labelTextColor={{ from: 'color', modifiers: [['darker', 1]] }}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
} 