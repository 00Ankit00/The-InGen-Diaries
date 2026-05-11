'use client';

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { creatures } from '@/data/creatures';
import { useTheme } from '@/components/ThemeProvider';
import Link from 'next/link';
import { getAllFossilOccurrences } from '@/lib/api';

// Center off the coast of Costa Rica (pretending this is Isla Nublar/Sorna territory)
const MAP_CENTER: [number, number] = [9.5, -84.5];

// Spread all creatures dynamically across the map with deterministic psuedo-random offsets
const MARKER_DATA = creatures.map((creature, i) => {
  // Base center [9.5, -84.5]
  // Use Math.sin and cos based on index to create a dispersed circular/scattered formation
  const offsetLat = Math.sin(i * 13.5) * 0.25; 
  const offsetLng = Math.cos(i * 18.2) * 0.25;

  return {
    slug: creature.slug,
    lat: 9.5 + offsetLat,
    lng: -84.5 + offsetLng,
    sector: `SECTOR ${i + 1} - ${creature.ingen_section.classification.toUpperCase()} CONTAINMENT`
  };
});

// Fix for default Leaflet icons in Webpack/Next setups
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom Icon definitions
const getCustomIcon = (theme: string, isHybrid: boolean) => {
  const color = isHybrid ? '#FF4444' : (theme === 'fossil' ? '#F0A500' : '#00FF7F');
  
  return L.divIcon({
    className: 'custom-leaflet-icon',
    html: `
      <div style="
        background-color: ${color};
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 2px solid black;
        box-shadow: 0 0 10px ${color};
        transform: translate(-50%, -50%);
      "></div>
    `,
    iconSize: [16, 16],
    iconAnchor: [8, 8]
  });
};

export default function MapClient() {
  const { theme } = useTheme();
  const [fossilCoords, setFossilCoords] = useState<{lat: number, lng: number, commonName: string}[]>([]);

  useEffect(() => {
    let active = true;
    if (theme === 'fossil' && fossilCoords.length === 0) {
      getAllFossilOccurrences(creatures).then(data => {
        if (active) setFossilCoords(data);
      });
    }
    return () => { active = false; };
  }, [theme, fossilCoords.length]);

  return (
    <div className="w-full h-full relative z-0">
      <MapContainer 
        center={MAP_CENTER} 
        zoom={9} 
        scrollWheelZoom={true} 
        style={{ height: '100%', width: '100%', backgroundColor: '#040F08' }}
        zoomControl={false}
      >
        {/* CartoDB Dark Matter Base */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {/* Dynamic Markers */}
        {MARKER_DATA.map((data, idx) => {
          const creature = creatures.find(c => c.slug === data.slug);
          if (!creature) return null;

          return (
            <Marker 
              key={idx} 
              position={[data.lat, data.lng]}
              icon={getCustomIcon(theme, creature.type === 'ingen_hybrid')}
            >
              <Popup className="ingen-popup">
                <div className="font-data bg-black text-[#E2FFE2] p-2 border border-[#1A6B3A] min-w-[200px]">
                  <div className="text-[10px] tracking-widest text-[#4CAF7D] mb-1">
                    {data.sector}
                  </div>
                  <h3 className="text-sm font-bold text-[#00FF7F] tracking-widest uppercase mb-3 border-b border-[#1A6B3A] pb-1">
                    {creature.common_name}
                  </h3>
                  
                  <div className="text-[10px] text-white/70 mb-3 uppercase tracking-wider">
                    THREAT LEVEL: {creature.threat_level}
                  </div>

                  <Link 
                    href={`/creature/${creature.slug}`}
                    className="block w-full text-center py-1 text-black bg-[#00FF7F] hover:bg-white transition-colors text-xs tracking-widest uppercase font-bold"
                  >
                    View Asset File
                  </Link>
                </div>
              </Popup>
            </Marker>
          );
        })}

        {/* Real-World Fossil Occurrence Markers */}
        {theme === 'fossil' && fossilCoords.map((coord, idx) => (
          <Marker 
            key={`fossil-${idx}`} 
            position={[coord.lat, coord.lng]}
            icon={L.divIcon({
              className: 'fossil-leaflet-icon',
              html: `
                <div style="
                  background-color: #F0A500;
                  width: 8px;
                  height: 8px;
                  border-radius: 50%;
                  opacity: 0.6;
                  box-shadow: 0 0 10px #F0A500;
                  transform: translate(-50%, -50%);
                "></div>
              `,
              iconSize: [8, 8],
              iconAnchor: [4, 4]
            })}
          >
            <Popup className="fossil-popup">
              <div className="font-data bg-[#0F1A12] text-[#E8E0D0] p-2 border border-[#C4A96B] min-w-[150px]">
                <div className="text-[10px] tracking-widest text-[#C4A96B] mb-1">
                   PBDB OCCURRENCE
                </div>
                <h3 className="text-sm font-bold text-[#F0A500] tracking-widest uppercase mb-1">
                  {coord.commonName}
                </h3>
                <div className="text-[10px] opacity-70">
                  LAT: {coord.lat.toFixed(4)}<br/>
                  LNG: {coord.lng.toFixed(4)}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Map Overlay UI */}
      <div className="absolute top-6 left-6 z-[1000] pointer-events-none">
        <h2 className="font-data text-2xl text-[#00FF7F] tracking-widest drop-shadow-[0_0_5px_rgba(0,255,127,0.5)]">
          GLOBAL TRACKING SYSTEM
        </h2>
        <div className="text-xs font-data text-white/50 tracking-widest mt-1 uppercase">
          SATELLITE POSITION: 9°30'0"N, 84°30'0"W
        </div>
      </div>
      
      {/* Target Crosshair */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 pointer-events-none z-[1000] opacity-30">
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#00FF7F]"></div>
        <div className="absolute left-0 right-0 top-1/2 h-px bg-[#00FF7F]"></div>
      </div>
    </div>
  );
}
