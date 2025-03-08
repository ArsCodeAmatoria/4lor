"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HerbertMarcuseInfluence() {
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

        <h1 className="text-4xl font-bold mb-4">Herbert Marcuse's Influence on Critical Race Theory, Media Control, and Academia</h1>
        <p className="text-xl text-muted-foreground mb-8">
          How Marcuse's neo-Marxist ideas transformed Western institutions through CRT, media censorship, and academic radicalism
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Introduction</h2>
            <p>
              Herbert Marcuse's neo-Marxist ideas laid the foundation for modern institutional control through Critical Race Theory (CRT), 
              media censorship, and academia's shift toward ideological radicalism. This transformation—often termed Cultural Marxism—has 
              fundamentally reshaped Western society by replacing traditional economic class struggle with identity-based conflict.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">1. Marcuse's Influence on Critical Race Theory (CRT)</h2>
            <div className="bg-muted rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-medium mb-4">Key Transformations</h3>
              <ul className="space-y-3">
                <li>• Traditional Marxism failed in the West due to the working class's lack of revolutionary spirit</li>
                <li>• Marcuse and the Frankfurt School rebranded Marxism through racial, gender, and cultural oppression</li>
                <li>• This evolution gave birth to Critical Theory, which later developed into Critical Race Theory</li>
              </ul>
            </div>

            <h3 className="text-2xl font-medium mb-4">Key CRT Concepts from Marcuse</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-muted rounded-lg p-6">
                <h4 className="font-semibold mb-2">Oppressor vs. Oppressed</h4>
                <p>Reframed from "rich vs. poor" to "whites vs. minorities"</p>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h4 className="font-semibold mb-2">Systemic Racism</h4>
                <p>Based on Marcuse's view that Western civilization is inherently oppressive</p>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h4 className="font-semibold mb-2">Equity (Equal Outcomes)</h4>
                <p>Derived from Marxist redistribution and forced social re-engineering</p>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h4 className="font-semibold mb-2">Intersectionality</h4>
                <p>Based on Marcuse's concept of "stacking oppression" across identity categories</p>
              </div>
            </div>

            <h3 className="text-2xl font-medium mb-4">CRT in Practice</h3>
            <ul className="space-y-3 mb-6">
              <li>• DEI policies mandate CRT implementation in schools and workplaces</li>
              <li>• Corporate training programs teach concepts of "unconscious bias"</li>
              <li>• Education reforms eliminate merit-based testing to "combat white supremacy"</li>
              <li>• Hiring policies prioritize identity characteristics over qualifications</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">2. The Takeover of Academia</h2>
            <div className="bg-muted rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-medium mb-4">The "Long March Through the Institutions"</h3>
              <ul className="space-y-3">
                <li>• Instead of violent revolution, leftists infiltrated key institutions</li>
                <li>• Universities became primary targets for ideological transformation</li>
                <li>• Modern universities now promote Critical Theory, DEI, and activism</li>
              </ul>
            </div>

            <h3 className="text-2xl font-medium mb-4">How Universities Were Captured</h3>
            <ul className="space-y-3 mb-6">
              <li>• Radical professors introduced Marxist theories in humanities</li>
              <li>• Administration implemented speech codes and safe spaces</li>
              <li>• Hiring practices systematically excluded conservative academics</li>
              <li>• Student indoctrination through mandatory social justice programs</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">3. Media Control and Censorship</h2>
            <p className="mb-6">
              Marcuse's "Repressive Tolerance" (1965) provided the theoretical framework for modern censorship, 
              justifying the suppression of right-wing views while promoting leftist narratives.
            </p>

            <div className="bg-muted rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-medium mb-4">Modern Implementation</h3>
              <ul className="space-y-3">
                <li>• "Fact-checking" used to discredit opposing viewpoints</li>
                <li>• Systematic deplatforming of conservative voices</li>
                <li>• Narrative control through "systemic oppression" framing</li>
                <li>• Cancel culture targeting ideological dissent</li>
              </ul>
            </div>

            <h3 className="text-2xl font-medium mb-4">Recent Examples</h3>
            <ul className="space-y-3 mb-6">
              <li>• COVID-19: Suppression of alternative scientific perspectives</li>
              <li>• 2020 Election: Restricted discussion of electoral concerns</li>
              <li>• Climate Change: Labeling skeptics as "science deniers"</li>
              <li>• Race & Policing: Selective narrative promotion</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">4. Big Tech's Role</h2>
            <div className="bg-muted rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-medium mb-4">Digital Enforcement Methods</h3>
              <ul className="space-y-3">
                <li>• Algorithm-based suppression of content</li>
                <li>• Shadow banning and visibility reduction</li>
                <li>• Financial deplatforming through payment processors</li>
                <li>• Coordinated removal of alternative platforms</li>
              </ul>
            </div>

            <h3 className="text-2xl font-medium mb-4">Notable Cases</h3>
            <ul className="space-y-3 mb-6">
              <li>• Twitter Files revealing institutional censorship coordination</li>
              <li>• Parler's systematic removal from tech infrastructure</li>
              <li>• Demonetization of non-compliant content creators</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">5. Resistance and Counter-Strategies</h2>
            <div className="bg-muted rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-medium mb-4">Key Strategies</h3>
              <ul className="space-y-3">
                <li>• Expose ideological roots of CRT and DEI programs</li>
                <li>• Develop alternative institutions and platforms</li>
                <li>• Advocate for free speech protections</li>
                <li>• Support academic diversity and viewpoint inclusion</li>
                <li>• Resist corporate adoption of ideological mandates</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Conclusion</h2>
            <p>
              Marcuse's ideas have fundamentally reshaped Western institutions through CRT, media control, and academic transformation. 
              While his influence has created a system of ideological enforcement across institutions, resistance to this cultural 
              transformation is growing. Understanding these dynamics is crucial for addressing contemporary social and political challenges.
            </p>
          </section>

          <div className="border-t pt-8">
            <h3 className="text-2xl font-medium mb-4">Related Articles</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/research/cultural-marxism" className="text-highlight hover:underline">
                  The Frankfurt School and Cultural Marxism
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