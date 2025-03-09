"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, BookOpen, Globe } from 'lucide-react';
import { SearchBar } from '@/components/SearchBar';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Data Analysis', href: '/analysis' },
  { name: 'Visualizations', href: '/visualizations' },
  { name: 'Research', href: '/research' },
  { name: 'About', href: '/about' },
];

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav 
      className={`border-b sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-md shadow-sm' 
          : 'bg-background'
      }`}
    >
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2 mr-8">
            <div className="bg-highlight p-2 rounded-md">
              <span className="text-xl font-bold text-white">4lor</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-highlight ${
                    isActive ? 'text-highlight font-bold' : ''
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex">
            <SearchBar />
          </div>
          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="mr-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle className="flex items-center">
                    <div className="bg-highlight p-2 rounded-md mr-2">
                      <span className="text-xl font-bold text-white">4lor</span>
                    </div>
                  </SheetTitle>
                  <SheetDescription className="flex items-center mt-2">
                    <BookOpen className="h-4 w-4 mr-2" />
                    <span>Cultural Marxism</span>
                    <span className="mx-2">&</span>
                    <Globe className="h-4 w-4 mr-2" />
                    <span>WEF Analysis</span>
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-4">
                  <SearchBar />
                </div>
                <div className="mt-4 space-y-4">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block text-sm font-medium transition-colors hover:text-highlight ${
                          isActive ? 'text-highlight font-bold' : ''
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <Button variant="outline" className="hidden md:inline-flex hover:text-highlight hover:border-highlight">Sign In</Button>
          <Button className="bg-highlight hover:bg-amber-600 text-white">Sign Up</Button>
        </div>
      </div>
    </nav>
  );
} 