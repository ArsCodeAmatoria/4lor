"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, BookOpen, Users, Building, Zap, School, Radio, Shield, AlertTriangle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HerbertMarcuseInfluence() {
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
          <h1 className="text-4xl font-bold mb-4">Herbert Marcuse's Influence on Critical Race Theory, Media Control, and Academia</h1>
          <h2 className="text-2xl text-highlight mb-4">Neo-Marxist Transformation of Western Institutions</h2>
          <p className="text-xl opacity-90">
            How Marcuse's ideas reshaped society through CRT, media censorship, and academic radicalism
          </p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
              <BookOpen className="h-6 w-6 text-highlight" />
              1. Marcuse's Influence on Critical Race Theory (CRT)
            </h2>
            
            <div className="bg-highlight/10 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-highlight mb-4">
                <Users className="h-5 w-5" />
                Key Transformations
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Traditional Marxism failed in the West due to the working class's lack of revolutionary spirit</li>
                <li>Marcuse and the Frankfurt School rebranded Marxism through racial, gender, and cultural oppression</li>
                <li>This evolution gave birth to Critical Theory, which later developed into Critical Race Theory</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-highlight/10 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Oppressor vs. Oppressed</h4>
                <p>Reframed from "rich vs. poor" to "whites vs. minorities"</p>
              </div>
              <div className="bg-highlight/10 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Systemic Racism</h4>
                <p>Based on Marcuse's view that Western civilization is inherently oppressive</p>
              </div>
              <div className="bg-highlight/10 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Equity (Equal Outcomes)</h4>
                <p>Derived from Marxist redistribution and forced social re-engineering</p>
              </div>
              <div className="bg-highlight/10 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Intersectionality</h4>
                <p>Based on Marcuse's concept of "stacking oppression" across identity categories</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
              <School className="h-6 w-6 text-highlight" />
              2. The Takeover of Academia
            </h2>
            
            <div className="bg-highlight/10 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-highlight mb-4">
                <Shield className="h-5 w-5" />
                The "Long March Through the Institutions"
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Instead of violent revolution, leftists infiltrated key institutions</li>
                <li>Universities became primary targets for ideological transformation</li>
                <li>Modern universities now promote Critical Theory, DEI, and activism</li>
              </ul>
            </div>

            <div className="bg-highlight/10 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-highlight mb-4">
                <School className="h-5 w-5" />
                How Universities Were Captured
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Radical professors introduced Marxist theories in humanities</li>
                <li>Administration implemented speech codes and safe spaces</li>
                <li>Hiring practices systematically excluded conservative academics</li>
                <li>Student indoctrination through mandatory social justice programs</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
              <Radio className="h-6 w-6 text-highlight" />
              3. Media Control and Censorship
            </h2>
            
            <div className="bg-highlight/10 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-highlight mb-4">
                <Radio className="h-5 w-5" />
                Modern Implementation
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>"Fact-checking" used to discredit opposing viewpoints</li>
                <li>Systematic deplatforming of conservative voices</li>
                <li>Narrative control through "systemic oppression" framing</li>
                <li>Cancel culture targeting ideological dissent</li>
              </ul>
            </div>

            <div className="bg-highlight/10 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-highlight mb-4">
                <AlertTriangle className="h-5 w-5" />
                Recent Examples
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>COVID-19: Suppression of alternative scientific perspectives</li>
                <li>2020 Election: Restricted discussion of electoral concerns</li>
                <li>Climate Change: Labeling skeptics as "science deniers"</li>
                <li>Race & Policing: Selective narrative promotion</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
              <Building className="h-6 w-6 text-highlight" />
              4. Big Tech's Role
            </h2>
            
            <div className="bg-highlight/10 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-highlight mb-4">
                <Building className="h-5 w-5" />
                Digital Enforcement Methods
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Algorithm-based suppression of content</li>
                <li>Shadow banning and visibility reduction</li>
                <li>Financial deplatforming through payment processors</li>
                <li>Coordinated removal of alternative platforms</li>
              </ul>
            </div>
          </section>

          <section className="mb-12 bg-zinc-800 text-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-zinc-600 pb-2 text-highlight">
              <AlertTriangle className="h-6 w-6" />
              Conclusion: Marcuse's Lasting Impact
            </h2>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start">
                <span className="text-highlight font-bold mr-2 mt-1">✓</span>
                <div>
                  Critical Race Theory has become the dominant framework in education and corporate culture
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-highlight font-bold mr-2 mt-1">✓</span>
                <div>
                  Academia enforces ideological conformity through speech codes and mandatory training
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-highlight font-bold mr-2 mt-1">✓</span>
                <div>
                  Media and Big Tech implement "Repressive Tolerance" through systematic censorship
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-highlight font-bold mr-2 mt-1">✓</span>
                <div>
                  Resistance is growing as more people recognize and reject these institutional changes
                </div>
              </li>
            </ul>
          </section>

          <div className="border-t pt-6 mt-12">
            <h3 className="text-lg font-semibold mb-2">Related Articles</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <Link href="/research/herbert-marcuse" className="block">
                <Card className="h-full hover:border-highlight transition-colors">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-highlight" />
                      Herbert Marcuse Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      A comprehensive look at Marcuse's philosophy and its impact on modern society.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/research/fighting-cultural-marxism-bc" className="block">
                <Card className="h-full hover:border-highlight transition-colors">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Shield className="h-4 w-4 text-highlight" />
                      Fighting Cultural Marxism
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Practical strategies for resisting Cultural Marxism in institutions.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>

          <div className="border-t pt-6 mt-12">
            <h3 className="text-lg font-semibold mb-2">Further Reading</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Marcuse, Herbert. "Repressive Tolerance" in <em>A Critique of Pure Tolerance</em> (1965)</li>
              <li>Marcuse, Herbert. <em>One-Dimensional Man</em> (1964)</li>
              <li>Lindsay, James & Pluckrose, Helen. <em>Cynical Theories</em> (2020)</li>
              <li>Rufo, Christopher F. "Critical Race Theory: What It Is and How to Fight It" (2021)</li>
              <li>MacDonald, Heather. <em>The Diversity Delusion</em> (2018)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 