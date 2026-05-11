'use client';

import React from 'react';
import { useTheme } from '@/components/ThemeProvider';
import clsx from 'clsx';

const TIMELINE_DATA = [
  { year: 1989, event: "First successful dinosaur clone (Triceratops) hatches on Isla Sorna." },
  { year: 1993, event: "Isla Nublar Incident: Complete loss of containment. Park abandoned before opening." },
  { year: 1997, event: "Isla Sorna Incident: InGen extraction teams conflict with Hammond's gatherers. T-rex rampages San Diego." },
  { year: 2001, event: "Amalgam Testing Phase 1 uncovered: Illegal cloning confirmed on Site B (Spinosaurus)." },
  { year: 2005, event: "Masrani Global opens 'Jurassic World' to massive public success." },
  { year: 2015, event: "Jurassic World Incident: Indominus Rex asset breaches containment. Park abandoned." },
  { year: 2018, event: "Mt. Sibo Eruption: Isla Nublar destroyed. Surviving assets transported globally via Lockwood Estate auction." },
  { year: 2022, event: "BioSyn Sanctuary Incident: Global ecological collapse narrowly averted. Sanctuary declared an international haven." },
  { year: 2025, event: "Jurassic World Rebirth: Retrieval teams scour equatorial regions for the massive genetic samples." },
];

export default function TimelineClient() {
  const { theme } = useTheme();

  return (
    <div className={clsx(
      "w-full transition-colors duration-700 px-6 py-20 overflow-hidden",
      theme === 'fossil' ? "bg-transparent text-[#E8E0D0] font-serif" : "bg-transparent text-[#E2FFE2] font-data"
    )}>
      <div className="max-w-[800px] mx-auto animate-in fade-in slide-in-from-bottom">
        
        <header className={clsx("pb-6 mb-12 border-b-2", theme === 'fossil' ? "border-[#F0A500]" : "border-[#1A6B3A]")}>
          <h1 className={clsx("text-5xl tracking-widest", theme === 'fossil' ? "font-heading text-[#F0A500]" : "text-[#00FF7F]")}>
            {theme === 'fossil' ? 'HISTORICAL RECORD' : 'INCIDENT LOG'}
          </h1>
        </header>

        <div className="relative border-l-4 ml-4 md:ml-12 border-opacity-30 space-y-12" style={{ borderColor: theme === 'fossil' ? '#C4A96B' : '#1A6B3A' }}>
          
          {TIMELINE_DATA.map((item, idx) => (
            <div key={idx} className="relative pl-8 md:pl-16 group">
              
              {/* Timeline Node */}
              <div className={clsx(
                "absolute -left-[14px] top-1 w-6 h-6 rounded-full border-4 transition-transform duration-300 group-hover:scale-150",
                theme === 'fossil' 
                  ? "bg-[#080C0A] border-[#F0A500] shadow-[0_0_15px_rgba(240,165,0,0.5)]" 
                  : "bg-black border-[#00FF7F] shadow-[0_0_15px_rgba(0,255,127,0.5)]"
              )}></div>

              <div className={clsx("text-3xl font-bold tracking-widest mb-2", theme === 'fossil' ? "text-[#C4A96B]" : "text-[#4CAF7D]")}>
                {item.year}
              </div>
              
              <div className={clsx(
                "text-lg leading-relaxed p-6",
                theme === 'fossil' 
                  ? "bg-[#1A2E1E]/30 border-l-2 border-[#C4A96B]" 
                  : "bg-[#081A0F] border border-[#1A6B3A]"
              )}>
                {item.event}
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
