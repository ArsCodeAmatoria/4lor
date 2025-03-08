"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, School, Building, Globe, Shield, Users, AlertTriangle, BookOpen, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResistingCulturalMarxism() {
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

        <h1 className="text-4xl font-bold mb-4">How to Resist the Marcusean Takeover: Fighting CRT, Censorship, and Institutional Marxism</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Practical strategies for countering Cultural Marxism's influence in education, media, corporations, and government institutions
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Introduction</h2>
            <p>
              While Herbert Marcuse's Cultural Marxism has achieved widespread institutional capture across education, 
              media, corporations, and government, resistance is growing. This guide provides practical strategies for 
              fighting back against ideological control and restoring individual liberty.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">1. Fighting Critical Race Theory (CRT) in Schools & Workplaces</h2>
            
            <div className="bg-muted rounded-lg p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-highlight/20 p-2 rounded-full">
                  <School className="h-6 w-6 text-highlight" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-4">Steps to Fight CRT in Schools</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Expose & Educate</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Learn CRT's history (Marcuse, Bell, Crenshaw)</li>
                        <li>Identify CRT terminology (equity, whiteness, systemic racism)</li>
                        <li>Support anti-indoctrination teachers</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Take Legal & Political Action</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Challenge school boards on CRT curriculum</li>
                        <li>Request public records on DEI policies</li>
                        <li>Support anti-CRT legislation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Alternative Education</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Support classical education and charter schools</li>
                        <li>Promote trade schools and STEM education</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-highlight/20 p-2 rounded-full">
                  <Building className="h-6 w-6 text-highlight" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-4">Fighting CRT & DEI in the Workplace</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Legal Resistance</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Challenge mandatory DEI training</li>
                        <li>Use civil rights law protections</li>
                        <li>File complaints against discriminatory policies</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Document & Expose</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Record race-based hiring practices</li>
                        <li>Use whistleblower platforms</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Economic Action</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Boycott woke corporations</li>
                        <li>Support anti-ESG businesses</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">2. Countering Academic Radicalization</h2>
            
            <div className="bg-muted rounded-lg p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-highlight/20 p-2 rounded-full">
                  <BookOpen className="h-6 w-6 text-highlight" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-4">Fighting Marxist Indoctrination</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Expose University Bias</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Track funding sources and foreign influence</li>
                        <li>Document radical professors and curricula</li>
                        <li>Challenge discriminatory policies</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Promote Free Speech</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Fight speech codes and safe spaces</li>
                        <li>Support viewpoint diversity</li>
                        <li>Protect conservative students and faculty</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">3. Breaking Media & Tech Control</h2>
            
            <div className="bg-muted rounded-lg p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-highlight/20 p-2 rounded-full">
                  <Radio className="h-6 w-6 text-highlight" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-4">Alternative Platforms</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Video & Social Media</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Rumble (YouTube alternative)</li>
                        <li>Odysee (Decentralized platform)</li>
                        <li>Gab & Minds (Free speech networks)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Privacy Tools</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>ProtonMail (Secure email)</li>
                        <li>Brave Browser (Uncensored web)</li>
                        <li>Signal (Private messaging)</li>
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
                  <h3 className="text-2xl font-medium mb-4">Fighting Censorship</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Legal Action</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Challenge censorship laws</li>
                        <li>Support Section 230 reform</li>
                        <li>Fight digital ID mandates</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Media Accountability</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Document media bias and lies</li>
                        <li>Support independent journalism</li>
                        <li>Use alternative fact-checkers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">4. Fighting Corporate Wokeness</h2>
            
            <div className="bg-muted rounded-lg p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-highlight/20 p-2 rounded-full">
                  <Building className="h-6 w-6 text-highlight" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-4">Economic Action</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Consumer Power</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Boycott ESG-compliant companies</li>
                        <li>Support parallel economy businesses</li>
                        <li>Use anti-ESG investment firms</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Corporate Accountability</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Track corporate ESG scores</li>
                        <li>Expose DEI discrimination</li>
                        <li>Support shareholder activism</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">5. Political Action</h2>
            
            <div className="bg-muted rounded-lg p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-highlight/20 p-2 rounded-full">
                  <Shield className="h-6 w-6 text-highlight" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-4">Taking Back Institutions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Local Action</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Run for school board positions</li>
                        <li>Challenge local DEI mandates</li>
                        <li>Support anti-CRT candidates</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">State & National Level</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Support anti-CRT legislation</li>
                        <li>Fight ESG mandates</li>
                        <li>Oppose digital control systems</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Conclusion: The Great Reawakening</h2>
            <div className="bg-muted rounded-lg p-6">
              <p className="mb-4">
                Despite the pervasive influence of Marcusean Cultural Marxism across institutions, 
                resistance is growing and achieving significant victories:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>States successfully banning CRT and DEI programs</li>
                <li>Alternative media breaking Big Tech's censorship monopoly</li>
                <li>Conservative victories in local elections and school boards</li>
                <li>Effective boycotts forcing corporate policy changes</li>
              </ul>
              <p>
                While the battle continues, these successes show that organized resistance can effectively 
                counter institutional Marxism and restore individual liberty.
              </p>
            </div>
          </section>

          <div className="border-t pt-8">
            <h3 className="text-2xl font-medium mb-4">Related Articles</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/research/herbert-marcuse-influence" className="text-highlight hover:underline">
                  Herbert Marcuse's Influence on Modern Institutions
                </Link>
              </li>
              <li>
                <Link href="/research/critical-race-theory" className="text-highlight hover:underline">
                  Understanding Critical Race Theory
                </Link>
              </li>
              <li>
                <Link href="/research/tech-censorship" className="text-highlight hover:underline">
                  Big Tech and Digital Censorship
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 