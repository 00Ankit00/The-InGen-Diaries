'use client';

import React, { useState, useMemo } from 'react';
import { Creature } from '@/data/creatures';
import { SpeciesCard } from '@/components/SpeciesCard';
import { SectionToggle } from '@/components/SectionToggle';
import { useTheme } from '@/components/ThemeProvider';
import clsx from 'clsx';
import { Filter, Search } from 'lucide-react';

export default function RosterClient({ initialCreatures }: { initialCreatures: Creature[] }) {
  const { theme } = useTheme();
  
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterDiet, setFilterDiet] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<string>('threat_desc');

  const filteredCreatures = useMemo(() => {
    return initialCreatures
      .filter((c) => {
        if (search && !c.common_name.toLowerCase().includes(search.toLowerCase())) return false;
        if (filterType !== 'all' && c.type !== filterType) return false;
        if (filterDiet !== 'all' && c.diet !== filterDiet) return false;
        return true;
      })
      .sort((a, b) => {
        if (sortOrder === 'threat_desc') return b.threat_level - a.threat_level;
        if (sortOrder === 'alpha') return a.common_name.localeCompare(b.common_name);
        return 0;
      });
  }, [initialCreatures, search, filterType, filterDiet, sortOrder]);

  const borderClass = theme === 'fossil' ? 'border-[#1A2E1E]' : 'border-[#1A6B3A]';
  const selectBgHover = theme === 'fossil' ? 'hover:bg-[#1A2E1E]' : 'hover:bg-[#1A6B3A]';

  return (
    <div className="min-h-screen pb-20">
      {/* Header Sticky Bar */}
      <div className={clsx(
        "sticky top-0 z-40 w-full border-b backdrop-blur-md px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 transition-colors duration-500",
        theme === 'fossil' ? 'bg-[#080C0A]/80 border-[#1A2E1E]' : 'bg-[#040F08]/80 border-[#1A6B3A]'
      )}>
        <h1 className="font-heading text-3xl tracking-widest text-primary shrink-0">ROSTER</h1>
        
        <div className="flex-1 flex justify-center">
          <SectionToggle />
        </div>
        
        <div className="flex shrink-0 gap-3">
           <div className={clsx("relative flex items-center border rounded-full px-3 py-1", borderClass)}>
             <Search className="w-4 h-4 text-secondary mr-2" />
             <input 
               type="text" 
               placeholder="Search database..." 
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               className="bg-transparent border-none outline-none text-sm font-ui text-primary w-32 md:w-48 placeholder:text-secondary placeholder:opacity-50"
             />
           </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 py-8 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className={clsx("w-full md:w-64 shrink-0 flex flex-col gap-6 font-ui p-6 rounded-lg h-fit border", theme === 'fossil' ? 'bg-[#0F1A12] border-[#1A2E1E]' : 'bg-[#081A0F] border-[#1A6B3A]')}>
          <div className="flex items-center gap-2 text-primary font-heading text-xl mb-2">
            <Filter className="w-5 h-5" /> Filters
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-xs text-secondary tracking-widest uppercase">Type</label>
            <select 
              value={filterType} 
              onChange={(e) => setFilterType(e.target.value)}
              className={clsx("bg-transparent border rounded p-2 text-sm text-primary appearance-none cursor-pointer", borderClass, selectBgHover)}
            >
              <option value="all" className="bg-card">All Types</option>
              <option value="real" className="bg-card">Real Species</option>
              <option value="ingen_hybrid" className="bg-card">InGen Hybrids</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs text-secondary tracking-widest uppercase">Diet</label>
            <select 
              value={filterDiet} 
              onChange={(e) => setFilterDiet(e.target.value)}
              className={clsx("bg-transparent border rounded p-2 text-sm text-primary appearance-none cursor-pointer", borderClass, selectBgHover)}
            >
              <option value="all" className="bg-card">All Diets</option>
              <option value="carnivore" className="bg-card">Carnivore</option>
              <option value="herbivore" className="bg-card">Herbivore</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 pt-4 border-t border-theme">
            <label className="text-xs text-secondary tracking-widest uppercase">Sort By</label>
            <select 
              value={sortOrder} 
              onChange={(e) => setSortOrder(e.target.value)}
              className={clsx("bg-transparent border rounded p-2 text-sm text-primary appearance-none cursor-pointer", borderClass, selectBgHover)}
            >
              <option value="threat_desc" className="bg-card">Threat Level (High-Low)</option>
              <option value="alpha" className="bg-card">Alphabetical</option>
            </select>
          </div>
        </aside>

        {/* Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCreatures.map((creature) => (
              <SpeciesCard key={creature.id} creature={creature} />
            ))}
          </div>
          {filteredCreatures.length === 0 && (
            <div className="w-full py-20 flex justify-center text-secondary font-ui italic">
              No matching records found in the database.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
