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

// Sample data for the analysis page
const sampleData = [
  { id: 1, region: "North America", category: "Electronics", sales: 45600, profit: 15800, year: 2023, quarter: "Q1" },
  { id: 2, region: "Europe", category: "Clothing", sales: 32400, profit: 9700, year: 2023, quarter: "Q1" },
  { id: 3, region: "Asia", category: "Home Goods", sales: 28900, profit: 7200, year: 2023, quarter: "Q1" },
  { id: 4, region: "South America", category: "Electronics", sales: 18700, profit: 5600, year: 2023, quarter: "Q1" },
  { id: 5, region: "Africa", category: "Food", sales: 12500, profit: 3100, year: 2023, quarter: "Q1" },
  { id: 6, region: "North America", category: "Clothing", sales: 38900, profit: 11700, year: 2023, quarter: "Q2" },
  { id: 7, region: "Europe", category: "Electronics", sales: 41200, profit: 14300, year: 2023, quarter: "Q2" },
  { id: 8, region: "Asia", category: "Food", sales: 36700, profit: 9200, year: 2023, quarter: "Q2" },
  { id: 9, region: "South America", category: "Home Goods", sales: 14500, profit: 3600, year: 2023, quarter: "Q2" },
  { id: 10, region: "Africa", category: "Electronics", sales: 9800, profit: 2400, year: 2023, quarter: "Q2" },
  { id: 11, region: "North America", category: "Home Goods", sales: 52300, profit: 18100, year: 2023, quarter: "Q3" },
  { id: 12, region: "Europe", category: "Food", sales: 29800, profit: 8900, year: 2023, quarter: "Q3" },
  { id: 13, region: "Asia", category: "Electronics", sales: 47600, profit: 16500, year: 2023, quarter: "Q3" },
  { id: 14, region: "South America", category: "Clothing", sales: 21300, profit: 6400, year: 2023, quarter: "Q3" },
  { id: 15, region: "Africa", category: "Home Goods", sales: 11200, profit: 2800, year: 2023, quarter: "Q3" },
];

// Sample insights
const insights = [
  {
    title: "Regional Performance",
    description: "North America consistently shows the highest sales and profit margins across all quarters.",
    recommendation: "Consider expanding product offerings in the North American market to capitalize on strong performance."
  },
  {
    title: "Category Analysis",
    description: "Electronics has the highest average profit margin at 34.7%, followed by Home Goods at 25.1%.",
    recommendation: "Allocate more marketing resources to Electronics to maximize profitability."
  },
  {
    title: "Quarterly Trends",
    description: "Q3 shows a 15% increase in overall sales compared to Q1, indicating positive growth.",
    recommendation: "Analyze Q3 strategies to identify successful approaches that can be applied to other quarters."
  },
  {
    title: "Underperforming Regions",
    description: "Africa shows the lowest sales figures but has been steadily growing each quarter.",
    recommendation: "Develop targeted strategies for the African market to accelerate growth in this emerging region."
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
  const totalSales = sampleData.reduce((sum, item) => sum + item.sales, 0);
  const totalProfit = sampleData.reduce((sum, item) => sum + item.profit, 0);
  const avgProfitMargin = (totalProfit / totalSales * 100).toFixed(1);
  
  // Sales by region
  const salesByRegion = sampleData.reduce((acc, item) => {
    acc[item.region] = (acc[item.region] || 0) + item.sales;
    return acc;
  }, {} as Record<string, number>);
  
  // Sales by category
  const salesByCategory = sampleData.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + item.sales;
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
                <CardTitle>Total Sales</CardTitle>
                <CardDescription>Across all regions and categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">${totalSales.toLocaleString()}</div>
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
                <CardTitle>Total Profit</CardTitle>
                <CardDescription>Across all regions and categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">${totalProfit.toLocaleString()}</div>
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
                <CardTitle>Avg. Profit Margin</CardTitle>
                <CardDescription>Percentage of sales as profit</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{avgProfitMargin}%</div>
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
                    <CardTitle>Sales Data</CardTitle>
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
                          onClick={() => handleSort("region")}
                        >
                          Region {sortColumn === "region" && (sortDirection === "asc" ? "↑" : "↓")}
                        </TableHead>
                        <TableHead 
                          className="cursor-pointer hover:bg-muted/50"
                          onClick={() => handleSort("category")}
                        >
                          Category {sortColumn === "category" && (sortDirection === "asc" ? "↑" : "↓")}
                        </TableHead>
                        <TableHead 
                          className="cursor-pointer hover:bg-muted/50 text-right"
                          onClick={() => handleSort("sales")}
                        >
                          Sales {sortColumn === "sales" && (sortDirection === "asc" ? "↑" : "↓")}
                        </TableHead>
                        <TableHead 
                          className="cursor-pointer hover:bg-muted/50 text-right"
                          onClick={() => handleSort("profit")}
                        >
                          Profit {sortColumn === "profit" && (sortDirection === "asc" ? "↑" : "↓")}
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
                          <TableCell>{item.region}</TableCell>
                          <TableCell>{item.category}</TableCell>
                          <TableCell className="text-right">${item.sales.toLocaleString()}</TableCell>
                          <TableCell className="text-right">${item.profit.toLocaleString()}</TableCell>
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
                    <h3 className="text-lg font-medium mb-4">Sales by Region</h3>
                    <div className="space-y-4">
                      {Object.entries(salesByRegion).map(([region, sales]) => (
                        <div key={region} className="flex justify-between items-center">
                          <span>{region}</span>
                          <span className="font-medium">${sales.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Sales by Category</h3>
                    <div className="space-y-4">
                      {Object.entries(salesByCategory).map(([category, sales]) => (
                        <div key={category} className="flex justify-between items-center">
                          <span>{category}</span>
                          <span className="font-medium">${sales.toLocaleString()}</span>
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
                          <TableHead className="text-right">Total Sales</TableHead>
                          <TableHead className="text-right">Total Profit</TableHead>
                          <TableHead className="text-right">Profit Margin</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {["Q1", "Q2", "Q3"].map((quarter) => {
                          const quarterData = sampleData.filter(item => item.quarter === quarter);
                          const qtSales = quarterData.reduce((sum, item) => sum + item.sales, 0);
                          const qtProfit = quarterData.reduce((sum, item) => sum + item.profit, 0);
                          const qtMargin = (qtProfit / qtSales * 100).toFixed(1);
                          
                          return (
                            <TableRow key={quarter}>
                              <TableCell>{quarter}</TableCell>
                              <TableCell className="text-right">${qtSales.toLocaleString()}</TableCell>
                              <TableCell className="text-right">${qtProfit.toLocaleString()}</TableCell>
                              <TableCell className="text-right">{qtMargin}%</TableCell>
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
                    <CardTitle>Top Performing Region</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">North America</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    $136,800 in sales across all quarters
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-2">
                    <PieChart className="h-5 w-5 text-primary" />
                    <CardTitle>Top Category</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Electronics</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    $153,100 in sales with 34.7% profit margin
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-2">
                    <LineChart className="h-5 w-5 text-primary" />
                    <CardTitle>Best Quarter</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Q3 2023</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    $162,200 in sales with 32.2% profit margin
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