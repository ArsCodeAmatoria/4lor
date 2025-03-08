"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, School, Building, Globe, Shield, Users, AlertTriangle, BookOpen, Radio, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FightingCulturalMarxismCanada() {
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

        <h1 className="text-4xl font-bold mb-4">How to Fight CRT, Censorship, and Institutional Marxism in Canada</h1>
        <p className="text-xl text-muted-foreground mb-8">
          A comprehensive guide to resisting Cultural Marxism's influence in Canadian education, media, corporations, and government
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Introduction</h2>
            <p>
              While Critical Race Theory (CRT), media censorship, and Cultural Marxism have deeply infiltrated 
              Canadian institutions, resistance is growing. This guide provides practical strategies for 
              Canadians to push back against these ideological policies and protect individual liberty.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">1. Fighting CRT & DEI in Canadian Education</h2>
            
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
                        <li>Bill 67 (Ontario) attempted to mandate CRT-based hiring</li>
                        <li>BC and Ontario enforce "anti-racism" training</li>
                        <li>Alberta NDP pushed CRT curriculum changes</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Action Steps</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Request school board curriculum records</li>
                        <li>Attend and speak at board meetings</li>
                        <li>Push provinces to remove DEI hiring practices</li>
                      </ul>
                    </div>
                    <div className="bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Success Story</h4>
                      <p>Ontario parents successfully forced the government to withdraw Bill 67's CRT hiring quotas</p>
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
                        <li>Mandatory DEI training at major universities</li>
                        <li>Race-based graduation requirements (UBC)</li>
                        <li>Speech codes and viewpoint discrimination</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Action Steps</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Challenge discriminatory policies</li>
                        <li>Support academic freedom initiatives</li>
                        <li>Promote alternative education paths</li>
                      </ul>
                    </div>
                    <div className="bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Success Story</h4>
                      <p>Alberta's UCP government removed DEI mandates from university hiring</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">2. Fighting Canadian Media Censorship</h2>
            
            <div className="bg-muted rounded-lg p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-highlight/20 p-2 rounded-full">
                  <Radio className="h-6 w-6 text-highlight" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-4">Resisting Censorship Laws</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Problematic Legislation</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Bill C-11: Online content regulation</li>
                        <li>Bill C-18: Forced payment to mainstream media</li>
                        <li>Bill C-36: Proposed "hate speech" restrictions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Action Steps</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Support independent media (Rebel News, True North)</li>
                        <li>File CRTC complaints against bias</li>
                        <li>Contact MPs to oppose censorship</li>
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
                        <li>Rebel News</li>
                        <li>True North</li>
                        <li>The Counter Signal</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Free Speech Platforms</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Rumble (Canadian alternative to YouTube)</li>
                        <li>Substack for independent journalism</li>
                        <li>Telegram for uncensored communication</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">3. Fighting Corporate Wokeness in Canada</h2>
            
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
                        <li>CPP enforcing ESG investment policies</li>
                        <li>Major banks pushing DEI hiring quotas</li>
                        <li>Corporate promotion of gender ideology</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Action Steps</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Support Public Square Canada businesses</li>
                        <li>Use local credit unions over major banks</li>
                        <li>Boycott companies pushing woke agendas</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">4. Political Action in Canada</h2>
            
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
                        <li>WEF influence in federal government</li>
                        <li>Digital ID and CBDC initiatives</li>
                        <li>Carbon tax and climate agenda</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Action Steps</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Support anti-globalist politicians</li>
                        <li>Back provincial resistance to federal control</li>
                        <li>Expose WEF connections in government</li>
                      </ul>
                    </div>
                    <div className="bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Success Story</h4>
                      <p>Alberta & Saskatchewan's successful resistance to federal carbon tax increases</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">5. Building Parallel Canadian Institutions</h2>
            
            <div className="bg-muted rounded-lg p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-highlight/20 p-2 rounded-full">
                  <Shield className="h-6 w-6 text-highlight" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-4">Alternative Systems</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Financial Independence</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Local credit unions</li>
                        <li>Provincial pension plans</li>
                        <li>Decentralized transactions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Education Alternatives</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Classical schools</li>
                        <li>Homeschooling networks</li>
                        <li>Trade schools</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-green-900/20 p-4 rounded-lg mt-4">
                    <h4 className="font-semibold mb-2">Success Story</h4>
                    <p>Alberta's creation of an independent provincial pension plan to escape federal ESG control</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Conclusion: Canadian Resistance Growing</h2>
            <div className="bg-muted rounded-lg p-6">
              <p className="mb-4">
                Despite the pervasive influence of Cultural Marxism in Canadian institutions, 
                resistance is growing and achieving significant victories:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Successful challenges to CRT in education</li>
                <li>Growth of independent media despite censorship</li>
                <li>Provincial pushback against federal control</li>
                <li>Development of parallel institutions</li>
              </ul>
              <p>
                These successes show that organized resistance can effectively counter 
                institutional Marxism and protect Canadian freedoms.
              </p>
            </div>
          </section>

          <div className="border-t pt-8">
            <h3 className="text-2xl font-medium mb-4">Related Articles</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/research/resisting-cultural-marxism" className="text-highlight hover:underline">
                  Global Guide to Resisting Cultural Marxism
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