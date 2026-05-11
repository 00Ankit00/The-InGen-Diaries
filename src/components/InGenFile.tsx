import React from 'react';
import { Creature } from '@/data/creatures';
import { RedactedText } from './RedactedText';
import { ThreatLevel } from './ThreatLevel';
import { Dna, ShieldAlert, FileTerminal } from 'lucide-react';

export function InGenFile({ creature }: { creature: Creature }) {
  const data = creature.ingen_section;
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 font-data text-[#E2FFE2]">
      {/* Left Column: Details */}
      <div className="lg:col-span-2 flex flex-col gap-10">
        
        {/* Terminal Header */}
        <div className="border border-[#1A6B3A] bg-[#081A0F] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 reveal-element">
          <div className="flex items-center gap-3 text-[#00FF7F]">
            <FileTerminal className="w-6 h-6" />
            <h2 className="text-2xl tracking-widest leading-none">ASSET FILE</h2>
          </div>
          <div className="text-right">
            <div className="text-xs text-[#4CAF7D] tracking-widest">FILE NUMBER</div>
            <div className="text-xl text-[#00FF7F] tracking-wider">{data.file_number}</div>
          </div>
        </div>

        {/* Core Specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-element">
          <div>
            <h3 className="text-[#4CAF7D] text-sm tracking-widest mb-3 border-b border-[#1A6B3A] pb-1 flex items-center justify-between">
              <span className="flex items-center"><Dna className="w-4 h-4 mr-2" /> GENETIC DONORS</span>
              {data.clone_species_count && (
                 <span className="text-xs bg-[#4CAF7D]/20 text-[#00FF7F] px-2 py-0.5 rounded border border-[#4CAF7D]/50 font-bold">
                   COUNT: {data.clone_species_count}
                 </span>
              )}
            </h3>
            <ul className="space-y-2 text-sm opacity-90">
              {data.dna_donors.map((donor, idx) => (
                <li key={idx}>:: <RedactedText>{donor}</RedactedText></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-[#4CAF7D] text-sm tracking-widest mb-3 border-b border-[#1A6B3A] pb-1">
               MODIFICATIONS / DEVIATIONS
            </h3>
            <ul className="space-y-2 text-sm opacity-90">
              {data.modifications.map((mod, idx) => (
                <li key={idx}>- <RedactedText>{mod}</RedactedText></li>
              ))}
            </ul>
            {data.notable_traits && data.notable_traits.length > 0 && (
              <div className="mt-4 pt-4 border-t border-[#1A6B3A]/50">
                <h4 className="text-[#00FF7F] text-xs tracking-widest mb-2">NOTABLE TRAITS</h4>
                <ul className="space-y-1 text-sm opacity-90">
                  {data.notable_traits.map((trait, idx) => (
                    <li key={idx} className="flex gap-2">
                       <span className="text-[#4CAF7D]">&gt;</span> <RedactedText>{trait}</RedactedText>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Expanded Lore */}
        {data.expanded_lore && (
          <div className="reveal-element bg-[#081A0F]/80 p-5 border-l-2 border-[#00FF7F] shadow-[0_0_15px_rgba(0,255,127,0.05)]">
            <h3 className="text-[#4CAF7D] text-xs tracking-widest mb-2 font-bold uppercase">EXPANDED BACKGROUND LORE // DECRYPTED</h3>
            <p className="text-sm leading-relaxed opacity-95">
              {data.expanded_lore}
            </p>
          </div>
        )}

        {/* Incidents / Containment */}
        <div className="reveal-element">
          <h3 className="text-alert text-sm tracking-widest mb-3 border-b border-[#1A6B3A] pb-1 flex items-center">
            <ShieldAlert className="w-4 h-4 mr-2" /> CONTAINMENT PROTOCOL
          </h3>
          <p className="text-sm border-l-2 border-alert pl-4 py-1 bg-alert/5">
            <RedactedText>{data.containment}</RedactedText>
          </p>
        </div>

        <div className="mt-2 reveal-element">
          <h3 className="text-[#4CAF7D] text-sm tracking-widest mb-3 border-b border-[#1A6B3A] pb-1">
            NOTABLE INCIDENTS
          </h3>
          <ul className="space-y-4">
            {data.incidents.map((incident, idx) => {
              const parts = incident.split(':');
              return (
                <li key={idx} className="flex flex-col gap-1 text-sm bg-[#081A0F] p-3 border border-[#1A6B3A]">
                  {parts.length > 1 ? (
                    <>
                      <span className="text-[#00FF7F] font-bold">[{parts[0]}]</span>
                      <span className="opacity-90 pl-2 border-l border-[#4CAF7D] ml-1"><RedactedText>{parts.slice(1).join(':')}</RedactedText></span>
                    </>
                  ) : (
                    <RedactedText>{incident}</RedactedText>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Middle Column: Fandom Picture */}
      <div className="lg:col-span-1 flex flex-col pt-4 sm:pt-0 reveal-element">
        {creature.fandom_picture ? (
          <div className="border border-[#1A6B3A] bg-[#081A0F] p-2 h-fit mb-4 shadow-[0_0_20px_rgba(0,255,127,0.15)] max-w-full">
            <div className="text-[#4CAF7D] text-xs tracking-widest mb-2 border-b border-[#1A6B3A] pb-1 font-bold">
              VISUAL ASSET // CLEARANCE GRANTED
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={creature.fandom_picture} referrerPolicy="no-referrer" alt={creature.common_name} className="w-full h-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300" />
          </div>
        ) : null}
      </div>

      {/* Right Column: Status Box */}
      <div className="lg:col-span-1 bg-[#081A0F] border border-[#1A6B3A] p-6 h-fit relative">
        <div className="absolute top-0 right-0 bg-[#1A6B3A] text-black text-xs font-bold px-2 py-1 tracking-widest">
          SYSTEM CLASSIFIED
        </div>

        <div className="mt-6 mb-8">
          <ThreatLevel level={creature.threat_level} />
        </div>

        <div className="space-y-6">
          <div>
            <div className="text-xs text-[#4CAF7D] tracking-widest mb-1">CLASSIFICATION</div>
            <div className={`text-lg uppercase tracking-wider font-bold ${data.classification === 'Classified' || data.classification === 'Restricted' ? 'text-alert' : 'text-[#E2FFE2]'}`}>
              [{data.classification}]
            </div>
          </div>

          <div>
             <div className="text-xs text-[#4CAF7D] tracking-widest mb-1">INITIAL CLONING DATE</div>
             <div className="text-lg tracking-wider">
               <RedactedText>{data.creation_date}</RedactedText>
             </div>
          </div>
          
          <div>
            <div className="text-xs text-[#4CAF7D] tracking-widest mb-1">STATUS</div>
            <div className="text-lg text-alert tracking-wider">
              ASSET OUT OF CONTAINMENT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
