import React from 'react';
import RosterClient from './RosterClient';
import { getCreatures } from '@/data/creatures';

export const metadata = {
  title: 'Roster | The InGen Diaries'
};

export default async function RosterPage() {
  const creatures = await getCreatures();
  
  return <RosterClient initialCreatures={creatures} />;
}
