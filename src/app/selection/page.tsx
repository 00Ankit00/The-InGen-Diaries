'use client';

import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { Bone, Dna } from 'lucide-react';
import { useTheme, Theme } from '@/components/ThemeProvider';
import clsx from 'clsx';

export default function LandingPage() {
  const router = useRouter();
  const { setTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [hoveredSide, setHoveredSide] = useState<'fossil' | 'ingen' | null>(null);

  const handleEnter = (side: Theme) => {
    // Set the theme globally first
    setTheme(side);
    
    // Animate a full page wipe covering everything
    const wipe = document.createElement('div');
    wipe.style.position = 'fixed';
    wipe.style.top = '0';
    wipe.style.left = '0';
    wipe.style.width = '100vw';
    wipe.style.height = '100vh';
    wipe.style.backgroundColor = side === 'fossil' ? '#080C0A' : '#040F08';
    wipe.style.zIndex = '9999';
    wipe.style.transform = side === 'fossil' ? 'translateX(-100%)' : 'translateX(100%)';
    document.body.appendChild(wipe);

    gsap.to(wipe, {
      x: 0,
      duration: 0.8,
      ease: 'power2.inOut',
      onComplete: () => {
        router.push('/roster');
        // Let Next.js navigate, then remove wipe
        setTimeout(() => {
          if (document.body.contains(wipe)) {
            document.body.removeChild(wipe);
          }
        }, 1000);
      }
    });

    // Optional audio trigger would go here
  };

  return (
    <div ref={containerRef} className="relative w-full h-screen flex flex-col md:flex-row overflow-hidden bg-black">
      {/* Fossil side */}
      <div 
        className={clsx(
          "relative flex-1 flex flex-col items-center justify-center cursor-pointer transition-all duration-700 ease-out border-b-2 md:border-b-0 md:border-r-2 border-[#1A2E1E]",
          "bg-[#080C0A] hover:bg-[#0F1A12] bg-[url('/fossil_bg.jpg')] bg-cover bg-center bg-blend-overlay group",
          hoveredSide === 'fossil' ? 'md:flex-[1.2]' : hoveredSide === 'ingen' ? 'md:flex-[0.8] opacity-50' : ''
        )}
        onMouseEnter={() => setHoveredSide('fossil')}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => handleEnter('fossil')}
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-accent-primary)_0%,_transparent_70%)] group-hover:opacity-20 transition-opacity duration-1000"></div>
        
        {/* Placeholder for 3D Fossil / Spline */}
        <div className="relative z-10 w-32 h-32 mb-8 md:mb-12 rounded-full border border-[#C4A96B] flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_40px_rgba(240,165,0,0.2)] group-hover:shadow-[0_0_60px_rgba(240,165,0,0.4)]">
          <Bone className="w-16 h-16 text-[#F0A500]" />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="font-heading text-6xl md:text-8xl text-[#E8E0D0] tracking-widest mb-2 drop-shadow-lg group-hover:text-[#F0A500] transition-colors duration-500">
            THE INGEN
          </h1>
          <h2 className="font-heading text-6xl md:text-8xl text-[#E8E0D0] tracking-widest mb-6 drop-shadow-lg group-hover:text-[#F0A500] transition-colors duration-500">
            DIARIES
          </h2>
          <p className="font-section text-[#C4A96B] text-xl md:text-2xl italic tracking-wider opacity-80 group-hover:opacity-100 transition-opacity duration-500">
            The Prehistoric Truth
          </p>
        </div>
      </div>

      {/* InGen side */}
      <div 
        className={clsx(
          "relative flex-1 flex flex-col items-center justify-center cursor-pointer transition-all duration-700 ease-out",
          "bg-[#040F08] hover:bg-[#081A0F] bg-[url('/ingen_bg.jpg')] bg-cover bg-center bg-blend-overlay group",
          hoveredSide === 'ingen' ? 'md:flex-[1.2]' : hoveredSide === 'fossil' ? 'md:flex-[0.8] opacity-50' : ''
        )}
        onMouseEnter={() => setHoveredSide('ingen')}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => handleEnter('ingen')}
      >
        {/* Scanlines decorative */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,127,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-accent-primary)_0%,_transparent_70%)] group-hover:opacity-20 transition-opacity duration-1000"></div>

        {/* Placeholder for DNA / Code snippet */}
        <div className="relative z-10 w-32 h-32 mb-8 md:mb-12 rounded-sm border border-[#1A6B3A] flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_40px_rgba(0,255,127,0.1)] group-hover:shadow-[0_0_60px_rgba(0,255,127,0.3)]">
          <Dna className="w-16 h-16 text-[#00FF7F]" />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="font-heading text-5xl md:text-7xl text-[#4CAF7D] tracking-widest mb-2 terminal-blink group-hover:text-[#00FF7F] transition-colors duration-500">
            THE INGEN
          </h1>
          <h2 className="font-heading text-5xl md:text-7xl text-[#4CAF7D] tracking-widest mb-6 group-hover:text-[#00FF7F] transition-colors duration-500">
            DIARIES
          </h2>
          <p className="font-section text-[#00FF7F] text-lg md:text-xl tracking-widest opacity-80 group-hover:opacity-100 transition-opacity duration-500">
            ACCESS PROTOCOL
          </p>
        </div>
      </div>
    </div>
  );
}
