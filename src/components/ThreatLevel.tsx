import React from 'react';
import clsx from 'clsx';
import { useTheme } from './ThemeProvider';

export function ThreatLevel({ level }: { level: number }) {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col gap-1 w-32">
      <div className="flex justify-between items-end mb-1">
        <span className={clsx("text-xs font-ui tracking-widest", theme === 'ingen' ? 'text-alert font-bold' : 'text-secondary')}>
          THREAT LEVEL
        </span>
        <span className={clsx("text-lg font-heading leading-none", theme === 'ingen' ? 'text-alert' : 'text-primary')}>
          {level}/5
        </span>
      </div>
      <div className="flex gap-[2px]">
        {[1, 2, 3, 4, 5].map((i) => {
          const isActive = i <= level;
          
          let activeClass = 'bg-[#F0A500] shadow-[0_0_8px_rgba(240,165,0,0.4)]'; // Fossil active
          let inactiveClass = 'bg-[#1A2E1E]'; // Fossil inactive
          
          if (theme === 'ingen') {
            activeClass = 'bg-[#FF4444] shadow-[0_0_8px_rgba(255,68,68,0.6)]';
            inactiveClass = 'bg-[#081A0F] border border-[#1A6B3A]';
          }
          
          return (
            <div
              key={i}
              className={clsx(
                "h-2 flex-1 transition-all duration-500",
                isActive ? activeClass : inactiveClass
              )}
            />
          );
        })}
      </div>
    </div>
  );
}
