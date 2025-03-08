import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";

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
          <main className="flex-1 flex justify-center">
            <div className="w-full max-w-7xl">{children}</div>
          </main>
          <footer className="bg-zinc-800 text-white py-8 md:py-6">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} 4lor. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-sm hover:text-amber-500 transition-colors">Privacy Policy</a>
                <a href="#" className="text-sm hover:text-amber-500 transition-colors">Terms of Service</a>
                <a href="#" className="text-sm hover:text-amber-500 transition-colors">Contact</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
