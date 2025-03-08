"use client"

import { ResponsiveLine } from '@nivo/line'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const trendsData = [
  {
    id: "Institutional Control",
    data: [
      { x: 2019, y: 0.75 },
      { x: 2020, y: 0.82 },
      { x: 2021, y: 0.88 },
      { x: 2022, y: 0.92 },
      { x: 2023, y: 0.95 }
    ]
  },
  {
    id: "Social Justice Integration",
    data: [
      { x: 2019, y: 0.70 },
      { x: 2020, y: 0.78 },
      { x: 2021, y: 0.82 },
      { x: 2022, y: 0.85 },
      { x: 2023, y: 0.88 }
    ]
  },
  {
    id: "Identity Politics",
    data: [
      { x: 2019, y: 0.65 },
      { x: 2020, y: 0.72 },
      { x: 2021, y: 0.78 },
      { x: 2022, y: 0.82 },
      { x: 2023, y: 0.85 }
    ]
  }
]

export function CorrelationTrends() {
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
      <ResponsiveLine
        data={trendsData}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 0.5,
          max: 1,
        }}
        yFormat=">-.2f"
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
          legend: 'Correlation Strength',
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
        theme={{
          axis: {
            ticks: {
              text: {
                fontSize: 11,
                fill: '#333333',
              }
            },
            legend: {
              text: {
                fontSize: 12,
                fill: '#333333',
              }
            }
          },
          grid: {
            line: {
              stroke: '#dddddd',
              strokeWidth: 1
            }
          },
          legends: {
            text: {
              fontSize: 11,
              fill: '#333333',
            }
          }
        }}
      />
    </motion.div>
  )
} 