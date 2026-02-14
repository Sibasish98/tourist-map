"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { useMapContext } from "react-simple-maps";

import { getCrowdColor } from '@/lib/mapStyles'
import SpotInfoCard from "../spot-info/SpotInfoCard";
import MapOverlayBubble from "../spot-info/SpotInfoCard";
import LoadingOverlay from "../loading-overlay/LoadingOverlay";

const geoUrl = "/maps/india.geojson";

export type Spot = {
  reason?: string;
  name: string;
  lat: number;
  lng: number;
  weight: number;
};

export default function MapView({
  spots,
  dimmed = false,
  selectedSpot,
  setSelectedSpot,
}: {
  spots: Spot[],
  dimmed?: boolean;
  selectedSpot: Spot | null;
  setSelectedSpot: (spot: Spot | null) => void;
}) {
  return (
<div className={`relative ${dimmed ? "opacity-60 relative" : ""}`}>
      <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        center: [82, 22],
        scale: 900,
      }}
      className="w-full h-full"
    >
      {/* India map */}
      <Geographies geography={geoUrl}>
        {({ geographies }: { geographies: any[] }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#E5E7EB"
              stroke="#374151"
            />
          ))
        }
      </Geographies>

      {/* Tourist spots */}
      {spots.map((spot) => (
       <Marker key={spot.name} coordinates={[spot.lng, spot.lat]}>
  <g onClick={() => setSelectedSpot(spot)} style={{ cursor: "pointer" }}>
   <circle
  r={
    selectedSpot?.name === spot.name
      ? 8 + spot.weight * 6
      : 4 + spot.weight * 6
  }
  onClick={() => setSelectedSpot(spot)}
  fill={getCrowdColor(spot.weight)}
  style={{
    cursor: "pointer",
    filter: `drop-shadow(0px 0px ${
      6 + spot.weight * 4
    }px ${getCrowdColor(spot.weight)})`,
    transition: "all 0.3s ease"
  }}
/>

    {/* {(spot.weight > 2 || selectedSpot?.name === spot.name) && (
      <text
        y={-10}
        textAnchor="middle"
        style={{
          fontSize: "10px",
          fontWeight: 600,
          fill: "#111827",
          pointerEvents: "none"
        }}
      >
        {spot.name}
      </text>
    )} */}
  </g>
</Marker>
      ))}
        {selectedSpot && (
          <Marker coordinates={[selectedSpot.lng, selectedSpot.lat]}>
            <MapOverlayBubble spot={selectedSpot} />
          </Marker>
        )}

    </ComposableMap>
    </div>
  );
}
