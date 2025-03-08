import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import Link from "next/link";
import { Twitter, Github, MessageCircle, Rss } from "lucide-react";
import Icon from "./icon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "4lor - Critical Analysis of Cultural Marxism & WEF",
  description: "Data-driven analysis of Cultural Marxism and the World Economic Forum's influence on society, economy, and policy",
  icons: {
    icon: [
      {
        url: '/icon.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: {
      url: '/apple-icon.png',
      type: 'image/png',
      sizes: '180x180',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <footer className="bg-zinc-800 text-white py-12">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                {/* Research Column */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Research</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/research/herbert-marcuse" className="text-gray-300 hover:text-amber-500 transition-colors">
                        Critical Theory Origins
                      </Link>
                    </li>
                    <li>
                      <Link href="/research/harari-wef-great-reset" className="text-gray-300 hover:text-amber-500 transition-colors">
                        WEF Analysis
                      </Link>
                    </li>
                    <li>
                      <Link href="/research/fighting-cultural-marxism-bc" className="text-gray-300 hover:text-amber-500 transition-colors">
                        Resistance Strategies
                      </Link>
                    </li>
                    <li>
                      <Link href="/research" className="text-gray-300 hover:text-amber-500 transition-colors">
                        All Articles
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Analysis Column */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Analysis</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/dashboard" className="text-gray-300 hover:text-amber-500 transition-colors">
                        Data Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link href="/visualizations" className="text-gray-300 hover:text-amber-500 transition-colors">
                        Visualizations
                      </Link>
                    </li>
                    <li>
                      <Link href="/analysis" className="text-gray-300 hover:text-amber-500 transition-colors">
                        Impact Analysis
                      </Link>
                    </li>
                    <li>
                      <Link href="/methodology" className="text-gray-300 hover:text-amber-500 transition-colors">
                        Methodology
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Topics Column */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Key Topics</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/topics/cultural-marxism" className="text-gray-300 hover:text-amber-500 transition-colors">
                        Cultural Marxism
                      </Link>
                    </li>
                    <li>
                      <Link href="/topics/great-reset" className="text-gray-300 hover:text-amber-500 transition-colors">
                        Great Reset
                      </Link>
                    </li>
                    <li>
                      <Link href="/topics/institutional-capture" className="text-gray-300 hover:text-amber-500 transition-colors">
                        Institutional Capture
                      </Link>
                    </li>
                    <li>
                      <Link href="/topics/resistance" className="text-gray-300 hover:text-amber-500 transition-colors">
                        Building Resistance
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Connect Column */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Connect</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/about" className="text-gray-300 hover:text-amber-500 transition-colors">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-gray-300 hover:text-amber-500 transition-colors">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link href="/newsletter" className="text-gray-300 hover:text-amber-500 transition-colors">
                        Newsletter
                      </Link>
                    </li>
                  </ul>
                  <div className="flex space-x-4 pt-2">
                    <Link href="https://twitter.com" className="text-gray-300 hover:text-amber-500 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </Link>
                    <Link href="https://telegram.org" className="text-gray-300 hover:text-amber-500 transition-colors">
                      <MessageCircle className="h-5 w-5" />
                    </Link>
                    <Link href="https://github.com" className="text-gray-300 hover:text-amber-500 transition-colors">
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link href="https://substack.com" className="text-gray-300 hover:text-amber-500 transition-colors">
                      <Rss className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <p className="text-sm text-gray-300">
                    © {new Date().getFullYear()} 4lor. All rights reserved.
                  </p>
                  <div className="flex space-x-6 mt-4 md:mt-0">
                    <Link href="/privacy" className="text-sm text-gray-300 hover:text-amber-500 transition-colors">
                      Privacy Policy
                    </Link>
                    <Link href="/terms" className="text-sm text-gray-300 hover:text-amber-500 transition-colors">
                      Terms of Service
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
