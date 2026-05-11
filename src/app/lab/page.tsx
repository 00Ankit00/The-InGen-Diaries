import React from 'react';
import { getCreatures } from '@/data/creatures';
import Link from 'next/link';
import { ShieldAlert, Dna } from 'lucide-react';
import { RedactedText } from '@/components/RedactedText';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hybrid Genome Lab | The InGen Diaries',
  description: 'Experimental genetic combination facility.',
};

export default async function LabPage() {
  const creatures = await getCreatures();
  const hybrids = creatures.filter(c => c.type === 'ingen_hybrid' && c.hybrid_genome);

  return (
    <div data-theme="ingen" className="min-h-screen bg-[#040F08] text-[#E2FFE2] font-data py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <header className="mb-16 border-b border-[#1A6B3A] pb-8">
          <h1 className="text-4xl text-[#00FF7F] tracking-[0.2em] mb-2 flex items-center gap-4">
            <MicroscopeIcon className="w-10 h-10" /> 
            ASSET CREATION LAB
          </h1>
          <p className="opacity-80 text-sm tracking-widest uppercase">
            RESTRICTED ACCESS. UNAUTHORIZED VIEWING IS A TERMINABLE OFFENSE.
          </p>
        </header>

        <div className="flex flex-col gap-24">
          {hybrids.map((hybrid) => {
            const genome = hybrid.hybrid_genome!;
            return (
              <div key={hybrid.id} className="relative border border-[#1A6B3A] bg-[#081A0F] p-8">
                {/* Background decorative styling */}
                <div className="absolute top-0 right-0 bg-[#1A6B3A] text-black font-bold px-3 py-1 text-xs tracking-widest">
                  PROJECT: {hybrid.slug.toUpperCase()}
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-start">
                  
                  {/* Left Col: Info */}
                  <div className="w-full md:w-1/3">
                    <Link href={`/creature/${hybrid.slug}`} className="group">
                      <div className="w-24 h-24 rounded-full border border-dashed border-[#4CAF7D] bg-black flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="https://static.wikia.nocookie.net/jurassicpark/images/c/c0/Logo_2.png/revision/latest/scale-to-width-down/1000?cb=20190111111516" referrerPolicy="no-referrer" alt="InGen Logo" className="w-3/4 h-3/4 object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>
                      <h2 className="text-3xl text-[#00FF7F] tracking-widest mb-1 group-hover:underline">{hybrid.common_name}</h2>
                    </Link>
                    <div className="text-alert text-sm tracking-widest mb-6">[{hybrid.ingen_section.classification}]</div>
                    
                    <div className="border-t border-[#1A6B3A] pt-4 mt-6">
                      <div className="text-xs text-[#4CAF7D] tracking-widest mb-2">MODIFICATION NOTES</div>
                      <p className="text-sm opacity-90 leading-relaxed border-l-2 border-[#1A6B3A] pl-3">
                        <RedactedText>{genome.modification_notes}</RedactedText>
                      </p>
                    </div>
                  </div>

                  {/* Right Col: Genome Breakdown */}
                  <div className="w-full md:w-2/3 flex flex-col gap-6">
                    <h3 className="text-[#4CAF7D] text-sm tracking-widest flex items-center border-b border-[#1A6B3A] pb-2">
                      <Dna className="w-4 h-4 mr-2" /> GENOME SEQUENCE SPLIT
                    </h3>
                    
                    {/* Base Genome Bar */}
                    <div>
                      <div className="flex justify-between text-xs tracking-widest mb-1">
                        <span>BASE: {genome.base_species.toUpperCase()}</span>
                        <span className="text-[#00FF7F]">{genome.base_percentage}%</span>
                      </div>
                      <div className="w-full h-4 bg-black border border-[#1A6B3A]">
                        <div 
                          className="h-full bg-[#00FF7F]/80" 
                          style={{ width: `${genome.base_percentage}%` }}
                        />
                      </div>
                    </div>

                    {/* Donors List */}
                    <div className="space-y-4 mt-4">
                      {genome.donors.map((donor, idx) => (
                        <div key={idx} className="relative pl-6">
                          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#1A6B3A]"></div>
                          <div className="absolute left-0 top-2 w-4 h-px bg-[#1A6B3A]"></div>
                          
                          <div className="flex justify-between items-end mb-1">
                            <span className="text-sm tracking-widest uppercase text-[#4CAF7D]">
                              <RedactedText>{donor.species}</RedactedText>
                            </span>
                            <span className="text-xs opacity-70">{donor.pct}%</span>
                          </div>
                          
                          <div className="w-full h-1 bg-black overflow-hidden mb-2">
                            <div 
                              className="h-full bg-alert/80" 
                              style={{ width: `${donor.pct}%` }}
                            />
                          </div>
                          
                          <div className="text-xs opacity-75">
                            Targeted Trait: <span className="text-white"><RedactedText>{donor.trait}</RedactedText></span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MicroscopeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  );
}
