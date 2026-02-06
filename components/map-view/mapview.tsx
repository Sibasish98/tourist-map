"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl = "/maps/india.geojson";

export type Spot = {
  name: string;
  lat: number;
  lng: number;
  weight: number;
};

export default function MapView({
  spots,
}: {
  spots: Spot[];
}) {
  return (
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
            r={6 + spot.weight * 10}
            fill="rgba(239, 68, 68, 0.6)"
          />
        </Marker>
      ))}
    </ComposableMap>
  );
}
