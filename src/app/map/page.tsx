import React from 'react';
import MapWrapper from './MapWrapper';

export const metadata = {
  title: 'Island Map | The InGen Diaries',
};

export default function MapPage() {
  return (
    <div className="w-full h-[calc(100vh-64px)] overflow-hidden">
      <MapWrapper />
    </div>
  );
}
