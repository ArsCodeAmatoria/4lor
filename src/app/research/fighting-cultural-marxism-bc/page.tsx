"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, School, Building, Globe, Shield, Users, AlertTriangle, BookOpen, Radio, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FightingCulturalMarxismBC() {
  return (
    <div className="container py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6">
          <Link href="/research">
            <Button variant="link" className="gap-2 pl-0 text-muted-foreground hover:text-highlight">
              <ArrowLeft className="h-4 w-4" />
              Back to Research
            </Button>
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-4">Fighting CRT, Censorship, and Institutional Marxism in British Columbia (BC)</h1>
        <p className="text-xl text-muted-foreground mb-8">
          A comprehensive guide to resisting Cultural Marxism's influence in BC's education system, media, corporations, and government
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Introduction</h2>
            <p>
              British Columbia is one of Canada's most left-leaning provinces, with widespread adoption of CRT, 
              DEI policies, and globalist control across institutions. However, resistance is growing through 
              organized action in education, media, business, and politics.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">1. Fighting CRT & DEI in BC Education</h2>
            
            <div className="bg-muted rounded-lg p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-highlight/20 p-2 rounded-full">
                  <School className="h-6 w-6 text-highlight" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-4">School System Resistance</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Current Issues</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Mandatory "anti-racism training" for students and teachers</li>
                        <li>CRT-based lesson plans on "systemic racism"</li>
                        <li>SOGI 123 gender ideology curriculum</li>
                        <li>DEI-based hiring quotas in education</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Action Steps</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Request curriculum transparency from school boards</li>
                        <li>Document and expose CRT training materials</li>
                        <li>Support BC Conservative Party education reform</li>
                        <li>Join Action4Canada parent movements</li>
                      </ul>
                    </div>
                    <div className="bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Success Story</h4>
                      <p>Parent activism has successfully slowed CRT-based training implementation in several BC school districts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-highlight/20 p-2 rounded-full">
                  <BookOpen className="h-6 w-6 text-highlight" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-4">University Reform</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Current Issues</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Mandatory anti-racism training at UBC, SFU, UVic</li>
                        <li>DEI statements required for faculty hiring</li>
                        <li>Cancel culture targeting conservative students</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Action Steps</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Expose discriminatory hiring practices</li>
                        <li>Support Free Speech Union of Canada</li>
                        <li>Push for DEI program audits</li>
                      </ul>
                    </div>
                    <div className="bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Success Story</h4>
                      <p>SFU removed some mandatory CRT training requirements after public pressure in 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">2. Fighting Media Censorship in BC</h2>
            
            <div className="bg-muted rounded-lg p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-highlight/20 p-2 rounded-full">
                  <Radio className="h-6 w-6 text-highlight" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-4">Media Resistance</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Current Issues</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Left-wing bias in CBC Vancouver, Global BC</li>
                        <li>Promotion of climate lockdowns</li>
                        <li>Censorship of independent voices</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Action Steps</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Support alternative media outlets</li>
                        <li>Document and share media bias</li>
                        <li>Engage in citizen journalism</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-highlight/20 p-2 rounded-full">
                  <Globe className="h-6 w-6 text-highlight" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-4">Alternative Platforms</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Independent Media</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Rebel News BC coverage</li>
                        <li>True North investigations</li>
                        <li>The Counter Signal reporting</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Free Speech Platforms</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Rumble for video content</li>
                        <li>Local independent news sites</li>
                        <li>Alternative social networks</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">3. Fighting Corporate Wokeness in BC</h2>
            
            <div className="bg-muted rounded-lg p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-highlight/20 p-2 rounded-full">
                  <Building className="h-6 w-6 text-highlight" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-4">Corporate Resistance</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Current Issues</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>BC Hydro's gender and racial quotas</li>
                        <li>Tech sector DEI mandates</li>
                        <li>ESG policies in banking</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Action Steps</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Support Public Square Canada businesses</li>
                        <li>Choose non-ESG financial services</li>
                        <li>Document corporate discrimination</li>
                      </ul>
                    </div>
                    <div className="bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Success Story</h4>
                      <p>Some BC banks have reduced extreme ESG goals after customer backlash</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">4. Political Action in BC</h2>
            
            <div className="bg-muted rounded-lg p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-highlight/20 p-2 rounded-full">
                  <MapPin className="h-6 w-6 text-highlight" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-4">Fighting Globalist Control</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Current Threats</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Digital ID implementation</li>
                        <li>Net Zero regulations</li>
                        <li>"15-Minute City" restrictions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Action Steps</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Support BC Conservative Party</li>
                        <li>Expose WEF-connected politicians</li>
                        <li>Demand local government accountability</li>
                      </ul>
                    </div>
                    <div className="bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Success Story</h4>
                      <p>Growing opposition has delayed Digital ID and climate lockdown implementation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">5. Building Parallel Institutions in BC</h2>
            
            <div className="bg-muted rounded-lg p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-highlight/20 p-2 rounded-full">
                  <Shield className="h-6 w-6 text-highlight" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-4">Alternative Systems</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Education Alternatives</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Independent schools</li>
                        <li>Homeschooling networks</li>
                        <li>Classical education programs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Financial Independence</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Local credit unions</li>
                        <li>Non-ESG investment options</li>
                        <li>Independent business networks</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-green-900/20 p-4 rounded-lg mt-4">
                    <h4 className="font-semibold mb-2">Success Story</h4>
                    <p>Public Square Canada's network is growing rapidly in BC, providing alternatives to woke businesses</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Conclusion: BC's Growing Resistance</h2>
            <div className="bg-muted rounded-lg p-6">
              <p className="mb-4">
                Despite BC being one of Canada's most leftist-controlled provinces, resistance is growing 
                through multiple channels:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Parents successfully fighting CRT in schools</li>
                <li>Independent media exposing government overreach</li>
                <li>Conservative political momentum building</li>
                <li>Parallel institutions gaining strength</li>
              </ul>
              <p>
                These successes show that organized resistance can effectively counter 
                institutional Marxism even in BC's challenging environment.
              </p>
            </div>
          </section>

          <div className="border-t pt-8">
            <h3 className="text-2xl font-medium mb-4">Related Articles</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/research/fighting-cultural-marxism-canada" className="text-highlight hover:underline">
                  Fighting Cultural Marxism in Canada: National Strategy
                </Link>
              </li>
              <li>
                <Link href="/research/herbert-marcuse-influence" className="text-highlight hover:underline">
                  Herbert Marcuse's Influence on Modern Institutions
                </Link>
              </li>
              <li>
                <Link href="/research/tech-censorship" className="text-highlight hover:underline">
                  Fighting Big Tech Censorship
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 