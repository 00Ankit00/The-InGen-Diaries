import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCreatures, getCreatureBySlug } from '@/data/creatures';
import { SectionToggle } from '@/components/SectionToggle';
import { FossilRecord } from '@/components/FossilRecord';
import { InGenFile } from '@/components/InGenFile';
import { ArrowLeft, Ghost, ShieldAlert } from 'lucide-react';
import CreatureClient from './CreatureClient'; // We need a client wrapper for the contextual theme rendering.

export async function generateStaticParams() {
  const creatures = await getCreatures();
  return creatures.map((creature) => ({
    slug: creature.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const creature = await getCreatureBySlug(resolvedParams.slug);
  if (!creature) return { title: 'Not Found' };
  return {
    title: `${creature.common_name} | The InGen Diaries`,
    description: `Details and records for ${creature.common_name} (${creature.scientific_name}).`,
  };
}

import { getWikipediaSummary, getPhyloPicSilhouette } from '@/lib/api';

export default async function CreaturePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const creature = await getCreatureBySlug(resolvedParams.slug);
  if (!creature) notFound();

  // Fetch Wikipedia summary
  let wikiSummary: string | null = null;
  if (creature.type === 'real') {
    wikiSummary = await getWikipediaSummary(creature.scientific_name);
  }

  // PhyloPic URL now comes natively from getCreatures()
  const phylopicUrl = creature.silhouette_url || null;

  return (
    <div className="min-h-screen pb-20 overflow-x-hidden">
      <CreatureClient 
        creature={creature} 
        wikiSummary={wikiSummary} 
        phylopicUrl={phylopicUrl} 
      />
    </div>
  );
}
