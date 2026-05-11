import React from 'react';
import { Creature } from '@/data/creatures';
import { Ruler, Scale, Globe, AlertTriangle } from 'lucide-react';

export function FossilRecord({ creature, wikiSummary }: { creature: Creature, wikiSummary?: string | null }) {
  const data = creature.fossil_section;
  if (!data) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 font-body text-[#E8E0D0] reveal-element">
      {/* Left Column: Details */}
      <div className="lg:col-span-2 flex flex-col gap-8">
        <div className="reveal-element">
          <h2 className="font-heading text-3xl text-[#F0A500] mb-4">PALAEONTOLOGICAL RECORD</h2>
          {wikiSummary ? (
            <p className="text-lg leading-relaxed text-[#E8E0D0] opacity-90 mb-4">{wikiSummary}</p>
          ) : (
            <p className="text-lg leading-relaxed text-[#E8E0D0] opacity-70 italic">{data.description}</p>
          )}
        </div>

        <div className="reveal-element">
          <h3 className="font-heading text-2xl text-[#C4A96B] mb-2 flex items-center">
            <Globe className="w-5 h-5 mr-2" /> DISCOVERY
          </h3>
          <p className="leading-relaxed opacity-80">{data.discovery}</p>
        </div>

        {data.diet_details && (
          <div className="reveal-element">
            <h3 className="font-heading text-xl text-[#C4A96B] mb-2 flex items-center tracking-widest">
              DIETARY PROFILE
            </h3>
            <p className="leading-relaxed opacity-80">{data.diet_details}</p>
          </div>
        )}

        {data.extended_trivia && data.extended_trivia.length > 0 && (
          <div className="reveal-element bg-[#1A2E1E]/30 p-4 border-l-2 border-[#C4A96B]">
            <h3 className="font-heading text-xl text-[#C4A96B] mb-2 tracking-widest uppercase">
              NOTABLE PALAEONTOLOGY FACTS
            </h3>
            <ul className="list-disc list-inside space-y-2 opacity-80">
              {data.extended_trivia.map((trivia, idx) => (
                <li key={idx} className="leading-relaxed">{trivia}</li>
              ))}
            </ul>
          </div>
        )}

        {/* What the film got wrong */}
        <div className="mt-4 p-6 border-l-4 border-[#F0A500] bg-[#1A2E1E]/50 reveal-element">
          <div className="flex items-center gap-2 text-[#F0A500] mb-3">
            <AlertTriangle className="w-5 h-5" />
            <h4 className="font-heading tracking-widest text-xl">HOLLYWOOD INACCURACIES</h4>
          </div>
          <ul className="list-disc list-inside space-y-2 opacity-90">
            {data.film_accuracy_notes.map((note, idx) => (
              <li key={idx}>{note}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Middle Column: Fandom Picture */}
      <div className="lg:col-span-1 flex flex-col pt-2 reveal-element">
        {(creature.scientific_picture || creature.fandom_picture) ? (
          <div className="border border-[#1A2E1E] bg-[#0F1A12] p-2 h-fit mb-8 lg:mb-0 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
             <div className="text-[#C4A96B] font-heading text-sm tracking-widest mb-2 border-b border-[#1A2E1E] pb-1 uppercase">
               SCIENTIFIC DEPICTION
             </div>
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img src={creature.scientific_picture || creature.fandom_picture} referrerPolicy="no-referrer" alt={creature.common_name} className="w-full h-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300" />
          </div>
        ) : null}
      </div>

      {/* Right Column: Stats Box */}
      <div className="lg:col-span-1 bg-[#0F1A12] border border-[#1A2E1E] p-6 rounded-sm h-fit">
        <h3 className="font-heading text-2xl text-[#F0A500] tracking-widest mb-6 border-b border-[#1A2E1E] pb-2">PHYSICAL DIMENSIONS</h3>
        
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 text-[#C4A96B] mb-2 text-sm tracking-widest font-bold">
              <Ruler className="w-4 h-4" /> ESTIMATED LENGTH
            </div>
            <div className="flex items-end justify-between border-b border-white/5 pb-1">
              <span className="opacity-60 text-sm">Fossil Record</span>
              <span className="font-data text-xl text-white">{creature.real_length_m} meters</span>
            </div>
            <div className="flex items-end justify-between pt-1">
              <span className="opacity-60 text-sm">InGen Clone</span>
              <span className="font-data text-xl text-white">{creature.movie_length_m} meters</span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-[#C4A96B] mb-2 text-sm tracking-widest font-bold">
              <Scale className="w-4 h-4" /> ESTIMATED WEIGHT
            </div>
            <div className="flex items-end justify-between border-b border-white/5 pb-1">
              <span className="opacity-60 text-sm">Fossil Record</span>
              <span className="font-data text-xl text-white">{creature.real_weight_kg.toLocaleString()} kg</span>
            </div>
            <div className="flex items-end justify-between pt-1">
              <span className="opacity-60 text-sm">InGen Clone</span>
              <span className="font-data text-xl text-white">{creature.movie_weight_kg.toLocaleString()} kg</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#1A2E1E]">
          <div className="text-xs tracking-widest text-center text-[#C4A96B] mb-2 uppercase">Accuracy Rating</div>
          <div className="text-center bg-[#1A2E1E] py-2 rounded text-[#E8E0D0] font-bold tracking-widest">
            {data.accuracy_rating}
          </div>
        </div>
      </div>
    </div>
  );
}
