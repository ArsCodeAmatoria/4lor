import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, BookOpen, Brain, Globe, Users, Database, Cpu, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const metadata = {
  title: "Yuval Noah Harari: WEF's Futurist & AI-Driven Globalism Advocate | 4lor",
  description: "An analysis of Yuval Noah Harari's influence on the WEF and his vision for AI-driven global governance",
};

export default function YuvalNoahHarariPage() {
  return (
    <div className="flex justify-center bg-background">
      <div className="w-full max-w-4xl">
        <section className="w-full py-10">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6">
                <Link href="/research">
                  <Button variant="ghost" className="gap-1 pl-0 hover:text-highlight hover:bg-transparent">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Research
                  </Button>
                </Link>
              </div>
              
              <div className="bg-highlight text-white px-6 py-10 rounded-lg mb-10">
                <h1 className="text-4xl font-bold mb-4">Yuval Noah Harari: WEF's Futurist & AI-Driven Globalism Advocate</h1>
                <p className="text-xl opacity-90">
                  How the World Economic Forum's top advisor envisions a future of AI governance, transhumanism, and the end of human autonomy
                </p>
              </div>
              
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <section className="mb-12">
                  <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
                    <Users className="h-6 w-6 text-highlight" />
                    Who Is Yuval Noah Harari?
                  </h2>
                  <p className="mt-4">
                    Yuval Noah Harari (born 1976) is an Israeli historian, philosopher, and futurist. He is a professor 
                    at the Hebrew University of Jerusalem and is best known for his books:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li><em>Sapiens: A Brief History of Humankind</em> (2011)</li>
                    <li><em>Homo Deus: A Brief History of Tomorrow</em> (2015)</li>
                    <li><em>21 Lessons for the 21st Century</em> (2018)</li>
                  </ul>
                  <p className="mt-4">
                    Harari is a top advisor to the World Economic Forum (WEF) and a leading voice in AI-driven governance, 
                    transhumanism, and globalist policy.
                  </p>
                </section>
                
                <section className="mb-12">
                  <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
                    <BookOpen className="h-6 w-6 text-highlight" />
                    Key Ideas & Beliefs
                  </h2>
                  
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <Database className="h-5 w-5 text-highlight" />
                      1. AI & Data Control Over Humanity
                    </h3>
                    <p className="mt-2">
                      Harari has spoken extensively about how Artificial Intelligence (AI), Big Data, and surveillance 
                      will shape the future of humanity.
                    </p>
                    <p className="mt-2">
                      He believes humans will be "hackable animals" in the future, where governments and corporations 
                      will use AI to predict and control people.
                    </p>
                    <blockquote className="border-l-4 border-highlight pl-4 italic my-4">
                      "Humans are now hackable animals. The whole idea that humans have a soul, or free will, and that 
                      nobody knows what's happening inside me—that's over."
                    </blockquote>
                    <p className="mt-2">
                      Advocates for a world where AI algorithms and biometric tracking dictate decision-making.
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <Lock className="h-5 w-5 text-highlight" />
                      2. The End of Free Will & Privacy
                    </h3>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      <li>
                        Claims "free will is an illusion" and that governments should control human behavior through 
                        AI-driven data systems.
                      </li>
                      <li>
                        Supports mass biometric surveillance (facial recognition, brain activity tracking, digital IDs).
                      </li>
                      <li>
                        Opposes traditional liberal democracy, arguing that AI-driven "post-democratic" governance is inevitable.
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <Users className="h-5 w-5 text-highlight" />
                      3. The Rise of a "Useless Class"
                    </h3>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      <li>
                        Harari argues that automation and AI will make most humans "useless" in economic and political systems.
                      </li>
                      <li>
                        Suggests that governments must find ways to "control" this "useless class" through entertainment, 
                        drugs, and AI-driven distractions.
                      </li>
                      <li>
                        Supports Universal Basic Income (UBI) as a solution to mass unemployment caused by AI.
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <Brain className="h-5 w-5 text-highlight" />
                      4. Transhumanism & the Merging of Humans with AI
                    </h3>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      <li>
                        Harari predicts that humanity will transition into "Homo Deus" (god-like beings) through 
                        biotechnology and AI integration.
                      </li>
                      <li>
                        Suggests elite-controlled genetic modifications, brain implants, and AI-driven decision-making.
                      </li>
                      <li>
                        Sees AI as a superior force to human reasoning.
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <Globe className="h-5 w-5 text-highlight" />
                      5. Globalist Governance & WEF Policies
                    </h3>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      <li>
                        Harari is a strong advocate of global governance under the WEF and believes nation-states 
                        should surrender sovereignty to global organizations.
                      </li>
                      <li>
                        Believes nationalism is outdated and dangerous, and supports centralized AI-driven world government.
                      </li>
                      <li>
                        Advocates for eliminating cash in favor of Central Bank Digital Currencies (CBDCs) controlled by AI.
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <Cpu className="h-5 w-5 text-highlight" />
                      6. Depopulation & Post-Humanism
                    </h3>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      <li>
                        Harari has made statements suggesting population control may be necessary.
                      </li>
                      <li>
                        Believes many jobs will become obsolete, requiring governments to reduce human reproduction.
                      </li>
                      <li>
                        Predicts a world where a small AI-enhanced elite rules over the majority.
                      </li>
                    </ul>
                  </div>
                </section>
                
                <section className="mb-12">
                  <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
                    <Globe className="h-6 w-6 text-highlight" />
                    Harari's Connection to the World Economic Forum (WEF)
                  </h2>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>
                      A key speaker at WEF events, advising Klaus Schwab and global elites.
                    </li>
                    <li>
                      Supports the Great Reset, advocating for the merging of technology, finance, and governance 
                      into one AI-controlled system.
                    </li>
                    <li>
                      Endorses radical changes to education, media, and economic systems to reshape humanity's 
                      role in the future.
                    </li>
                  </ul>
                </section>
                
                <section className="mb-12">
                  <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
                    <Users className="h-6 w-6 text-highlight" />
                    Criticism & Concerns
                  </h2>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>
                      Many critics argue Harari's ideas are anti-human and promote a techno-totalitarian future.
                    </li>
                    <li>
                      His dismissal of free will and privacy concerns many libertarians and conservatives.
                    </li>
                    <li>
                      Harari's focus on AI-driven control, surveillance, and depopulation is seen as dystopian by many.
                    </li>
                  </ul>
                </section>
                
                <section className="mb-12 bg-zinc-100 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-zinc-300 pb-2">
                    <Brain className="h-6 w-6 text-highlight" />
                    Conclusion: Harari's Vision for the Future
                  </h2>
                  <p className="mt-4">
                    Harari envisions a future where:
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <span className="text-highlight font-bold mr-2">✓</span>
                      AI and biotech reshape human life
                    </li>
                    <li className="flex items-start">
                      <span className="text-highlight font-bold mr-2">✓</span>
                      Governments use AI to control populations
                    </li>
                    <li className="flex items-start">
                      <span className="text-highlight font-bold mr-2">✓</span>
                      Free will is eliminated, replaced by AI-driven decision-making
                    </li>
                    <li className="flex items-start">
                      <span className="text-highlight font-bold mr-2">✓</span>
                      A small, elite class governs humanity, while most people become "useless"
                    </li>
                    <li className="flex items-start">
                      <span className="text-highlight font-bold mr-2">✓</span>
                      National sovereignty disappears, replaced by global governance
                    </li>
                  </ul>
                </section>
                
                <div className="border-t pt-6 mt-12">
                  <h3 className="text-lg font-semibold mb-2">Notable Quotes</h3>
                  <div className="space-y-4">
                    <blockquote className="border-l-4 border-highlight pl-4 italic">
                      "History began when humans invented gods, and will end when humans become gods."
                      <footer className="text-sm mt-1 not-italic">— Yuval Noah Harari, <em>Homo Deus</em></footer>
                    </blockquote>
                    
                    <blockquote className="border-l-4 border-highlight pl-4 italic">
                      "In the 21st century, we might witness the creation of a massive new unworking class: people devoid of any economic, political, or even artistic value, who contribute nothing to the prosperity, power, and glory of society."
                      <footer className="text-sm mt-1 not-italic">— Yuval Noah Harari, <em>21 Lessons for the 21st Century</em></footer>
                    </blockquote>
                    
                    <blockquote className="border-l-4 border-highlight pl-4 italic">
                      "The idea that humans have this soul or spirit, and they have free will, and nobody knows what's happening inside me... that's over."
                      <footer className="text-sm mt-1 not-italic">— Yuval Noah Harari, World Economic Forum, 2020</footer>
                    </blockquote>
                  </div>
                </div>
                
                <div className="border-t pt-6 mt-12">
                  <h3 className="text-lg font-semibold mb-2">Further Reading</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Harari, Yuval Noah. <em>Homo Deus: A Brief History of Tomorrow</em> (2015)</li>
                    <li>Harari, Yuval Noah. <em>21 Lessons for the 21st Century</em> (2018)</li>
                    <li>World Economic Forum. "The Great Reset" (2020)</li>
                    <li>Schwab, Klaus & Malleret, Thierry. <em>COVID-19: The Great Reset</em> (2020)</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
} 