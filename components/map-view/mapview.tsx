"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { getCrowdColor } from '@/lib/mapStyles'
import SpotInfoCard from "../spot-info/SpotInfoCard";

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
    <div className={dimmed ? "opacity-60" : ""}>
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        center: [82, 22],
        scale: 1000,
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
        <Marker
          key={spot.name}
          coordinates={[spot.lng, spot.lat]}
        >
          <circle
            r={
              selectedSpot?.name === spot.name
                ? 8 + spot.weight * 6
                : 4 + spot.weight * 6
            }

            onClick={() => setSelectedSpot(spot)}
            fill={getCrowdColor(spot.weight)}
          />
        </Marker>
      ))}
      {selectedSpot && (
        <Marker coordinates={[selectedSpot.lng, selectedSpot.lat]}>
          <SpotInfoCard
            spot={selectedSpot}
            onClose={() => setSelectedSpot(null)}
          />
        </Marker>
      )}

    </ComposableMap>
      
    </div>
  );
}
