import React from 'react';
import TimelineClient from './TimelineClient';

export const metadata = {
  title: 'Incident Timeline | The InGen Diaries',
};

export default function TimelinePage() {
  return (
    <div className="min-h-screen pb-20">
      <TimelineClient />
    </div>
  );
}
