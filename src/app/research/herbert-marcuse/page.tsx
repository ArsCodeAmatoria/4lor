"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, BookOpen, Users, Building, Zap, School, Radio, Shield, AlertTriangle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HerbertMarcusePage() {
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
          <h2 className="text-2xl text-highlight mb-4">Cultural Marxism's Transformation</h2>
          <p className="text-xl opacity-90">
            How one philosopher's ideas transformed Marxism from economic theory to cultural revolution
          </p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg">
            Herbert Marcuse (1898–1979) was a German-American philosopher and leading figure of the Frankfurt School 
            who laid the foundation for what is now called "Cultural Marxism." His work fundamentally transformed 
            Marxist theory from economic class struggle to identity-based cultural revolution.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
              <BookOpen className="h-6 w-6 text-highlight" />
              1. Core Philosophy & Impact
            </h2>
            
            <div className="bg-highlight/10 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-highlight mb-4">
                <BookOpen className="h-5 w-5" />
                Key Concepts of Cultural Marxism
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Shift from economic class struggle to cultural/identity-based conflict</li>
                <li>"Repressive Tolerance" - suppressing conservative views while promoting leftist ideas</li>
                <li>The "Long March Through the Institutions" strategy of infiltration</li>
                <li>Creation of new "revolutionary classes" based on race, gender, and sexuality</li>
              </ul>
            </div>

            <div className="bg-highlight/10 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-highlight mb-4">
                <Shield className="h-5 w-5" />
                The Long March Through the Institutions
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Infiltrate and transform cultural institutions from within</li>
                <li>Target universities, media, entertainment, government</li>
                <li>Reshape Western values through institutional control</li>
              </ul>
              <div className="bg-green-900/20 p-4 rounded-lg mt-4">
                <h4 className="font-semibold mb-2">Current Results</h4>
                <p>DEI departments, activist journalism, and progressive education policies are direct results of this strategy.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
              <Users className="h-6 w-6 text-highlight" />
              2. Critical Race Theory & Identity Politics
            </h2>
            
            <div className="bg-highlight/10 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-highlight mb-4">
                <Users className="h-5 w-5" />
                How Marcuse Inspired CRT
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Replaced class struggle with racial struggle</li>
                <li>Created hierarchy of oppression based on identity</li>
                <li>Justified censorship through claims of "systemic racism"</li>
                <li>Promoted group identity over individualism</li>
              </ul>
              <div className="bg-green-900/20 p-4 rounded-lg mt-4">
                <h4 className="font-semibold mb-2">Current Impact</h4>
                <p>These ideas now dominate corporate HR policies, academic curricula, and social justice movements.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
              <Building className="h-6 w-6 text-highlight" />
              3. Modern Applications
            </h2>
            
            <div className="bg-highlight/10 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-highlight mb-4">
                <Building className="h-5 w-5" />
                Institutional Impact
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Education & Media</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Universities enforce CRT training</li>
                    <li>Media censorship of conservative views</li>
                    <li>Tech platforms implement "hate speech" policies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Corporate & Government</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>DEI policies in hiring</li>
                    <li>ESG scores for businesses</li>
                    <li>Identity-based quotas</li>
                  </ul>
                </div>
              </div>
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
                  Critical Race Theory (CRT) is directly influenced by Marcuse's identity-based Marxism
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-highlight font-bold mr-2 mt-1">✓</span>
                <div>
                  Academia enforces Marcusean ideology, silencing dissent and indoctrinating students
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-highlight font-bold mr-2 mt-1">✓</span>
                <div>
                  Big Tech and mainstream media use "Repressive Tolerance" to justify censorship
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-highlight font-bold mr-2 mt-1">✓</span>
                <div>
                  Corporate and government DEI policies enforce Marcuse's "victimhood hierarchy"
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
              <li>Marcuse, Herbert. <em>One-Dimensional Man</em> (1964)</li>
              <li>Marcuse, Herbert. <em>Eros and Civilization</em> (1955)</li>
              <li>Marcuse, Herbert. "Repressive Tolerance" in <em>A Critique of Pure Tolerance</em> (1965)</li>
              <li>Lind, William S. "The Origins of Political Correctness" (2000)</li>
              <li>Lindsay, James & Pluckrose, Helen. <em>Cynical Theories</em> (2020)</li>
              <li>Rufo, Christopher F. "Critical Race Theory: What It Is and How to Fight It" (2021)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 