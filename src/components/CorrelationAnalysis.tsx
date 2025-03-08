"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CorrelationScatter } from "./CorrelationScatter"
import { CorrelationTrends } from "./CorrelationTrends"
import { CorrelationComparison } from "./CorrelationComparison"
import { BarChart, LineChart, Network } from "lucide-react"

const insights = [
  {
    title: "Conceptual vs Implementation",
    description: "Strong positive correlation between conceptual alignment and implementation success, particularly in institutional control mechanisms.",
    implications: "Indicates that theoretical frameworks are being effectively translated into practical applications."
  },
  {
    title: "Initiative Clustering",
    description: "Great Reset and ESG Framework initiatives show distinct clustering patterns, suggesting coordinated implementation strategies.",
    implications: "Reveals systematic approach to implementing related concepts across different domains."
  },
  {
    title: "High-Impact Areas",
    description: "Institutional Control and Social Justice concepts consistently show high correlations in both conceptual alignment and practical implementation.",
    implications: "Identifies key leverage points being used to effect systemic changes."
  }
]

const trendInsights = [
  {
    title: "Accelerating Integration",
    description: "All correlation metrics show consistent upward trends from 2019 to 2023, with institutional control showing the steepest increase.",
    implications: "Indicates an accelerating implementation of cultural transformation strategies."
  },
  {
    title: "Post-2020 Surge",
    description: "Significant acceleration in correlation strengths observed after 2020, particularly in institutional control and social justice integration.",
    implications: "Suggests opportunistic exploitation of global events to advance agenda implementation."
  },
  {
    title: "Convergence Pattern",
    description: "Different aspects of influence show increasing convergence over time, suggesting coordinated implementation across multiple domains.",
    implications: "Points to systematic and coordinated approach to cultural and institutional transformation."
  }
]

const comparisonInsights = [
  {
    title: "Domain Variations",
    description: "Government and education sectors show highest correlation with institutional control, while corporate sector correlates strongly with identity politics.",
    implications: "Reveals targeted approaches for different institutional domains."
  },
  {
    title: "Cross-Domain Patterns",
    description: "Consistent high correlations across all domains suggest a comprehensive strategy for societal transformation.",
    implications: "Indicates a coordinated multi-domain approach to implementing cultural change."
  },
  {
    title: "Strategic Focus Areas",
    description: "Media shows balanced high correlations across all metrics, suggesting its role as a key vector for agenda promotion.",
    implications: "Highlights the central role of media in facilitating cultural transformation."
  }
]

export function CorrelationAnalysis() {
  return (
    <Tabs defaultValue="scatter" className="w-full">
      <div className="flex items-center justify-between mb-6">
        <TabsList className="grid grid-cols-3 w-[400px]">
          <TabsTrigger value="scatter" className="flex items-center gap-2">
            <Network className="h-4 w-4" />
            Scatter
          </TabsTrigger>
          <TabsTrigger value="trends" className="flex items-center gap-2">
            <LineChart className="h-4 w-4" />
            Trends
          </TabsTrigger>
          <TabsTrigger value="comparison" className="flex items-center gap-2">
            <BarChart className="h-4 w-4" />
            Comparison
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="scatter" className="mt-0">
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Correlation Scatter Plot</CardTitle>
              <CardDescription>
                Visualizing the relationship between conceptual alignment and implementation success
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CorrelationScatter />
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-3">
            {insights.map((insight, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{insight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {insight.description}
                  </p>
                  <p className="text-sm font-medium text-highlight">
                    Implication: {insight.implications}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Methodology & Interpretation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Data Collection</h4>
                <p className="text-sm text-muted-foreground">
                  Correlation values are derived from comprehensive analysis of policy documents, public statements, 
                  implementation patterns, and institutional changes across multiple domains.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Correlation Strength</h4>
                <p className="text-sm text-muted-foreground">
                  Values range from 0 to 1, where:
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside mt-2 space-y-1">
                  <li>0.90-1.00: Very strong correlation</li>
                  <li>0.70-0.89: Strong correlation</li>
                  <li>0.50-0.69: Moderate correlation</li>
                  <li>Below 0.50: Weak correlation</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="trends" className="mt-0">
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Correlation Trends Over Time</CardTitle>
              <CardDescription>
                Tracking the evolution of correlations from 2019 to 2023
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CorrelationTrends />
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-3">
            {trendInsights.map((insight, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{insight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {insight.description}
                  </p>
                  <p className="text-sm font-medium text-highlight">
                    Implication: {insight.implications}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="comparison" className="mt-0">
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Comparative Analysis</CardTitle>
              <CardDescription>
                Comparing correlation patterns across different institutional domains
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CorrelationComparison />
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-3">
            {comparisonInsights.map((insight, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{insight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {insight.description}
                  </p>
                  <p className="text-sm font-medium text-highlight">
                    Implication: {insight.implications}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
} 