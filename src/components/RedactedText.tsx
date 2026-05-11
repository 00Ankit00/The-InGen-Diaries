'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import { useTheme } from './ThemeProvider';

export function RedactedText({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const [hovered, setHovered] = useState(false);

  // If in Fossil mode, we just show the text or styled normally, 
  // but this component is primarily for InGen mode anyway.
  if (theme === 'fossil') {
    return <span>{children}</span>;
  }

  return (
    <span 
      className={clsx(
        "relative inline-block cursor-help transition-all duration-300 font-data",
        hovered ? "text-primary bg-transparent" : "text-transparent bg-[#111111]"
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className={clsx("absolute inset-0 bg-[#111111] pointer-events-none transition-opacity duration-300", hovered ? "opacity-0" : "opacity-100")}>
        <span className="flex items-center justify-center w-full h-full text-[#FF4444] text-[0.65rem] tracking-widest font-bold opacity-80" style={{ letterSpacing: '0.2rem' }}>
          REDACTED
        </span>
      </span>
      <span className={clsx("relative z-10 transition-opacity duration-300", hovered ? "opacity-100" : "opacity-0")}>
        {children}
      </span>
    </span>
  );
}
