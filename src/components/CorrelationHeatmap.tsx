"use client"

import { ResponsiveHeatMap } from '@nivo/heatmap'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const correlationData = [
  {
    id: "Stakeholder Capitalism",
    data: [
      { x: "Identity Politics", y: 0.85 },
      { x: "Critical Theory", y: 0.78 },
      { x: "Social Justice", y: 0.82 },
      { x: "Institutional Control", y: 0.90 },
      { x: "Cultural Transformation", y: 0.75 }
    ]
  },
  {
    id: "Great Reset",
    data: [
      { x: "Identity Politics", y: 0.72 },
      { x: "Critical Theory", y: 0.68 },
      { x: "Social Justice", y: 0.88 },
      { x: "Institutional Control", y: 0.92 },
      { x: "Cultural Transformation", y: 0.86 }
    ]
  },
  {
    id: "ESG Framework",
    data: [
      { x: "Identity Politics", y: 0.65 },
      { x: "Critical Theory", y: 0.70 },
      { x: "Social Justice", y: 0.85 },
      { x: "Institutional Control", y: 0.88 },
      { x: "Cultural Transformation", y: 0.78 }
    ]
  },
  {
    id: "Global Governance",
    data: [
      { x: "Identity Politics", y: 0.58 },
      { x: "Critical Theory", y: 0.72 },
      { x: "Social Justice", y: 0.80 },
      { x: "Institutional Control", y: 0.95 },
      { x: "Cultural Transformation", y: 0.82 }
    ]
  },
  {
    id: "Digital Identity",
    data: [
      { x: "Identity Politics", y: 0.75 },
      { x: "Critical Theory", y: 0.62 },
      { x: "Social Justice", y: 0.70 },
      { x: "Institutional Control", y: 0.88 },
      { x: "Cultural Transformation", y: 0.76 }
    ]
  }
]

export function CorrelationHeatmap() {
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
      <ResponsiveHeatMap
        data={correlationData}
        margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
        valueFormat=">-.2f"
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -45,
          legend: 'Cultural Marxism Concepts',
          legendPosition: 'middle',
          legendOffset: -40
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0
        }}
        colors={{
          type: 'sequential',
          scheme: 'oranges'
        }}
        enableLabels={true}
        labelTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        hoverTarget="cell"
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.4]] }}
        label={d => d.value ? d.value.toFixed(2) : ''}
        tooltip={({ cell }) => (
          <div className="bg-white px-3 py-2 shadow rounded border border-gray-100">
            <strong>{cell.data.x}</strong> × <strong>{cell.serieId}</strong>: {cell.value ? cell.value.toFixed(2) : 'N/A'}
          </div>
        )}
      />
    </motion.div>
  )
} 