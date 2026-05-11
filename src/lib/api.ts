'use server';

import { Creature } from '@/data/creatures';

const WIKI_API = process.env.NEXT_PUBLIC_WIKI_API_URL || "https://en.wikipedia.org/api/rest_v1/page/summary";
const PHYLOPIC_API = process.env.NEXT_PUBLIC_PHYLOPIC_API_URL || "https://api.phylopic.org";
const PBDB_API = process.env.NEXT_PUBLIC_PBDB_API_URL || "https://paleobiodb.org/data1.2/occs/list.json";

export async function getWikipediaSummary(scientificName: string): Promise<string | null> {
  try {
    // Usually the genus name works best for Wikipedia titles
    const genus = scientificName.split(' ')[0];
    const res = await fetch(`${WIKI_API}/${genus}`);
    if (!res.ok) return null;
    const data = await res.json();
    return data.extract || null;
  } catch (err) {
    console.error("Wikipedia fetch error:", err);
    return null;
  }
}

export async function getPhyloPicSilhouette(scientificName: string): Promise<string | null> {
  try {
    const genus = scientificName.split(' ')[0].toLowerCase();
    
    // Add a 5-second timeout to prevent the API from hanging the application
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const initialRes = await fetch(`${PHYLOPIC_API}/images?filter_name=${genus}`, { 
      cache: 'force-cache',
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);

    if (!initialRes.ok) return null;
    const initialData = await initialRes.json();
    
    if (initialData._links?.firstPage?.href) {
      const pageController = new AbortController();
      const pageTimeoutId = setTimeout(() => pageController.abort(), 5000);

      const pageRes = await fetch(`${PHYLOPIC_API}${initialData._links.firstPage.href}&embed_items=true`, { 
        cache: 'force-cache',
        signal: pageController.signal
      });
      
      clearTimeout(pageTimeoutId);

      if (!pageRes.ok) return null;
      const pageData = await pageRes.json();
      
      if (pageData._embedded?.items?.length > 0) {
        const item = pageData._embedded.items[0];
        if (item._links?.vectorFile?.href) {
          return item._links.vectorFile.href;
        } else if (item._links?.rasterFiles?.length > 0) {
          return item._links.rasterFiles[0].href;
        }
      }
    }
  } catch (err: any) {
    if (err.name === 'AbortError') {
      console.warn(`PhyloPic fetch timed out for ${scientificName}`);
    } else {
      console.error(`PhyloPic fetch error for ${scientificName}:`, err.message || err);
    }
  }
  return null;
}

export async function getAllFossilOccurrences(creatures: Creature[]): Promise<{lat: number, lng: number, commonName: string}[]> {
  try {
    // Only real creatures
    const realCreatures = creatures.filter(c => c.type === 'real');
    // Extract unique genus names
    const taxaSet = new Set(realCreatures.map(c => c.scientific_name.split(' ')[0]));
    const taxaString = Array.from(taxaSet).join(',');
    
    // Fetch from PBDB. limit=500 to keep payload manageable but comprehensive.
    const res = await fetch(`${PBDB_API}?taxon_name=${taxaString}&show=coords&limit=500`);
    if (!res.ok) return [];
    
    const data = await res.json();
    
    if (!data.records) return [];

    // Map PBDB records back to our common names
    const genusToCommonName: Record<string, string> = {};
    realCreatures.forEach(c => {
      genusToCommonName[c.scientific_name.split(' ')[0].toLowerCase()] = c.common_name;
    });

    return data.records.map((record: any) => {
      // PBDB 'tna' is the matched taxon name. 
      const tnaBase = record.tna.split(' ')[0].toLowerCase();
      const commonName = genusToCommonName[tnaBase] || record.tna;
      
      return {
        lat: parseFloat(record.lat),
        lng: parseFloat(record.lng),
        commonName: commonName
      };
    });
  } catch (err) {
    console.error("PBDB fetch error:", err);
    return [];
  }
}
