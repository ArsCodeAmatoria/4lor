"use client"

import { ResponsiveBar } from '@nivo/bar'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const comparisonData = [
  {
    domain: "Education",
    "Institutional Control": 0.92,
    "Social Justice": 0.85,
    "Identity Politics": 0.78,
    info: "Education systems show highest correlation with institutional control mechanisms"
  },
  {
    domain: "Media",
    "Institutional Control": 0.88,
    "Social Justice": 0.90,
    "Identity Politics": 0.85,
    info: "Media narratives strongly correlate with social justice frameworks"
  },
  {
    domain: "Corporate",
    "Institutional Control": 0.85,
    "Social Justice": 0.82,
    "Identity Politics": 0.90,
    info: "Corporate sector shows strongest correlation with identity politics implementation"
  },
  {
    domain: "Government",
    "Institutional Control": 0.95,
    "Social Justice": 0.88,
    "Identity Politics": 0.82,
    info: "Government institutions show highest overall correlation with control mechanisms"
  },
  {
    domain: "Finance",
    "Institutional Control": 0.87,
    "Social Justice": 0.75,
    "Identity Politics": 0.80,
    info: "Financial sector shows balanced correlation across all dimensions"
  }
]

export function CorrelationComparison() {
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
      <ResponsiveBar
        data={comparisonData}
        keys={[
          'Institutional Control',
          'Social Justice',
          'Identity Politics'
        ]}
        indexBy="domain"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear', min: 0.5, max: 1 }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 1.6]]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Domain',
          legendPosition: 'middle',
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Correlation Strength',
          legendPosition: 'middle',
          legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [['darker', 1.6]]
        }}
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
        role="application"
        ariaLabel="Correlation comparison across domains"
        barAriaLabel={e => e.id + ": " + e.formattedValue + " in domain: " + e.indexValue}
        tooltip={({ id, value, indexValue }) => (
          <div className="bg-white px-3 py-2 shadow rounded border border-gray-100">
            <strong>{id}</strong> in {indexValue}: {value.toFixed(2)}
            <div className="text-xs text-muted-foreground mt-1">
              {comparisonData.find(d => d.domain === indexValue)?.info}
            </div>
          </div>
        )}
      />
    </motion.div>
  )
} 