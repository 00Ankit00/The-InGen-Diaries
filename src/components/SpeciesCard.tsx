import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { useTheme } from './ThemeProvider';
import { Creature } from '@/data/creatures';
import { Ghost, ShieldAlert } from 'lucide-react';
import { ThreatLevel } from './ThreatLevel';

export function SpeciesCard({ creature }: { creature: Creature }) {
  const { theme } = useTheme();

  return (
    <Link href={`/creature/${creature.slug}`} className="block group">
      <div 
        className={clsx(
          "relative overflow-hidden h-[340px] p-6 transition-all duration-500 border",
          theme === 'fossil' 
            ? "bg-[#0F1A12] border-[#1A2E1E] hover:border-[#B8860B] hover:shadow-[0_0_30px_rgba(240,165,0,0.15)]" 
            : "bg-[#081A0F] border-[#1A6B3A] hover:border-[#00FF7F] hover:shadow-[0_0_30px_rgba(0,255,127,0.15)]"
        )}
      >
        {/* Background Ambient */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--color-accent-primary)_0%,_transparent_70%)]" />

        <div className="relative z-10 h-full flex flex-col justify-between">
          
          {/* Top Row */}
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-1">
              <span className={clsx(
                "px-2 py-0.5 text-[0.65rem] font-ui tracking-widest uppercase border inline-flex items-center w-fit",
                theme === 'fossil' ? 'border-[#C4A96B] text-[#C4A96B]' : 'border-[#4CAF7D] text-[#4CAF7D]'
              )}>
                {creature.type === 'ingen_hybrid' ? 'INGEN HYBRID' : creature.era.split(' ')[0]}
              </span>
              <span className={clsx("text-xs font-ui capitalize", theme === 'fossil' ? 'text-secondary' : 'text-secondary opacity-70')}>
                {creature.diet}
              </span>
            </div>
            
            <div className={clsx("font-data text-xs tracking-widest", theme === 'ingen' ? 'text-alert' : 'text-accent')}>
              {theme === 'ingen' ? creature.ingen_section.file_number : creature.id.padStart(3, '0')}
            </div>
          </div>

          {/* Center Graphic */}
          <div className="flex-1 flex items-center justify-center -my-4 relative">
            <div className={clsx(
              "w-28 h-28 rounded-full border border-dashed flex flex-col items-center justify-center transition-all duration-700",
              theme === 'fossil' ? 'border-[#1A2E1E] group-hover:border-[#C4A96B] group-hover:bg-[#1A2E1E]/30' : 'border-[#1A6B3A] group-hover:border-[#4CAF7D] group-hover:bg-[#040F08]'
            )}>
              {theme === 'fossil' && creature.silhouette_url ? (
                <div 
                  className="w-12 h-12 transition-colors duration-700 bg-[#C4A96B]"
                  style={{ 
                    WebkitMaskImage: `url('${creature.silhouette_url}')`, 
                    maskImage: `url('${creature.silhouette_url}')`, 
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
                <img src="https://static.wikia.nocookie.net/jurassicpark/images/c/c0/Logo_2.png/revision/latest/scale-to-width-down/1000?cb=20190111111516" referrerPolicy="no-referrer" alt="InGen" className={clsx("w-3/4 h-3/4 object-contain transition-opacity duration-700", theme === 'fossil' ? 'opacity-80' : 'opacity-100')} />
              ) : theme === 'ingen' ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src="/Jurassic%20World%20Dominion.jpg" alt="Jurassic World Dominion" className="w-[85%] h-[85%] object-cover rounded-full opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
              ) : (
                <Ghost className="w-12 h-12 text-[#E8E0D0]" />
              )}
            </div>
          </div>

          {/* Bottom Info */}
          <div className="flex flex-col gap-3">
            <div>
              <h3 className={clsx(
                "text-2xl font-heading tracking-wider truncate transition-colors duration-300",
                theme === 'fossil' ? 'text-primary group-hover:text-accent' : 'text-primary group-hover:text-accent'
              )}>
                {creature.common_name}
              </h3>
              <p className="text-xs font-section italic text-secondary truncate">
                {theme === 'fossil' ? creature.scientific_name : `// CLONED: ${creature.ingen_section.creation_date}`}
              </p>
            </div>
            
            <ThreatLevel level={creature.threat_level} />
          </div>
        </div>
      </div>
    </Link>
  );
}
