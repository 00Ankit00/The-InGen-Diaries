'use client';

import React, { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Howl } from 'howler';
import { Volume2, VolumeX } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import clsx from 'clsx';

export function AudioManager() {
  const { theme } = useTheme();
  const pathname = usePathname();
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Use refs to store Howler instances
  const fossilSoundRef = useRef<Howl | null>(null);
  const ingenSoundRef = useRef<Howl | null>(null);
  const clickSoundRef = useRef<Howl | null>(null);

  // Determine if we are on the landing page
  const isLandingPage = pathname === '/';

  useEffect(() => {
    fossilSoundRef.current = new Howl({
      src: ['/audio/jungle_ambient.wav'],
      loop: true,
      volume: 0,
      preload: true
    });

    ingenSoundRef.current = new Howl({
      src: ['/audio/server_room.wav'],
      loop: true,
      volume: 0,
      preload: true
    });

    clickSoundRef.current = new Howl({
      src: ['/audio/click.mp3'],
      volume: 0.5,
      preload: true
    });

    const handleGlobalClick = () => {
      // Don't play click sound on the landing page
      if (!isLandingPage) {
        clickSoundRef.current?.play();
      }
    };

    window.addEventListener('click', handleGlobalClick);

    return () => {
      window.removeEventListener('click', handleGlobalClick);
      fossilSoundRef.current?.unload();
      ingenSoundRef.current?.unload();
      clickSoundRef.current?.unload();
    };
  }, [isLandingPage]);

  useEffect(() => {
    if (!isPlaying || isLandingPage) {
      fossilSoundRef.current?.fade(fossilSoundRef.current.volume(), 0, 1000);
      ingenSoundRef.current?.fade(ingenSoundRef.current.volume(), 0, 1000);
      return;
    }

    // Play both to ensure they're active, but manage volume based on theme
    if (!fossilSoundRef.current?.playing()) fossilSoundRef.current?.play();
    if (!ingenSoundRef.current?.playing()) ingenSoundRef.current?.play();

    if (theme === 'fossil') {
      fossilSoundRef.current?.fade(fossilSoundRef.current.volume(), 0.5, 1000);
      ingenSoundRef.current?.fade(ingenSoundRef.current.volume(), 0, 1000);
    } else {
      ingenSoundRef.current?.fade(ingenSoundRef.current.volume(), 0.5, 1000);
      fossilSoundRef.current?.fade(fossilSoundRef.current.volume(), 0, 1000);
    }
  }, [theme, isPlaying, isLandingPage]);

  const toggleMute = () => {
    setIsPlaying(!isPlaying);
  };

  if (isLandingPage) {
    return null; // Don't render the volume toggle on the landing page
  }

  return (
    <button
      onClick={toggleMute}
      className={clsx(
        "fixed bottom-6 right-6 z-50 p-3 rounded-full border transition-all duration-500 hover:scale-110",
        theme === 'fossil' 
          ? "bg-[#0F1A12] border-[#C4A96B] text-[#C4A96B]" 
          : "bg-[#081A0F] border-[#4CAF7D] text-[#4CAF7D]"
      )}
      aria-label="Toggle Ambient Audio"
    >
      {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
    </button>
  );
}
