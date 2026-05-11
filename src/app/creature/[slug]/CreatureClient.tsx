'use client';

import React from 'react';
import { Creature } from '@/data/creatures';
import { useTheme } from '@/components/ThemeProvider';
import { FossilRecord } from '@/components/FossilRecord';
import { InGenFile } from '@/components/InGenFile';
import { Ghost, ShieldAlert } from 'lucide-react';
import clsx from 'clsx';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CreatureClient({ 
  creature, 
  wikiSummary, 
  phylopicUrl 
}: { 
  creature: Creature;
  wikiSummary?: string | null;
  phylopicUrl?: string | null;
}) {
  const { theme } = useTheme();
  const containerRef = React.useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reset any existing animations when theme changes to prevent conflicts
    gsap.set('.reveal-element', { clearProps: 'all' });
    
    // Animate all elements with the reveal-element class
    const elements = gsap.utils.toArray('.reveal-element');
    
    elements.forEach((el) => {
      gsap.fromTo(el as HTMLElement, 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el as HTMLElement,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }, { scope: containerRef, dependencies: [theme] });

  return (
    <div ref={containerRef} className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <div className={clsx(
        "relative w-full h-[50vh] flex flex-col items-center justify-center overflow-hidden transition-all duration-700 border-b",
        theme === 'fossil' 
          ? "bg-[#080C0A] border-[#1A2E1E]" 
          : "bg-[#040F08] border-[#1A6B3A]"
      )}>
        {/* Background Ambience */}
        <div className="absolute inset-0 z-0 opacity-20 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,_var(--color-accent-primary)_0%,_transparent_60%)]" />

        {/* Scanlines / Decorative */}
        {theme === 'ingen' && (
          <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,255,127,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />
        )}

        <div className="relative z-10 flex flex-col items-center">
          <div className={clsx(
            "w-32 h-32 md:w-48 md:h-48 rounded-full border border-dashed flex items-center justify-center mb-6 transition-all duration-700",
            theme === 'fossil' ? 'border-[#C4A96B] bg-[#1A2E1E]/40 shadow-[0_0_60px_rgba(240,165,0,0.2)]' : 'border-[#4CAF7D] bg-[#040F08] shadow-[0_0_60px_rgba(0,255,127,0.2)]'
          )}>
            {theme === 'fossil' && phylopicUrl ? (
              <div 
                className="w-16 h-16 md:w-24 md:h-24 transition-colors duration-700 bg-[#C4A96B]"
                style={{ 
                  WebkitMaskImage: `url(${phylopicUrl})`, 
                  maskImage: `url(${phylopicUrl})`, 
                  WebkitMaskSize: 'contain', 
                  maskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat', 
                  maskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskPosition: 'center'
                }}
              />
            ) : creature.type === 'ingen_hybrid' ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src="https://static.wikia.nocookie.net/jurassicpark/images/c/c0/Logo_2.png/revision/latest/scale-to-width-down/1000?cb=20190111111516" referrerPolicy="no-referrer" alt="InGen Logo" className={clsx("w-3/4 h-3/4 object-contain transition-opacity duration-700", theme === 'fossil' ? 'opacity-80' : 'opacity-90')} />
            ) : theme === 'ingen' ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src="/Jurassic%20World%20Dominion.jpg" alt="Jurassic World Dominion" className="w-[85%] h-[85%] object-cover rounded-full opacity-90 transition-opacity duration-700" />
            ) : (
              <Ghost className="w-16 h-16 md:w-24 md:h-24 transition-colors duration-700 text-[#E8E0D0]" />
            )}
          </div>
          
          <h1 className={clsx(
            "font-heading text-5xl md:text-8xl tracking-widest text-center transition-colors duration-700",
            theme === 'fossil' ? 'text-[#E8E0D0]' : 'text-[#00FF7F]'
          )}>
            {creature.common_name}
          </h1>

          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <span className={clsx(
              "px-3 py-1 text-xs font-ui tracking-widest uppercase border",
              theme === 'fossil' ? 'border-[#C4A96B] text-[#C4A96B]' : 'border-[#4CAF7D] text-[#4CAF7D]'
            )}>
              {creature.diet}
            </span>
            <span className={clsx(
              "px-3 py-1 text-xs font-ui tracking-widest border",
              theme === 'fossil' ? 'border-[#C4A96B] text-[#C4A96B]' : 'border-[#4CAF7D] text-[#4CAF7D] uppercase'
            )}>
              {theme === 'fossil' ? creature.era : creature.type.replace('_', ' ')}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-20">
        {theme === 'fossil' ? <FossilRecord creature={creature} wikiSummary={wikiSummary} /> : <InGenFile creature={creature} />}
      </div>
    </div>
  );
}
