import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, BookOpen, Quote, Users, Building, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Herbert Marcuse: The Father of Cultural Marxism | 4lor",
  description: "An analysis of Herbert Marcuse's influence on Cultural Marxism and modern society",
};

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
        
        <div className="bg-highlight text-white px-6 py-10 rounded-lg mb-10">
          <h1 className="text-4xl font-bold mb-4">Herbert Marcuse: The Father of "Cultural Marxism"</h1>
          <p className="text-xl opacity-90">
            How one philosopher's ideas transformed Marxism from economic theory to cultural revolution
          </p>
        </div>
        
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
              <Users className="h-6 w-6 text-highlight" />
              Who Was Herbert Marcuse?
            </h2>
            <p className="mt-4">
              Herbert Marcuse (1898–1979) was a German-American philosopher, sociologist, and political theorist. 
              He was a leading figure in the Frankfurt School, a group of neo-Marxist intellectuals who sought to 
              apply Marxist theory beyond just economics, expanding it into culture, psychology, and social structures.
            </p>
            <p className="mt-4">
              Marcuse's work laid the foundation for what is now called "Cultural Marxism," an idea that economic 
              class struggle should be replaced with identity-based struggles (race, gender, sexuality, etc.) as a 
              means of dismantling Western society.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
              <BookOpen className="h-6 w-6 text-highlight" />
              Key Ideas & Influence
            </h2>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold">1. Repressive Tolerance (1965)</h3>
              <p className="mt-2">
                Marcuse argued that true tolerance requires the suppression of conservative, traditional, and 
                right-wing ideas while promoting leftist, progressive, and radical ideas. In his essay 
                <em> Repressive Tolerance</em>, he wrote that:
              </p>
              <blockquote className="border-l-4 border-highlight pl-4 italic my-4">
                "Liberating tolerance would mean intolerance against movements from the Right and toleration 
                of movements from the Left."
              </blockquote>
              <p>
                This idea justified censorship and suppression of opposing viewpoints, something that has now 
                manifested in modern cancel culture, media bias, and academic gatekeeping.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold">2. Cultural Marxism & The Long March Through the Institutions</h3>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  Marcuse rejected traditional economic Marxism (which focuses on class struggle) and instead 
                  shifted Marxism into the realm of culture.
                </li>
                <li>
                  He believed that Western culture itself was oppressive and needed to be dismantled.
                </li>
                <li>
                  This led to the "Long March Through the Institutions," where Marxists would infiltrate academia, 
                  media, government, and cultural institutions to reshape Western values from within.
                </li>
              </ul>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold">3. The Role of "Oppressed" Groups</h3>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  Marcuse promoted the idea that racial minorities, feminists, and sexual minorities should be 
                  the new "revolutionary class," replacing the working-class that Marx originally envisioned.
                </li>
                <li>
                  This is why modern leftist activism focuses on race, gender, and identity politics rather than 
                  traditional economic class struggle.
                </li>
              </ul>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold">4. Anti-Capitalism & The Sexual Revolution</h3>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  He was highly critical of capitalism and believed personal liberation was tied to overthrowing 
                  traditional moral values.
                </li>
                <li>
                  His book <em>Eros and Civilization</em> (1955) pushed for sexual liberation and the destruction 
                  of traditional family structures.
                </li>
              </ul>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
              <Building className="h-6 w-6 text-highlight" />
              Marcuse's Influence on Modern Society
            </h2>
            <p className="mt-4">
              Marcuse's ideas have deeply influenced:
            </p>
            
            <div className="grid gap-4 md:grid-cols-2 mt-6">
              <Card className="border-l-4 border-l-highlight">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Modern Leftist Activism</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Ideas like Critical Race Theory (CRT), LGBTQ+ identity politics, and radical feminism all 
                    trace back to his theories.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-highlight">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Media & Academia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Many universities push Marcusean ideology, silencing conservative and nationalist voices 
                    in favor of progressive narratives.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-highlight">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Big Tech Censorship</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    The idea that "free speech should be restricted for the right but expanded for the left" 
                    comes from Marcuse's Repressive Tolerance.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-highlight">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">DEI (Diversity, Equity, Inclusion) Policies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    The corporate and government push for identity-based hiring and social policies is directly 
                    linked to Marcuse's idea of using marginalized groups as revolutionary agents.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
          
          <section className="mb-12 bg-zinc-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-zinc-300 pb-2">
              <Zap className="h-6 w-6 text-highlight" />
              Conclusion: Marcuse's Lasting Impact
            </h2>
            <p className="mt-4">
              Marcuse's Cultural Marxism has led to the modern "Woke Revolution," where identity replaces class 
              as the core of political struggle. His theories transformed Marxism from an economic ideology into 
              a cultural movement, influencing social justice activism, cancel culture, and institutional censorship.
            </p>
            <p className="mt-4 font-medium">
              While traditional economic Marxism failed in the West, Marcuse's cultural Marxism succeeded, 
              reshaping institutions from within.
            </p>
          </section>
          
          <div className="border-t pt-6 mt-12">
            <h3 className="text-lg font-semibold mb-2">Further Reading</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Marcuse, Herbert. <em>One-Dimensional Man</em> (1964)</li>
              <li>Marcuse, Herbert. <em>Eros and Civilization</em> (1955)</li>
              <li>Marcuse, Herbert. "Repressive Tolerance" in <em>A Critique of Pure Tolerance</em> (1965)</li>
              <li>Lind, William S. "The Origins of Political Correctness" (2000)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 