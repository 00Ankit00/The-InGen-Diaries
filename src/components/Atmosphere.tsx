'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

export function Atmosphere() {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{ x: number; y: number; size: number; speed: number; opacity: number }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor(window.innerWidth / 15);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2.5 + 0.5,
          speed: Math.random() * 0.3 + 0.1,
          opacity: Math.random() * 0.5 + 0.1
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (theme !== 'fossil') return;

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240, 165, 0, ${p.opacity})`;
        ctx.fill();

        // Move particle up slowly
        p.y -= p.speed;
        
        // Reset if it goes above screen
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
      });
      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener('resize', resize);
    resize();

    // Start loop if fossil
    if (theme === 'fossil') {
      drawParticles();
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear if ingen
    }

    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen opacity-60 transition-opacity duration-1000">
      
      {/* Fossil Background: Canvas Dust & SVG Noise */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${theme === 'fossil' ? 'opacity-100' : 'opacity-0'}`}
      />
      
      {/* Parchment Sub-texture for Fossil */}
      <div 
        className={`absolute inset-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj4KICA8ZmlsdGVyIGlkPSJub2lzZSI+CiAgICA8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44IiBudW1PY3RhdmVzPSI0IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+CiAgPC9maWx0ZXI+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4wNSIvPgo8L3N2Zz4=')] mix-blend-overlay transition-opacity duration-1000 ${theme === 'fossil' ? 'opacity-40' : 'opacity-0'}`}
      />

      {/* InGen Background: CRT Scanlines & Terminal Glow */}
      <div 
        className={`absolute inset-0 w-full h-full  bg-[linear-gradient(rgba(0,255,127,0.03)_1px,transparent_1px)] bg-[size:100%_3px] transition-opacity duration-1000 ${theme === 'ingen' ? 'opacity-100' : 'opacity-0'}`}
      />
      <div 
        className={`absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(4,15,8,0.7)_100%)] transition-opacity duration-1000 ${theme === 'ingen' ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
