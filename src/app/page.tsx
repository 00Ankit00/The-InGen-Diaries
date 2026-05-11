import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/video/upscaled-video.mp4" type="video/mp4" />
      </video>

      {/* Overlays to mask low resolution and add cinematic feel */}
      <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_100%)] z-10 pointer-events-none opacity-90"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto -mt-20">
        <h1 className="font-heading text-6xl md:text-8xl text-[#E8E0D0] tracking-[0.2em] mb-8 drop-shadow-[0_0_20px_rgba(232,224,208,0.3)]">
          THE INGEN<br />DIARIES
        </h1>
        
        <div className="w-24 h-[1px] bg-[#C4A96B]/50 mb-8"></div>

        <p className="font-section text-lg md:text-xl text-[#C4A96B] italic tracking-widest mb-8 max-w-2xl opacity-80 leading-loose">
          "Creation is an act of sheer will. Next time it will be flawless."
          <br /><br />
          Delve into the classified archives of International Genetic Technologies. 
          Discover the truth behind the miracles, the mistakes, and the monsters.
        </p>
      </div>

      {/* CTA Button positioned at the bottom */}
      <div className="absolute bottom-16 z-20 w-full flex justify-center px-4">
        <Link 
          href="/selection"
          className="group relative px-10 py-5 border border-[#C4A96B]/30 hover:border-[#C4A96B]/80 bg-black/50 hover:bg-[#1A1A1A]/80 backdrop-blur-md transition-all duration-700 rounded-sm overflow-hidden flex items-center justify-center cursor-pointer"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(196,169,107,0.15)_0%,_transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <span className="relative z-10 font-section uppercase tracking-[0.4em] text-[#E8E0D0]/80 group-hover:text-[#F0A500] text-sm md:text-base transition-colors duration-500 drop-shadow-sm">
            Let Life Find A Way
          </span>
        </Link>
      </div>
    </div>
  );
}
