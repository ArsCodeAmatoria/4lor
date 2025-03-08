"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveLine } from "@nivo/line"
import { ResponsiveBar } from "@nivo/bar"

const trendData = [
  {
    id: "Institutional Control",
    data: [
      { x: 2019, y: 45 },
      { x: 2020, y: 58 },
      { x: 2021, y: 67 },
      { x: 2022, y: 72 },
      { x: 2023, y: 76 }
    ]
  },
  {
    id: "Policy Alignment",
    data: [
      { x: 2019, y: 52 },
      { x: 2020, y: 64 },
      { x: 2021, y: 75 },
      { x: 2022, y: 82 },
      { x: 2023, y: 89 }
    ]
  },
  {
    id: "Democratic Decline",
    data: [
      { x: 2019, y: 38 },
      { x: 2020, y: 48 },
      { x: 2021, y: 56 },
      { x: 2022, y: 62 },
      { x: 2023, y: 67 }
    ]
  }
]

const impactData = [
  {
    sector: "Government",
    "Ideological Alignment": 78,
    "Policy Implementation": 82,
    "Institutional Control": 85
  },
  {
    sector: "Education",
    "Ideological Alignment": 84,
    "Policy Implementation": 76,
    "Institutional Control": 79
  },
  {
    sector: "Media",
    "Ideological Alignment": 81,
    "Policy Implementation": 85,
    "Institutional Control": 83
  },
  {
    sector: "Corporate",
    "Ideological Alignment": 72,
    "Policy Implementation": 88,
    "Institutional Control": 76
  }
]

export function CorruptionCharts() {
  return (
    <div className="grid gap-6 md:grid-cols-2 mb-12">
      <Card className="bg-zinc-800 border-none text-white">
        <CardHeader>
          <CardTitle className="text-xl">Corruption Trend Analysis (2019-2023)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveLine
              data={trendData}
              margin={{ top: 20, right: 110, bottom: 50, left: 60 }}
              xScale={{ type: "point" }}
              yScale={{ type: "linear", min: 0, max: 100 }}
              curve="monotoneX"
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                format: d => `${d}`
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                format: d => `${d}%`
              }}
              theme={{
                text: {
                  fill: "#a1a1aa"
                },
                axis: {
                  domain: {
                    line: {
                      stroke: "#525252"
                    }
                  },
                  ticks: {
                    text: {
                      fill: "#a1a1aa"
                    }
                  }
                },
                grid: {
                  line: {
                    stroke: "#525252",
                    strokeWidth: 1,
                    strokeDasharray: "4 4"
                  }
                },
                legends: {
                  text: {
                    fill: "#a1a1aa"
                  }
                }
              }}
              enablePoints={true}
              pointSize={8}
              pointColor="#ef4444"
              pointBorderWidth={2}
              pointBorderColor="#ef4444"
              enableArea={true}
              areaOpacity={0.1}
              colors={["#ef4444", "#f97316", "#eab308"]}
              lineWidth={3}
              enableGridX={false}
              enableGridY={true}
              legends={[
                {
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: "left-to-right",
                  itemWidth: 100,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: "circle",
                  symbolBorderColor: "rgba(0, 0, 0, .5)",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemBackground: "rgba(0, 0, 0, .03)",
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

      <Card className="bg-zinc-800 border-none text-white">
        <CardHeader>
          <CardTitle className="text-xl">Sectoral Impact Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveBar
              data={impactData}
              keys={["Ideological Alignment", "Policy Implementation", "Institutional Control"]}
              indexBy="sector"
              margin={{ top: 20, right: 110, bottom: 50, left: 60 }}
              padding={0.3}
              valueScale={{ type: "linear" }}
              indexScale={{ type: "band", round: true }}
              colors={["#ef4444", "#f97316", "#eab308"]}
              borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                format: d => `${d}%`
              }}
              theme={{
                text: {
                  fill: "#a1a1aa"
                },
                axis: {
                  domain: {
                    line: {
                      stroke: "#525252"
                    }
                  },
                  ticks: {
                    text: {
                      fill: "#a1a1aa"
                    }
                  }
                },
                grid: {
                  line: {
                    stroke: "#525252",
                    strokeWidth: 1,
                    strokeDasharray: "4 4"
                  }
                },
                legends: {
                  text: {
                    fill: "#a1a1aa"
                  }
                }
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor={{
                from: "color",
                modifiers: [["darker", 1.6]]
              }}
              legends={[
                {
                  dataFrom: "keys",
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 120,
                  translateY: 0,
                  itemsSpacing: 2,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemDirection: "left-to-right",
                  itemOpacity: 0.85,
                  symbolSize: 12,
                  effects: [
                    {
                      on: "hover",
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
    </div>
  )
} 