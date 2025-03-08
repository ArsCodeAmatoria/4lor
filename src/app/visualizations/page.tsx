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

// Sample data for Nivo charts
const barData = [
  { country: 'AD', 'hot dog': 96, 'hot dogColor': 'hsl(229, 70%, 50%)', burger: 28, burgerColor: 'hsl(296, 70%, 50%)', sandwich: 129, sandwichColor: 'hsl(97, 70%, 50%)', kebab: 92, kebabColor: 'hsl(340, 70%, 50%)', fries: 168, friesColor: 'hsl(141, 70%, 50%)', donut: 110, donutColor: 'hsl(224, 70%, 50%)' },
  { country: 'AE', 'hot dog': 190, 'hot dogColor': 'hsl(296, 70%, 50%)', burger: 89, burgerColor: 'hsl(95, 70%, 50%)', sandwich: 11, sandwichColor: 'hsl(96, 70%, 50%)', kebab: 108, kebabColor: 'hsl(86, 70%, 50%)', fries: 69, friesColor: 'hsl(340, 70%, 50%)', donut: 69, donutColor: 'hsl(221, 70%, 50%)' },
  { country: 'AF', 'hot dog': 11, 'hot dogColor': 'hsl(229, 70%, 50%)', burger: 167, burgerColor: 'hsl(292, 70%, 50%)', sandwich: 47, sandwichColor: 'hsl(97, 70%, 50%)', kebab: 175, kebabColor: 'hsl(340, 70%, 50%)', fries: 149, friesColor: 'hsl(141, 70%, 50%)', donut: 52, donutColor: 'hsl(224, 70%, 50%)' },
  { country: 'AG', 'hot dog': 175, 'hot dogColor': 'hsl(296, 70%, 50%)', burger: 66, burgerColor: 'hsl(95, 70%, 50%)', sandwich: 113, sandwichColor: 'hsl(96, 70%, 50%)', kebab: 97, kebabColor: 'hsl(86, 70%, 50%)', fries: 151, friesColor: 'hsl(340, 70%, 50%)', donut: 112, donutColor: 'hsl(221, 70%, 50%)' },
  { country: 'AI', 'hot dog': 149, 'hot dogColor': 'hsl(229, 70%, 50%)', burger: 51, burgerColor: 'hsl(292, 70%, 50%)', sandwich: 197, sandwichColor: 'hsl(97, 70%, 50%)', kebab: 118, kebabColor: 'hsl(340, 70%, 50%)', fries: 107, friesColor: 'hsl(141, 70%, 50%)', donut: 49, donutColor: 'hsl(224, 70%, 50%)' },
  { country: 'AL', 'hot dog': 134, 'hot dogColor': 'hsl(296, 70%, 50%)', burger: 149, burgerColor: 'hsl(95, 70%, 50%)', sandwich: 165, sandwichColor: 'hsl(96, 70%, 50%)', kebab: 83, kebabColor: 'hsl(86, 70%, 50%)', fries: 51, friesColor: 'hsl(340, 70%, 50%)', donut: 126, donutColor: 'hsl(221, 70%, 50%)' },
  { country: 'AM', 'hot dog': 55, 'hot dogColor': 'hsl(229, 70%, 50%)', burger: 147, burgerColor: 'hsl(292, 70%, 50%)', sandwich: 167, sandwichColor: 'hsl(97, 70%, 50%)', kebab: 117, kebabColor: 'hsl(340, 70%, 50%)', fries: 106, friesColor: 'hsl(141, 70%, 50%)', donut: 186, donutColor: 'hsl(224, 70%, 50%)' },
];

const lineData = [
  {
    id: 'japan',
    color: 'hsl(229, 70%, 50%)',
    data: [
      { x: 'Jan', y: 240 },
      { x: 'Feb', y: 139 },
      { x: 'Mar', y: 180 },
      { x: 'Apr', y: 281 },
      { x: 'May', y: 156 },
      { x: 'Jun', y: 255 },
      { x: 'Jul', y: 240 },
      { x: 'Aug', y: 265 },
      { x: 'Sep', y: 175 },
      { x: 'Oct', y: 149 },
      { x: 'Nov', y: 179 },
      { x: 'Dec', y: 271 },
    ],
  },
  {
    id: 'france',
    color: 'hsl(296, 70%, 50%)',
    data: [
      { x: 'Jan', y: 170 },
      { x: 'Feb', y: 270 },
      { x: 'Mar', y: 153 },
      { x: 'Apr', y: 156 },
      { x: 'May', y: 214 },
      { x: 'Jun', y: 190 },
      { x: 'Jul', y: 120 },
      { x: 'Aug', y: 140 },
      { x: 'Sep', y: 239 },
      { x: 'Oct', y: 159 },
      { x: 'Nov', y: 189 },
      { x: 'Dec', y: 231 },
    ],
  },
  {
    id: 'us',
    color: 'hsl(97, 70%, 50%)',
    data: [
      { x: 'Jan', y: 190 },
      { x: 'Feb', y: 160 },
      { x: 'Mar', y: 140 },
      { x: 'Apr', y: 281 },
      { x: 'May', y: 256 },
      { x: 'Jun', y: 155 },
      { x: 'Jul', y: 140 },
      { x: 'Aug', y: 265 },
      { x: 'Sep', y: 275 },
      { x: 'Oct', y: 149 },
      { x: 'Nov', y: 179 },
      { x: 'Dec', y: 271 },
    ],
  },
];

const pieData = [
  { id: 'javascript', label: 'javascript', value: 195, color: 'hsl(229, 70%, 50%)' },
  { id: 'ruby', label: 'ruby', value: 490, color: 'hsl(296, 70%, 50%)' },
  { id: 'scala', label: 'scala', value: 301, color: 'hsl(97, 70%, 50%)' },
  { id: 'haskell', label: 'haskell', value: 210, color: 'hsl(340, 70%, 50%)' },
  { id: 'css', label: 'css', value: 110, color: 'hsl(141, 70%, 50%)' },
];

const sankeyData = {
  nodes: [
    { id: 'John', nodeColor: 'hsl(229, 70%, 50%)' },
    { id: 'Raoul', nodeColor: 'hsl(296, 70%, 50%)' },
    { id: 'Jane', nodeColor: 'hsl(97, 70%, 50%)' },
    { id: 'Marcel', nodeColor: 'hsl(340, 70%, 50%)' },
    { id: 'Ibrahim', nodeColor: 'hsl(141, 70%, 50%)' },
    { id: 'Junko', nodeColor: 'hsl(224, 70%, 50%)' },
  ],
  links: [
    { source: 'John', target: 'Jane', value: 46 },
    { source: 'John', target: 'Marcel', value: 24 },
    { source: 'John', target: 'Ibrahim', value: 95 },
    { source: 'John', target: 'Junko', value: 71 },
    { source: 'Raoul', target: 'Jane', value: 47 },
    { source: 'Raoul', target: 'Marcel', value: 158 },
    { source: 'Raoul', target: 'Ibrahim', value: 165 },
    { source: 'Raoul', target: 'Junko', value: 47 },
    { source: 'Jane', target: 'Marcel', value: 108 },
    { source: 'Jane', target: 'Ibrahim', value: 41 },
    { source: 'Jane', target: 'Junko', value: 16 },
  ],
};

export default function Visualizations() {
  const [activeTab, setActiveTab] = useState("bar");

  return (
    <div className="container py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">Advanced Visualizations</h1>
        
        <Tabs defaultValue="bar" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="bar">Bar Chart</TabsTrigger>
            <TabsTrigger value="line">Line Chart</TabsTrigger>
            <TabsTrigger value="pie">Pie Chart</TabsTrigger>
            <TabsTrigger value="sankey">Sankey Diagram</TabsTrigger>
          </TabsList>
          
          <TabsContent value="bar" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Bar Chart</CardTitle>
                <CardDescription>Interactive bar chart with Nivo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[500px]">
                  <ResponsiveBar
                    data={barData}
                    keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
                    indexBy="country"
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
                      tickRotation: 0,
                      legend: 'country',
                      legendPosition: 'middle',
                      legendOffset: 32,
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: 'food',
                      legendPosition: 'middle',
                      legendOffset: -40,
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
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
                              itemOpacity: 1,
                            },
                          },
                        ],
                      },
                    ]}
                    role="application"
                    ariaLabel="Nivo bar chart demo"
                    barAriaLabel={(e) => `${e.id}: ${e.formattedValue} in country: ${e.indexValue}`}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="line" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Line Chart</CardTitle>
                <CardDescription>Interactive line chart with Nivo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[500px]">
                  <ResponsiveLine
                    data={lineData}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: 'point' }}
                    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
                    yFormat=" >-.2f"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: 'Month',
                      legendOffset: 36,
                      legendPosition: 'middle',
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: 'Value',
                      legendOffset: -40,
                      legendPosition: 'middle',
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
                              itemOpacity: 1,
                            },
                          },
                        ],
                      },
                    ]}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="pie" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Pie Chart</CardTitle>
                <CardDescription>Interactive pie chart with Nivo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[500px]">
                  <ResponsivePie
                    data={pieData}
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
                    defs={[
                      {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true,
                      },
                      {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10,
                      },
                    ]}
                    fill={[
                      { match: { id: 'ruby' }, id: 'dots' },
                      { match: { id: 'c' }, id: 'dots' },
                      { match: { id: 'go' }, id: 'dots' },
                      { match: { id: 'python' }, id: 'dots' },
                      { match: { id: 'scala' }, id: 'lines' },
                      { match: { id: 'lisp' }, id: 'lines' },
                      { match: { id: 'elixir' }, id: 'lines' },
                      { match: { id: 'javascript' }, id: 'lines' },
                    ]}
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
                              itemTextColor: '#000',
                            },
                          },
                        ],
                      },
                    ]}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="sankey" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Sankey Diagram</CardTitle>
                <CardDescription>Interactive flow diagram with Nivo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[500px]">
                  <ResponsiveSankey
                    data={sankeyData}
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
                    labelOrientation="vertical"
                    labelPadding={16}
                    labelTextColor={{ from: 'color', modifiers: [['darker', 1]] }}
                    legends={[
                      {
                        anchor: 'bottom-right',
                        direction: 'column',
                        translateX: 130,
                        itemWidth: 100,
                        itemHeight: 14,
                        itemDirection: 'right-to-left',
                        itemsSpacing: 2,
                        itemTextColor: '#999',
                        symbolSize: 14,
                        effects: [
                          {
                            on: 'hover',
                            style: {
                              itemTextColor: '#000',
                            },
                          },
                        ],
                      },
                    ]}
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