"use client"

import { ResponsiveScatterPlot, ScatterPlotTooltipProps } from '@nivo/scatterplot'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface DataPoint {
  x: number
  y: number
  concept: string
  influence: string
}

interface ScatterData {
  id: string
  data: DataPoint[]
}

const scatterData: ScatterData[] = [
  {
    id: "Stakeholder Capitalism",
    data: [
      { x: 0.85, y: 0.90, concept: "Identity Politics", influence: "Corporate Policy" },
      { x: 0.78, y: 0.85, concept: "Critical Theory", influence: "Management Theory" },
      { x: 0.82, y: 0.88, concept: "Social Justice", influence: "ESG Metrics" },
      { x: 0.90, y: 0.92, concept: "Institutional Control", influence: "Governance" },
      { x: 0.75, y: 0.80, concept: "Cultural Transformation", influence: "Corporate Culture" }
    ]
  },
  {
    id: "Great Reset",
    data: [
      { x: 0.72, y: 0.88, concept: "Identity Politics", influence: "Policy Making" },
      { x: 0.68, y: 0.82, concept: "Critical Theory", influence: "Economic Theory" },
      { x: 0.88, y: 0.92, concept: "Social Justice", influence: "Global Goals" },
      { x: 0.92, y: 0.95, concept: "Institutional Control", influence: "Global Governance" },
      { x: 0.86, y: 0.89, concept: "Cultural Transformation", influence: "Social Change" }
    ]
  },
  {
    id: "ESG Framework",
    data: [
      { x: 0.65, y: 0.75, concept: "Identity Politics", influence: "Corporate Metrics" },
      { x: 0.70, y: 0.78, concept: "Critical Theory", influence: "Assessment Criteria" },
      { x: 0.85, y: 0.88, concept: "Social Justice", influence: "Investment Criteria" },
      { x: 0.88, y: 0.92, concept: "Institutional Control", influence: "Market Control" },
      { x: 0.78, y: 0.85, concept: "Cultural Transformation", influence: "Corporate Behavior" }
    ]
  }
]

export function CorrelationScatter() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="w-full h-[500px] flex items-center justify-center">
        <div className="text-muted-foreground">Loading visualization...</div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full h-[500px]"
    >
      <ResponsiveScatterPlot
        data={scatterData}
        margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
        xScale={{ type: 'linear', min: 0.5, max: 1 }}
        yScale={{ type: 'linear', min: 0.5, max: 1 }}
        blendMode="multiply"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Conceptual Correlation',
          legendPosition: 'middle',
          legendOffset: 46
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Implementation Correlation',
          legendPosition: 'middle',
          legendOffset: -60
        }}
        nodeSize={12}
        colors={{ scheme: 'set2' }}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 130,
            translateY: 0,
            itemWidth: 100,
            itemHeight: 12,
            itemsSpacing: 5,
            itemDirection: 'left-to-right',
            symbolSize: 12,
            symbolShape: 'circle',
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
        tooltip={(props: ScatterPlotTooltipProps<DataPoint>) => (
          <div className="bg-white px-3 py-2 shadow rounded border border-gray-100">
            <strong>{props.node.data.concept}</strong>
            <div className="text-sm text-muted-foreground">
              Initiative: {String(props.node.serieId)}<br />
              Influence: {props.node.data.influence}<br />
              Conceptual: {props.node.data.x.toFixed(2)}<br />
              Implementation: {props.node.data.y.toFixed(2)}
            </div>
          </div>
        )}
      />
    </motion.div>
  )
} 