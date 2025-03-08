import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, BookOpen, Brain, Globe, Users, Database, Cpu, Lock, Eye, Ban, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Yuval Noah Harari, the WEF, and the Great Reset | 4lor",
  description: "Analysis of how Yuval Noah Harari's ideas shape the World Economic Forum's Great Reset agenda",
};

export default function HarariWefGreatResetPage() {
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
          <h1 className="text-4xl font-bold mb-4">Yuval Noah Harari, the WEF, and the Great Reset</h1>
          <h2 className="text-2xl text-highlight mb-4">AI-Driven Globalism & Transhumanism</h2>
          <p className="text-xl opacity-90">
            How Harari's vision aligns with Klaus Schwab's Great Reset agenda for AI governance, surveillance, and global control
          </p>
        </div>
        
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg">
            Yuval Noah Harari is one of the most influential thinkers shaping the vision of the World Economic 
            Forum (WEF) and global elites. His views align with Klaus Schwab's Great Reset agenda, which envisions 
            AI-driven governance, mass surveillance, transhumanism, and centralized global control.
          </p>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
              <Globe className="h-6 w-6 text-highlight" />
              1. Harari's Role in the World Economic Forum (WEF)
            </h2>
            <p className="mt-4">
              Harari is a top advisor to Klaus Schwab and a frequent speaker at WEF events. His views directly 
              influence the WEF's Fourth Industrial Revolution and Great Reset initiatives.
            </p>
            
            <div className="bg-highlight/10 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-highlight mb-4">
                <Globe className="h-5 w-5" />
                What is the Great Reset?
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  A WEF-led global initiative to reshape economies, politics, and society.
                </li>
                <li>
                  Pushes for AI governance, digital IDs, cashless economies, and ESG policies.
                </li>
                <li>
                  Seeks to eliminate national sovereignty in favor of centralized global rule.
                </li>
              </ul>
            </div>
            
            <div className="bg-highlight/10 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-highlight mb-4">
                <Brain className="h-5 w-5" />
                How Harari Influences the Great Reset
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>AI as the New Government:</strong> Supports replacing human decision-making with AI-driven governance.
                </li>
                <li>
                  <strong>Surveillance Economy:</strong> Promotes mass biometric tracking and digital IDs.
                </li>
                <li>
                  <strong>Cashless Societies:</strong> Pushes for Central Bank Digital Currencies (CBDCs) to monitor and control spending.
                </li>
                <li>
                  <strong>Depopulation & Social Control:</strong> Believes most humans will become "useless" and require 
                  entertainment, drugs, or AI distractions to maintain order.
                </li>
              </ul>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
              <BookOpen className="h-6 w-6 text-highlight" />
              2. Harari's Key Ideas & How They Shape the Great Reset
            </h2>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Cpu className="h-5 w-5 text-highlight" />
                A. AI-Controlled Societies & Digital Governance
              </h3>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Harari believes AI will replace governments, politicians, and even personal free will.</li>
                <li>AI will predict, influence, and control human behavior.</li>
                <li>He argues that free will is an illusion and decision-making should be centralized under AI systems.</li>
              </ul>
              <div className="bg-zinc-100 p-4 rounded-lg mt-3 flex items-start">
                <div className="min-w-6 mr-2 mt-1">
                  <ArrowLeft className="h-5 w-5 text-highlight rotate-180" />
                </div>
                <p className="text-sm">
                  <strong>WEF Connection:</strong> This aligns with the WEF's push for AI-driven governance, 
                  digital IDs, and predictive policing.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Eye className="h-5 w-5 text-highlight" />
                B. "Humans Are Hackable" & Mass Surveillance
              </h3>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Harari has stated that humans will no longer have privacy or autonomy:</li>
              </ul>
              <blockquote className="border-l-4 border-highlight pl-4 italic my-4">
                "The idea that humans have free will, that this is my life and my decisions—that's over."
              </blockquote>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  He supports real-time biometric surveillance (brain scans, facial recognition, and digital IDs) 
                  to monitor people's actions and thoughts.
                </li>
              </ul>
              <div className="bg-zinc-100 p-4 rounded-lg mt-3 flex items-start">
                <div className="min-w-6 mr-2 mt-1">
                  <ArrowLeft className="h-5 w-5 text-highlight rotate-180" />
                </div>
                <p className="text-sm">
                  <strong>WEF Connection:</strong> The WEF supports social credit systems, digital IDs, and biometric passports.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Ban className="h-5 w-5 text-highlight" />
                C. The Death of Democracy & the Rise of AI Tyranny
              </h3>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Harari sees democracy as outdated and supports an AI-managed global government.</li>
                <li>He argues elections, national sovereignty, and constitutions will be obsolete.</li>
                <li>Instead, corporations, AI, and global elites should make decisions for humanity.</li>
              </ul>
              <div className="bg-zinc-100 p-4 rounded-lg mt-3 flex items-start">
                <div className="min-w-6 mr-2 mt-1">
                  <ArrowLeft className="h-5 w-5 text-highlight rotate-180" />
                </div>
                <p className="text-sm">
                  <strong>WEF Connection:</strong> The WEF promotes "stakeholder capitalism," where unelected 
                  corporate leaders and technocrats run the world.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Users className="h-5 w-5 text-highlight" />
                D. Universal Basic Income (UBI) for the "Useless Class"
              </h3>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Harari argues AI and automation will create a "useless class" of people.</li>
                <li>He suggests governments will need to provide Universal Basic Income (UBI) to keep people controlled.</li>
                <li>He also implies entertainment, drugs, and digital distractions will be used to prevent mass unrest.</li>
              </ul>
              <div className="bg-zinc-100 p-4 rounded-lg mt-3 flex items-start">
                <div className="min-w-6 mr-2 mt-1">
                  <ArrowLeft className="h-5 w-5 text-highlight rotate-180" />
                </div>
                <p className="text-sm">
                  <strong>WEF Connection:</strong> The WEF supports UBI and mass unemployment due to AI automation.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Brain className="h-5 w-5 text-highlight" />
                E. Transhumanism & The Post-Human Future
              </h3>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Harari predicts that technology will evolve humanity into "Homo Deus" (god-like beings).</li>
                <li>He supports genetic engineering, AI brain implants, and merging humans with machines.</li>
                <li>He suggests that a small elite will enhance themselves while the majority of humans become obsolete.</li>
              </ul>
              <div className="bg-zinc-100 p-4 rounded-lg mt-3 flex items-start">
                <div className="min-w-6 mr-2 mt-1">
                  <ArrowLeft className="h-5 w-5 text-highlight rotate-180" />
                </div>
                <p className="text-sm">
                  <strong>WEF Connection:</strong> Klaus Schwab openly promotes merging AI, biology, and technology into the human body.
                </p>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
              <Globe className="h-6 w-6 text-highlight" />
              3. Harari's Vision in Action: Policies Being Implemented Today
            </h2>
            <p className="mt-4">
              Many of Harari's ideas are already being implemented through global initiatives:
            </p>
            
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <span className="text-highlight font-bold mr-2 mt-1">✓</span>
                <div>
                  <strong>Mass Digital Surveillance</strong> – Countries like China, Canada, and the EU are introducing 
                  digital IDs, vaccine passports, and AI surveillance.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-highlight font-bold mr-2 mt-1">✓</span>
                <div>
                  <strong>Cashless Societies</strong> – The IMF, ECB, and Federal Reserve are pushing for CBDCs, 
                  allowing governments to monitor and control transactions.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-highlight font-bold mr-2 mt-1">✓</span>
                <div>
                  <strong>Censorship & Free Speech Restrictions</strong> – The EU Digital Services Act & Big Tech 
                  companies are enforcing "Repressive Tolerance" (Marcuse-style speech control).
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-highlight font-bold mr-2 mt-1">✓</span>
                <div>
                  <strong>Universal Basic Income (UBI)</strong> – Countries like Spain, Canada, and the U.S. are 
                  experimenting with government-provided incomes.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-highlight font-bold mr-2 mt-1">✓</span>
                <div>
                  <strong>AI Policing & Predictive Governance</strong> – Governments are experimenting with 
                  predictive policing, biometric tracking, and AI justice systems.
                </div>
              </li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
              <AlertTriangle className="h-6 w-6 text-highlight" />
              4. Criticisms of Harari's Vision
            </h2>
            <p className="mt-4">
              Harari's vision raises serious ethical concerns and has been criticized as dystopian, anti-human, and totalitarian.
            </p>
            
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2 mt-1">⬤</span>
                <div>
                  <strong>Elitist & Anti-Democratic</strong> – He advocates for a small AI-enhanced elite ruling over the majority of humanity.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2 mt-1">⬤</span>
                <div>
                  <strong>Destroys Free Will</strong> – His ideas remove personal choice and replace it with AI-driven decisions.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2 mt-1">⬤</span>
                <div>
                  <strong>Supports Mass Surveillance</strong> – His work justifies biometric tracking, AI policing, and digital authoritarianism.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2 mt-1">⬤</span>
                <div>
                  <strong>Endorses Censorship</strong> – His idea of "Repressive Tolerance" (suppressing opposition) is being used to silence dissent.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2 mt-1">⬤</span>
                <div>
                  <strong>Transhumanist Extremism</strong> – His ideas push for radical human modification through AI, implants, and genetic engineering.
                </div>
              </li>
            </ul>
          </section>
          
          <section className="mb-12 bg-zinc-800 text-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-zinc-600 pb-2 text-highlight">
              <Brain className="h-6 w-6" />
              5. Conclusion: Harari's Role in the Great Reset
            </h2>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start">
                <span className="text-highlight font-bold mr-2 mt-1">✓</span>
                <div>
                  Harari is one of the most influential figures behind WEF globalist policies.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-highlight font-bold mr-2 mt-1">✓</span>
                <div>
                  His ideas support digital IDs, AI-driven governance, transhumanism, and mass surveillance.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-highlight font-bold mr-2 mt-1">✓</span>
                <div>
                  The WEF is actively implementing Harari's dystopian vision worldwide.
                </div>
              </li>
            </ul>
          </section>
          
          <div className="border-t pt-6 mt-12">
            <h3 className="text-lg font-semibold mb-2">Related Articles</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <Link href="/research/yuval-noah-harari" className="block">
                <Card className="h-full hover:border-highlight transition-colors">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Brain className="h-4 w-4 text-highlight" />
                      Yuval Noah Harari: WEF's Futurist
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      A deeper look at Harari's background, key ideas, and influence on global policy.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/research/herbert-marcuse" className="block">
                <Card className="h-full hover:border-highlight transition-colors">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-highlight" />
                      Herbert Marcuse: Father of Cultural Marxism
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Explore how Marcuse's ideas laid the foundation for modern identity politics and institutional transformation.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
          
          <div className="border-t pt-6 mt-12">
            <h3 className="text-lg font-semibold mb-2">Further Reading</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Schwab, Klaus. <em>The Fourth Industrial Revolution</em> (2016)</li>
              <li>Schwab, Klaus & Malleret, Thierry. <em>COVID-19: The Great Reset</em> (2020)</li>
              <li>Harari, Yuval Noah. <em>Homo Deus: A Brief History of Tomorrow</em> (2015)</li>
              <li>World Economic Forum. "The Great Reset" (2020)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 