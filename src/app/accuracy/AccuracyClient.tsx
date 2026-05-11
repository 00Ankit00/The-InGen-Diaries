'use client';

import React from 'react';
import { useTheme } from '@/components/ThemeProvider';
import clsx from 'clsx';
import { RedactedText } from '@/components/RedactedText';

export default function AccuracyClient() {
  const { theme } = useTheme();

  return (
    <div className={clsx(
      "w-full transition-colors duration-700 font-body px-6 py-20",
      theme === 'fossil' ? "bg-transparent text-[#E8E0D0]" : "bg-transparent text-[#E2FFE2]"
    )}>
      
      <div className="max-w-[800px] mx-auto animate-in fade-in slide-in-from-bottom flex flex-col gap-12">
        
        {theme === 'fossil' ? (
          // FOSSIL MODE: WHITE PAPER
          <>
            <header className="border-b-2 border-[#F0A500] pb-6">
              <div className="text-[#C4A96B] font-ui tracking-widest text-sm mb-2 uppercase">Paleontology Review</div>
              <h1 className="font-heading text-5xl md:text-6xl text-[#F0A500]">REAL DINO FACTS vs HOLLYWOOD FICTION</h1>
              <p className="mt-4 text-xl opacity-90 leading-relaxed font-serif">
                A scientific breakdown of the anatomical and behavioral inaccuracies depicted in modern cinematic portrayals of prehistoric life.
              </p>
            </header>

            <article className="prose prose-invert prose-amber max-w-none space-y-8 font-serif leading-relaxed text-lg">
              <p>
                When it comes to prehistoric reconstruction, the lines between paleontology and entertainment are often blurred. While films excel at inspiring a new generation of scientists, they frequently sacrifice established scientific facts for cinematic spectacle. 
              </p>
              
              <h2 className="text-3xl font-heading text-[#C4A96B] mt-12 mb-4">The Feather Problem</h2>
              <p>
                The most glaring omission in cinematic dinosaurs is the complete lack of feathers on dromaeosaurs. Extensive fossil evidence, such as quill knobs on Velociraptor forelimbs found in Mongolia, proved conclusively that these animals were fully plumed, much like modern turkeys or eagles. Stripping them of feathers renders them practically naked in a biological sense.
              </p>

              <h2 className="text-3xl font-heading text-[#C4A96B] mt-12 mb-4">Supersized Monsters</h2>
              <p>
                Size inflation is rampant. The real Velociraptor was roughly the size of a medium dog and weighed no more than 15kg. The cinematic versions were scaled up to match the proportions of Deinonychus or Utahraptor to appear more threatening. Similarly, the Mosasaurus was scaled well beyond its maximum known length of 17 meters, stretched to near Kaiju proportions to swallow passing great white sharks whole.
              </p>

              <div className="p-6 border border-[#C4A96B] bg-[#1A2E1E]/40 mt-12 italic">
                "We must remember that these were animals, not archetypal monsters. They slept, they nurtured their young, and they succumbed to disease. They were not endless killing machines." — Paleontology Today
              </div>
            </article>
          </>
        ) : (
          // INGEN MODE: COVER UP
          <>
            <header className="border-b-2 border-[#1A6B3A] pb-6 font-data">
              <div className="text-[#4CAF7D] tracking-widest text-sm mb-2">INTERNAL MEMO // CLASSIFIED</div>
              <h1 className="text-4xl text-[#00FF7F] tracking-[0.1em]">ASSET MITIGATION & PR DEFENSE PROTOCOL</h1>
              <p className="mt-4 text-sm opacity-90 leading-relaxed uppercase border-l-4 border-alert pl-4">
                Strict adherence to the following talking points is mandatory when engaging with the academic press regarding genetic sequencing anomalies.
              </p>
            </header>

            <article className="font-data tracking-wide max-w-none space-y-8 text-sm">
              <p>
                We have long maintained that our cloning process is not a direct replication mechanism. Dr. Wu's implementation of amphibian and avian DNA to patch sequencing gaps resulted in unintended morphological deviations. We refer to these internally as <RedactedText>Version 1.0 biological aberrations</RedactedText>. Our animals are theme park monsters. Nothing more.
              </p>
              
              <div className="bg-[#081A0F] border border-[#1A6B3A] p-6">
                <h2 className="text-xl text-[#00FF7F] mb-4 border-b border-[#1A6B3A] pb-2">Addressing "The Feather Problem"</h2>
                <p className="opacity-90">
                  When confronted about the lack of plumage on our V. mongoliensis assets, staff must reiterate that the inclusion of <RedactedText>Hyperolius viridiflavus</RedactedText> DNA actively suppressed follicle development. Do not mention that market research dictated consumers found scaly assets "scarier".
                </p>
              </div>

              <div className="bg-[#081A0F] border border-[#1A6B3A] p-6">
                <h2 className="text-xl text-[#00FF7F] mb-4 border-b border-[#1A6B3A] pb-2">Addressing Asset Scaling</h2>
                <p className="opacity-90">
                  PR must combat accusations of "size inflation". Growth hormone acceleration was necessary to hit park opening schedules. The Mosasaurus asset exceeded projected mass due to <RedactedText>unregulated feeding metrics and experimental thyroid manipulation</RedactedText>. Under no circumstances are the true dimensions of Sector 4 assets to be published.
                </p>
              </div>

              <div className="border border-alert p-6 text-alert mt-12">
                "Nothing in Jurassic World is natural. We have always filled gaps in the genome with the DNA of other animals. And if the genetic code was pure, many of them would look quite different. But you didn't ask for reality. You asked for more teeth." — <RedactedText>Chief Geneticist, H. Wu</RedactedText>
              </div>
            </article>
          </>
        )}

      </div>
    </div>
  );
}
