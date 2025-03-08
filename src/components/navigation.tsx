import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, BookOpen, Globe } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';

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

  return (
    <nav className="border-b bg-background sticky top-0 z-50">
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
              <div className="grid gap-4 py-6">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-2 py-2 text-lg transition-colors hover:text-highlight ${
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
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:inline-flex hover:text-highlight hover:border-highlight">Sign In</Button>
          <Button className="bg-highlight hover:bg-amber-600 text-white">Sign Up</Button>
        </div>
      </div>
    </nav>
  );
} 