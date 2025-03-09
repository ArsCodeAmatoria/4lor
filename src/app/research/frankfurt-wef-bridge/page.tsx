"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, BookOpen, Users, Building, Globe, Shield, AlertTriangle, Radio, Flag, Network, Calendar, Lightbulb, GraduationCap, Zap, Database, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import dynamic from 'next/dynamic';

const ResponsiveLine = dynamic(() => import('@nivo/line').then(mod => mod.ResponsiveLine), { ssr: false });
const ResponsiveNetwork = dynamic(() => import('@nivo/network').then(mod => mod.ResponsiveNetwork), { ssr: false });

// Timeline data
const timelineData = [
  {
    id: "Key Events",
    data: [
      { x: "1967", y: 1, eventDescription: "Frankfurt School Peak" },
      { x: "1968", y: 1, eventDescription: "Student Revolutions" },
      { x: "1968", y: 1, eventDescription: "Club of Rome Founded" },
      { x: "1969", y: 1, eventDescription: "Kissinger Meets Schwab" },
      { x: "1970", y: 1, eventDescription: "Early WEF Planning" },
      { x: "1971", y: 1, eventDescription: "WEF Founded" }
    ]
  }
];

// Network data
const networkData = {
  nodes: [
    { id: "Frankfurt", label: "Frankfurt School", group: "source" },
    { id: "Students", label: "Student Movements", group: "bridge" },
    { id: "Globalists", label: "Globalist Organizations", group: "bridge" },
    { id: "WEF", label: "World Economic Forum", group: "target" }
  ],
  links: [
    { source: "Frankfurt", target: "Students", value: 1 },
    { source: "Students", target: "Globalists", value: 1 },
    { source: "Globalists", target: "WEF", value: 1 }
  ]
};

export default function FrankfurtWEFBridgePage() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/research">
            <Button variant="ghost" className="gap-1 pl-0 hover:text-highlight hover:bg-transparent">
              <ArrowLeft className="h-4 w-4" />
              Back to Research
            </Button>
          </Link>
        </div>
        
        <div className="bg-zinc-800 text-white px-6 py-10 rounded-lg mb-10">
          <h1 className="text-4xl font-bold mb-4">The Bridge Between the Frankfurt School and the World Economic Forum</h1>
          <h2 className="text-2xl text-highlight mb-4">From Cultural Marxism to Technocratic Globalism (1967-1971)</h2>
          <p className="text-xl opacity-90">
            How radical leftist ideology merged with corporate power to create modern globalism
          </p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          {/* Executive Summary */}
          <section className="mb-12 bg-highlight/5 p-6 rounded-lg">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 text-highlight border-none">
              <Zap className="h-6 w-6" />
              Executive Summary
            </h2>
            <p className="text-lg mb-4">
              The period between 1967 and 1971 marked a crucial transformation in Western society, 
              where Frankfurt School's Cultural Marxism merged with emerging technocratic globalism. 
              This research examines how radical leftist ideology was incorporated into corporate and 
              institutional frameworks, creating the foundation for modern globalist governance.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/50 p-4 rounded-lg">
                <h3 className="font-bold text-highlight mb-2">Key Period</h3>
                <p className="text-sm">1967-1971: Critical transition from theoretical Marxism to institutional control</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h3 className="font-bold text-highlight mb-2">Major Players</h3>
                <p className="text-sm">Frankfurt School theorists, student revolutionaries, corporate elites</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h3 className="font-bold text-highlight mb-2">Outcome</h3>
                <p className="text-sm">Creation of corporate-friendly version of Cultural Marxism</p>
              </div>
            </div>
          </section>

          {/* Historical Timeline */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
              <Calendar className="h-6 w-6 text-highlight" />
              Historical Timeline
            </h2>
            
            <div className="h-[300px] mt-6 bg-white/50 p-4 rounded-lg">
              <ResponsiveLine
                data={timelineData}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 0, max: 2 }}
                axisTop={null}
                axisRight={null}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                enableSlices="x"
                sliceTooltip={({ slice }: any) => (
                  <div
                    style={{
                      background: 'white',
                      padding: '9px 12px',
                      border: '1px solid #ccc',
                      borderRadius: '4px'
                    }}
                  >
                    <strong>{slice.points[0].data.x}</strong>
                    <br />
                    {(slice.points[0].data as any).eventDescription}
                  </div>
                )}
              />
            </div>
          </section>

          {/* The 1968 Student Movements */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
              <Users className="h-6 w-6 text-highlight" />
              1. The 1968 Student Movements
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-highlight/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-highlight mb-4">
                  <Users className="h-5 w-5" />
                  Key Figures
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Rudi Dutschke - Frankfurt School disciple who coined "The Long March Through the Institutions"</li>
                  <li>Daniel Cohn-Bendit - French-German radical who became a Green Party politician</li>
                  <li>Joschka Fischer - Former terrorist who later became German Foreign Minister</li>
                </ul>
              </div>

              <div className="bg-highlight/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-highlight mb-4">
                  <Globe className="h-5 w-5" />
                  Global Impact
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mass protests across Europe and America</li>
                  <li>University occupations and institutional disruption</li>
                  <li>Media and academic infiltration</li>
                  <li>Formation of new political movements</li>
                </ul>
              </div>
            </div>

            <div className="bg-zinc-800 text-white p-6 rounded-lg mt-6">
              <h4 className="text-xl font-semibold mb-4 text-highlight">Long-Term Strategy</h4>
              <p className="mb-4">
                The student movements of 1968 marked a strategic shift from violent revolution to institutional infiltration. 
                Key figures abandoned street protests for positions in:
              </p>
              <ul className="grid md:grid-cols-3 gap-4">
                <li className="bg-white/10 p-4 rounded-lg">
                  <strong className="text-highlight block mb-2">Academia</strong>
                  <p className="text-sm">Securing teaching positions and research roles</p>
                </li>
                <li className="bg-white/10 p-4 rounded-lg">
                  <strong className="text-highlight block mb-2">Politics</strong>
                  <p className="text-sm">Entering mainstream political parties</p>
                </li>
                <li className="bg-white/10 p-4 rounded-lg">
                  <strong className="text-highlight block mb-2">Media</strong>
                  <p className="text-sm">Taking control of narrative formation</p>
                </li>
              </ul>
            </div>
          </section>

          {/* Rise of Technocratic Globalism */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
              <Building className="h-6 w-6 text-highlight" />
              2. The Rise of Technocratic Globalism
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-highlight/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-highlight mb-4">
                  <Network className="h-5 w-5" />
                  Key Organizations
                </h3>
                <ul className="list-disc pl-6 space-y-4">
                  <li>
                    <strong>The Club of Rome (1968)</strong>
                    <p className="text-sm mt-1">Global think tank promoting centralized solutions to world problems</p>
                  </li>
                  <li>
                    <strong>The Trilateral Commission (1973, planned 1968)</strong>
                    <p className="text-sm mt-1">Coordinating policy between North America, Europe, and Asia</p>
                  </li>
                  <li>
                    <strong>The Bilderberg Group (since 1954)</strong>
                    <p className="text-sm mt-1">Annual meetings shaping global policy direction</p>
                  </li>
                </ul>
              </div>

              <div className="bg-highlight/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-highlight mb-4">
                  <Database className="h-5 w-5" />
                  Implementation Methods
                </h3>
                <ul className="list-disc pl-6 space-y-4">
                  <li>
                    <strong>Policy Coordination</strong>
                    <p className="text-sm mt-1">Synchronizing policy changes across nations</p>
                  </li>
                  <li>
                    <strong>Institutional Integration</strong>
                    <p className="text-sm mt-1">Embedding globalist frameworks in existing institutions</p>
                  </li>
                  <li>
                    <strong>Leadership Development</strong>
                    <p className="text-sm mt-1">Training future leaders in globalist ideology</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cultural Shift Analysis */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
              <Lightbulb className="h-6 w-6 text-highlight" />
              3. Cultural Shift Analysis
            </h2>
            
            <div className="bg-highlight/10 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-highlight mb-4">
                <TrendingUp className="h-5 w-5" />
                Transformation Process
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2">From Traditional Marxism</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Class-based analysis</li>
                    <li>Economic focus</li>
                    <li>Revolutionary approach</li>
                    <li>Worker-centered movement</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">To Cultural Marxism</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Identity-based politics</li>
                    <li>Cultural focus</li>
                    <li>Institutional approach</li>
                    <li>Elite-driven change</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <Card className="bg-white/50">
                <CardHeader>
                  <CardTitle className="text-lg">Academic Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2 text-sm">
                    <li>Critical Theory dominance</li>
                    <li>Identity-based departments</li>
                    <li>Research funding control</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/50">
                <CardHeader>
                  <CardTitle className="text-lg">Corporate Adoption</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2 text-sm">
                    <li>ESG frameworks</li>
                    <li>DEI initiatives</li>
                    <li>Stakeholder capitalism</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/50">
                <CardHeader>
                  <CardTitle className="text-lg">Political Effects</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2 text-sm">
                    <li>Identity politics</li>
                    <li>Global governance</li>
                    <li>Technocratic control</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Modern Implementation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
              <Globe className="h-6 w-6 text-highlight" />
              4. Modern Implementation
            </h2>
            
            <div className="bg-zinc-800 text-white p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold text-highlight mb-4">WEF's Synthesis of Cultural Marxism</h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-bold text-highlight mb-2">Economic Control</h4>
                  <ul className="text-sm space-y-2">
                    <li>• Stakeholder capitalism model</li>
                    <li>• ESG scoring systems</li>
                    <li>• Central bank digital currencies</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-bold text-highlight mb-2">Social Engineering</h4>
                  <ul className="text-sm space-y-2">
                    <li>• Digital ID systems</li>
                    <li>• Social credit frameworks</li>
                    <li>• Behavioral modification</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-bold text-highlight mb-2">Political Control</h4>
                  <ul className="text-sm space-y-2">
                    <li>• Global governance structures</li>
                    <li>• Public-private partnerships</li>
                    <li>• Crisis exploitation</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusions */}
          <section className="mb-12 bg-zinc-800 text-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-zinc-600 pb-2 text-highlight">
              <Shield className="h-6 w-6" />
              Key Conclusions
            </h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start">
                <span className="text-highlight font-bold mr-2 mt-1">✓</span>
                <div>
                  <strong>Ideological Transformation:</strong> Cultural Marxism was adapted into a corporate-friendly format while maintaining its subversive nature
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-highlight font-bold mr-2 mt-1">✓</span>
                <div>
                  <strong>Institutional Capture:</strong> The "Long March Through the Institutions" succeeded through both bottom-up and top-down approaches
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-highlight font-bold mr-2 mt-1">✓</span>
                <div>
                  <strong>Elite Synthesis:</strong> Corporate and leftist ideologies merged to create a new form of controlled socialism
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-highlight font-bold mr-2 mt-1">✓</span>
                <div>
                  <strong>Modern Impact:</strong> WEF's current agenda represents the culmination of this ideological merger
                </div>
              </li>
            </ul>
          </section>

          {/* Related Articles */}
          <div className="border-t pt-6 mt-12">
            <h3 className="text-lg font-semibold mb-2">Related Articles</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <Link href="/research/herbert-marcuse" className="block">
                <Card className="h-full hover:border-highlight transition-colors">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-highlight" />
                      Herbert Marcuse's Influence
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      How Marcuse shaped modern social justice movements and corporate activism.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/research/harari-wef-great-reset" className="block">
                <Card className="h-full hover:border-highlight transition-colors">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Globe className="h-4 w-4 text-highlight" />
                      WEF and the Great Reset
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Understanding the WEF's vision for global transformation.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 