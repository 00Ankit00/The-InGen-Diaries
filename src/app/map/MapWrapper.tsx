'use client';

import dynamic from 'next/dynamic';

const MapClient = dynamic(() => import('./MapClient'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-[#040F08]">
      <div className="text-[#00FF7F] tracking-widest animate-pulse font-data text-sm">
        INITIALIZING SATELLITE UPLINK...
      </div>
    </div>
  )
});

export default function MapWrapper() {
  return <MapClient />;
}
