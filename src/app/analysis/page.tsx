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
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  LineChart, 
  PieChart, 
  Download, 
  Filter, 
  SlidersHorizontal, 
  Search 
} from "lucide-react";
import dynamic from 'next/dynamic';

// Dynamically import the PivotTable component with no SSR
const PivotTable = dynamic(() => import('@/components/PivotTable'), { ssr: false });

// Sample data for analyzing Cultural Marxism and CRT influence
const sampleData = [
  { id: 1, institution: "Universities", category: "Education", crtPrograms: 87, marxistFaculty: 65, year: 2023, quarter: "Q1" },
  { id: 2, institution: "K-12 Schools", category: "Education", crtPrograms: 45, marxistFaculty: 30, year: 2023, quarter: "Q1" },
  { id: 3, institution: "Media Outlets", category: "Media", crtPrograms: 75, marxistFaculty: 70, year: 2023, quarter: "Q1" },
  { id: 4, institution: "Tech Companies", category: "Corporate", crtPrograms: 65, marxistFaculty: 55, year: 2023, quarter: "Q1" },
  { id: 5, institution: "Government", category: "Public", crtPrograms: 40, marxistFaculty: 35, year: 2023, quarter: "Q1" },
  { id: 6, institution: "Universities", category: "Education", crtPrograms: 90, marxistFaculty: 70, year: 2023, quarter: "Q2" },
  { id: 7, institution: "K-12 Schools", category: "Education", crtPrograms: 50, marxistFaculty: 35, year: 2023, quarter: "Q2" },
  { id: 8, institution: "Media Outlets", category: "Media", crtPrograms: 80, marxistFaculty: 75, year: 2023, quarter: "Q2" },
  { id: 9, institution: "Tech Companies", category: "Corporate", crtPrograms: 70, marxistFaculty: 60, year: 2023, quarter: "Q2" },
  { id: 10, institution: "Government", category: "Public", crtPrograms: 45, marxistFaculty: 40, year: 2023, quarter: "Q2" },
  { id: 11, institution: "Universities", category: "Education", crtPrograms: 92, marxistFaculty: 75, year: 2023, quarter: "Q3" },
  { id: 12, institution: "K-12 Schools", category: "Education", crtPrograms: 55, marxistFaculty: 40, year: 2023, quarter: "Q3" },
  { id: 13, institution: "Media Outlets", category: "Media", crtPrograms: 85, marxistFaculty: 80, year: 2023, quarter: "Q3" },
  { id: 14, institution: "Tech Companies", category: "Corporate", crtPrograms: 75, marxistFaculty: 65, year: 2023, quarter: "Q3" },
  { id: 15, institution: "Government", category: "Public", crtPrograms: 50, marxistFaculty: 45, year: 2023, quarter: "Q3" },
];

// Sample insights
const insights = [
  {
    title: "Educational Institutions",
    description: "Universities show the highest adoption rate of CRT programs at 92%, with a significant increase in Marxist faculty representation.",
    recommendation: "Focus resistance efforts on academic freedom initiatives and alternative educational programs."
  },
  {
    title: "Media Analysis",
    description: "Media outlets demonstrate 85% alignment with Critical Theory narratives, particularly in news and entertainment.",
    recommendation: "Support and develop alternative media platforms focused on objective reporting and traditional values."
  },
  {
    title: "Corporate Trends",
    description: "Tech companies show a 75% implementation rate of CRT-based policies, primarily through DEI initiatives.",
    recommendation: "Encourage corporate accountability and support companies that prioritize merit-based systems."
  },
  {
    title: "Public Sector",
    description: "Government institutions show lower but growing adoption rates of Critical Theory, currently at 50%.",
    recommendation: "Focus on local and state-level resistance to federal Critical Theory mandates."
  },
];

export default function Analysis() {
  const [activeTab, setActiveTab] = useState("data");
  const [sortColumn, setSortColumn] = useState("id");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  // Sort data based on current sort column and direction
  const sortedData = [...sampleData].sort((a, b) => {
    const aValue = a[sortColumn as keyof typeof a];
    const bValue = b[sortColumn as keyof typeof b];
    
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
    } else {
      const aString = String(aValue);
      const bString = String(bValue);
      return sortDirection === "asc" 
        ? aString.localeCompare(bString) 
        : bString.localeCompare(aString);
    }
  });

  // Handle column sort
  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  // Calculate summary statistics
  const totalCRTPrograms = sampleData.reduce((sum, item) => sum + item.crtPrograms, 0) / sampleData.length;
  const totalAlignment = sampleData.reduce((sum, item) => sum + item.marxistFaculty, 0) / sampleData.length;
  const avgChange = ((totalCRTPrograms / (sampleData.length / 3)) * 100).toFixed(1);

  // Influence by institution
  const institutionData = sampleData.reduce((acc, item) => {
    acc[item.institution] = (acc[item.institution] || 0) + item.crtPrograms;
    return acc;
  }, {} as Record<string, number>);

  // Influence by category
  const categoryData = sampleData.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + item.crtPrograms;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="container py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">Data Analysis</h1>
        
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Total CRT Programs</CardTitle>
                <CardDescription>Across all institutions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{totalCRTPrograms.toFixed(1)}%</div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Total Critical Theory Alignment</CardTitle>
                <CardDescription>Across all institutions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{totalAlignment.toFixed(1)}%</div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Avg. Change</CardTitle>
                <CardDescription>Percentage of CRT programs and alignment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{avgChange}%</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <Tabs defaultValue="data" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="data">Raw Data</TabsTrigger>
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="pivot">Pivot Table</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>
          
          <TabsContent value="data" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Institutional Analysis</CardTitle>
                    <CardDescription>Click on column headers to sort</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead 
                          className="cursor-pointer hover:bg-muted/50"
                          onClick={() => handleSort("id")}
                        >
                          ID {sortColumn === "id" && (sortDirection === "asc" ? "↑" : "↓")}
                        </TableHead>
                        <TableHead 
                          className="cursor-pointer hover:bg-muted/50"
                          onClick={() => handleSort("institution")}
                        >
                          Institution {sortColumn === "institution" && (sortDirection === "asc" ? "↑" : "↓")}
                        </TableHead>
                        <TableHead 
                          className="cursor-pointer hover:bg-muted/50"
                          onClick={() => handleSort("category")}
                        >
                          Category {sortColumn === "category" && (sortDirection === "asc" ? "↑" : "↓")}
                        </TableHead>
                        <TableHead 
                          className="cursor-pointer hover:bg-muted/50 text-right"
                          onClick={() => handleSort("crtPrograms")}
                        >
                          CRT Programs % {sortColumn === "crtPrograms" && (sortDirection === "asc" ? "↑" : "↓")}
                        </TableHead>
                        <TableHead 
                          className="cursor-pointer hover:bg-muted/50 text-right"
                          onClick={() => handleSort("marxistFaculty")}
                        >
                          Critical Theory Alignment % {sortColumn === "marxistFaculty" && (sortDirection === "asc" ? "↑" : "↓")}
                        </TableHead>
                        <TableHead 
                          className="cursor-pointer hover:bg-muted/50"
                          onClick={() => handleSort("year")}
                        >
                          Year {sortColumn === "year" && (sortDirection === "asc" ? "↑" : "↓")}
                        </TableHead>
                        <TableHead 
                          className="cursor-pointer hover:bg-muted/50"
                          onClick={() => handleSort("quarter")}
                        >
                          Quarter {sortColumn === "quarter" && (sortDirection === "asc" ? "↑" : "↓")}
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sortedData.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>{item.id}</TableCell>
                          <TableCell>{item.institution}</TableCell>
                          <TableCell>{item.category}</TableCell>
                          <TableCell className="text-right">{item.crtPrograms}%</TableCell>
                          <TableCell className="text-right">{item.marxistFaculty}%</TableCell>
                          <TableCell>{item.year}</TableCell>
                          <TableCell>{item.quarter}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="summary" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Data Summary</CardTitle>
                <CardDescription>Key metrics and aggregations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Influence by Institution Type</h3>
                    <div className="space-y-4">
                      {Object.entries(institutionData).map(([institution, percentage]) => (
                        <div key={institution} className="flex justify-between items-center">
                          <span>{institution}</span>
                          <span className="font-medium">{(percentage / 3).toFixed(1)}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Influence by Category</h3>
                    <div className="space-y-4">
                      {Object.entries(categoryData).map(([category, percentage]) => (
                        <div key={category} className="flex justify-between items-center">
                          <span>{category}</span>
                          <span className="font-medium">{(percentage / 3).toFixed(1)}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">Quarterly Performance</h3>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Quarter</TableHead>
                          <TableHead className="text-right">Avg CRT Programs %</TableHead>
                          <TableHead className="text-right">Avg Critical Theory Alignment %</TableHead>
                          <TableHead className="text-right">Change</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {["Q1", "Q2", "Q3"].map((quarter) => {
                          const quarterData = sampleData.filter(item => item.quarter === quarter);
                          const qtCRT = quarterData.reduce((sum, item) => sum + item.crtPrograms, 0) / quarterData.length;
                          const qtAlignment = quarterData.reduce((sum, item) => sum + item.marxistFaculty, 0) / quarterData.length;
                          const qtChange = ((qtCRT / quarterData.length) * 100).toFixed(1);
                          
                          return (
                            <TableRow key={quarter}>
                              <TableCell>{quarter}</TableCell>
                              <TableCell className="text-right">{qtCRT.toFixed(1)}%</TableCell>
                              <TableCell className="text-right">{qtAlignment.toFixed(1)}%</TableCell>
                              <TableCell className="text-right">{qtChange}%</TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="pivot" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Interactive Pivot Table</CardTitle>
                <CardDescription>Analyze data with WebDataRocks pivot table</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[600px]">
                  <PivotTable data={sampleData} height="550px" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="insights" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Key Insights</CardTitle>
                <CardDescription>Analysis and recommendations based on the data</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {insights.map((insight, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{insight.title}</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground">Observation</h4>
                            <p>{insight.description}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground">Recommendation</h4>
                            <p>{insight.recommendation}</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
            
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <CardTitle>Most Affected Institution</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Universities</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    92% CRT program adoption rate
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-2">
                    <PieChart className="h-5 w-5 text-primary" />
                    <CardTitle>Highest Impact Category</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Education</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    85% average Critical Theory alignment
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-2">
                    <LineChart className="h-5 w-5 text-primary" />
                    <CardTitle>Fastest Growing Sector</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Tech Companies</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    +15% increase in CRT adoption
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
} 