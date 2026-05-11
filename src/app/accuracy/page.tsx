import React from 'react';
import AccuracyClient from './AccuracyClient';

export const metadata = {
  title: 'Real vs Reel | The InGen Diaries',
  description: 'Comparing InGen assets to the paleontological record.',
};

export default function AccuracyPage() {
  return (
    <div className="min-h-screen pb-20">
      <AccuracyClient />
    </div>
  );
}
