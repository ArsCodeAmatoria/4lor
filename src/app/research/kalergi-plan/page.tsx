"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, BookOpen, Users, Building, Globe, Shield, AlertTriangle, Radio, Flag, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function KalergiPlanPage() {
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
          <h1 className="text-4xl font-bold mb-4">The Kalergi Plan: Global Implementation and the Push for a Post-National World</h1>
          <h2 className="text-2xl text-highlight mb-4">Blueprint for Mass Migration and Elite Governance</h2>
          <p className="text-xl opacity-90">
            How Richard von Coudenhove-Kalergi's vision aligns with modern globalist agendas
          </p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
              <BookOpen className="h-6 w-6 text-highlight" />
              1. Kalergi's Vision and Modern Parallels
            </h2>
            
            <div className="bg-highlight/10 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-highlight mb-4">
                <Globe className="h-5 w-5" />
                Core Vision
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pan-European movement sought to create a United Europe under elite rule</li>
                <li>Advocated for mixed-race population to replace national identities</li>
                <li>Viewed Jewish elites as the "natural ruling class" of a future globalist system</li>
                <li>Work inspired early European integration and EU foundation</li>
              </ul>
            </div>

            <div className="bg-highlight/10 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-highlight mb-4">
                <Shield className="h-5 w-5" />
                Modern Globalist Alignment
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mass migration used to dissolve national identity</li>
                <li>Elitist rule by technocratic class (WEF, EU leaders, corporate elites)</li>
                <li>Promotion of multiculturalism as dominant ideology</li>
                <li>Suppression of nationalist movements and resistance to migration</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
              <Building className="h-6 w-6 text-highlight" />
              2. Implementation Through Global Organizations
            </h2>
            
            <div className="bg-highlight/10 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-highlight mb-4">
                <Globe className="h-5 w-5" />
                United Nations (UN) Policies
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>UN Global Compact on Migration (2018) pushes for mass migration</li>
                <li>UN Agenda 2030 promotes open borders and "diversity as strength"</li>
                <li>"Replacement Migration" report calls for mass immigration to Western nations</li>
              </ul>
            </div>

            <div className="bg-highlight/10 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-highlight mb-4">
                <Flag className="h-5 w-5" />
                European Union Implementation
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Schengen Agreement facilitates mass migration into Europe</li>
                <li>Laws against "hate speech" criminalize resistance to open borders</li>
                <li>Diversity quotas in government and business enforce multiculturalism</li>
                <li>EU structure reflects Kalergi's Pan-European movement vision</li>
              </ul>
            </div>

            <div className="bg-highlight/10 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-highlight mb-4">
                <Network className="h-5 w-5" />
                World Economic Forum's Role
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>The Great Reset advocates for mass migration as economic strategy</li>
                <li>Fourth Industrial Revolution replaces traditional populations</li>
                <li>Stakeholder Capitalism consolidates elite technocratic control</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
              <Globe className="h-6 w-6 text-highlight" />
              3. Global Implementation Hotspots
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-highlight/10 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Western Europe</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Demographic transformation through mass migration</li>
                  <li>Native Europeans projected minority status by 2050</li>
                  <li>Government suppression of nationalism</li>
                </ul>
              </div>
              <div className="bg-highlight/10 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Canada</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Declared "post-national state" by Trudeau</li>
                  <li>Record immigration levels of 500,000 per year</li>
                  <li>Major cities now majority non-European</li>
                </ul>
              </div>
            </div>

            <div className="bg-highlight/10 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-highlight mb-4">
                <Flag className="h-5 w-5" />
                United States Implementation
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mass illegal immigration across southern border</li>
                <li>Over 5 million border crossings since 2021</li>
                <li>DACA and amnesty programs accelerate demographic change</li>
                <li>DEI policies enforce racial quotas in institutions</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
              <Radio className="h-6 w-6 text-highlight" />
              4. Media and Academic Control
            </h2>
            
            <div className="bg-highlight/10 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-highlight mb-4">
                <Radio className="h-5 w-5" />
                Media Enforcement
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Promotes "Diversity is Our Strength" messaging</li>
                <li>Demonizes nationalists as "far-right extremists"</li>
                <li>Suppresses discussion of demographic changes</li>
                <li>Enforces narrative control through censorship</li>
              </ul>
            </div>

            <div className="bg-highlight/10 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-highlight mb-4">
                <BookOpen className="h-5 w-5" />
                Academic Implementation
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Critical Race Theory attacks European identity</li>
                <li>DEI hiring ensures globalist-approved narratives</li>
                <li>Historical revisionism frames West as oppressive</li>
                <li>Suppression of alternative viewpoints</li>
              </ul>
            </div>
          </section>

          <section className="mb-12 bg-zinc-800 text-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-zinc-600 pb-2 text-highlight">
              <Shield className="h-6 w-6" />
              5. Resistance Strategies
            </h2>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start">
                <span className="text-highlight font-bold mr-2 mt-1">✓</span>
                <div>
                  Support populist parties opposing mass migration and globalist control
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-highlight font-bold mr-2 mt-1">✓</span>
                <div>
                  Build parallel institutions and support alternative media platforms
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-highlight font-bold mr-2 mt-1">✓</span>
                <div>
                  Boycott corporations enforcing DEI and ESG policies
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-highlight font-bold mr-2 mt-1">✓</span>
                <div>
                  Create local networks promoting national identity and self-sufficiency
                </div>
              </li>
            </ul>
          </section>

          <div className="border-t pt-6 mt-12">
            <h3 className="text-lg font-semibold mb-2">Related Articles</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <Link href="/research/harari-wef-great-reset" className="block">
                <Card className="h-full hover:border-highlight transition-colors">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Globe className="h-4 w-4 text-highlight" />
                      Harari, WEF, and the Great Reset
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      How Harari's vision aligns with Klaus Schwab's Great Reset agenda.
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
              <li>Coudenhove-Kalergi, Richard. <em>Practical Idealism</em> (1925)</li>
              <li>UN Global Compact for Migration (2018)</li>
              <li>Klaus Schwab. <em>The Great Reset</em> (2020)</li>
              <li>UN Report. "Replacement Migration: Is It a Solution to Declining and Ageing Populations?" (2000)</li>
              <li>Murray, Douglas. <em>The Strange Death of Europe</em> (2017)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 