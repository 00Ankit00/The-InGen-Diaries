'use client';

import React, { useRef, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import gsap from 'gsap';
import { Database, Bone } from 'lucide-react';
import clsx from 'clsx';
import { Howl } from 'howler';

export function SectionToggle() {
  const { theme, toggleTheme } = useTheme();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const glitchSoundRef = useRef<Howl | null>(null);

  useEffect(() => {
    glitchSoundRef.current = new Howl({
      src: ['/audio/glitch.mp3'],
      volume: 0.7,
      preload: true,
    });
    return () => {
      glitchSoundRef.current?.unload();
    };
  }, []);

  const handleToggle = () => {
    if (glitchSoundRef.current) {
      glitchSoundRef.current.play();
    }
    
    // Basic GSAP glitch/fade effect applied to body
    const tl = gsap.timeline({
      onComplete: () => {
        toggleTheme();
        // Remove glitch overlay
        gsap.to('.glitch-layer', { opacity: 0, duration: 0.1 });
      }
    });

    // We expect a div with class .glitch-layer in the layout or we can just flash the background
    tl.to('.glitch-layer', {
      opacity: 0.8,
      duration: 0.05,
      ease: 'power1.inOut'
    })
    .to('.glitch-layer', {
      opacity: 0.2,
      duration: 0.05
    })
    .to('.glitch-layer', {
      opacity: 0.9,
      duration: 0.05
    });
  };

  return (
    <button
      ref={toggleRef}
      onClick={handleToggle}
      className={clsx(
        "relative flex items-center justify-between w-64 h-14 p-1 rounded-full overflow-hidden border-2 transition-colors duration-500",
        theme === 'fossil' ? 'border-[#B8860B] bg-[#0F1A12]' : 'border-[#1A6B3A] bg-[#081A0F]'
      )}
      aria-label="Toggle Section"
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div
          className={clsx(
            "absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full transition-all duration-500 ease-in-out z-0",
            theme === 'fossil' ? 'left-1 bg-[#F0A500]' : 'left-[calc(50%+3px)] bg-[#00FF7F]'
          )}
        />
      </div>

      <div className={clsx(
        "relative z-10 flex-1 flex items-center justify-center font-heading text-lg tracking-wider transition-colors duration-300",
        theme === 'fossil' ? 'text-[#080C0A]' : 'text-[#8A9E8E] hover:text-[#E8E0D0]'
      )}>
        <Bone className="w-4 h-4 mr-2" />
        FOSSIL
      </div>

      <div className={clsx(
        "relative z-10 flex-1 flex items-center justify-center font-heading text-lg tracking-wider transition-colors duration-300",
        theme === 'ingen' ? 'text-[#040F08]' : 'text-[#4CAF7D] hover:text-[#E2FFE2]'
      )}>
        <Database className="w-4 h-4 mr-2" />
        INGEN
      </div>
    </button>
  );
}
