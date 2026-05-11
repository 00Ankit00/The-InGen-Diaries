'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SectionToggle } from './SectionToggle';
import { useTheme } from './ThemeProvider';
import clsx from 'clsx';
import { Database, Microscope, Scale, Clock, Map } from 'lucide-react';

export function SiteHeader() {
  const pathname = usePathname();
  const { theme } = useTheme();

  if (pathname === '/') return null; // Don't show header on the landing page

  const links = [
    { href: '/roster', label: 'ROSTER', icon: Database },
    { href: '/map', label: 'ISLAND MAP', icon: Map },
    { href: '/lab', label: 'HYBRID LAB', icon: Microscope },
    { href: '/accuracy', label: 'ACCURACY', icon: Scale },
    { href: '/timeline', label: 'TIMELINE', icon: Clock },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md px-6 py-4 border-b border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 transition-colors duration-700">
      
      <div className="flex items-center gap-6 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
        {links.map((link) => {
          const isActive = pathname.startsWith(link.href);
          const Icon = link.icon;
          
          return (
            <Link 
              key={link.href} 
              href={link.href}
              className={clsx(
                "flex items-center text-xs md:text-sm font-ui tracking-widest uppercase transition-colors whitespace-nowrap",
                isActive 
                  ? (theme === 'fossil' ? 'text-[#F0A500]' : 'text-[#00FF7F]') 
                  : "text-white/50 hover:text-white"
              )}
            >
              <Icon className="w-4 h-4 mr-2" /> {link.label}
            </Link>
          );
        })}
      </div>

      <div className="flex-shrink-0">
        <SectionToggle />
      </div>

    </header>
  );
}
