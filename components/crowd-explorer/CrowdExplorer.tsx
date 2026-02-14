"use client";

import { useState } from "react";
import { TimeSlider } from "@/components/timeline/TimeSlider.client";
import MapView, { Spot } from "@/components/map-view/mapview";
import LoadingOverlay from "../loading-overlay/LoadingOverlay";

export default function CrowdExplorer({ initialData } : { initialData: Spot[] }) {
  const [year, setYear] = useState(2025);
  const [month, setMonth] = useState(0);
  const [spots, setSpots] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [showOffBeatOnly, setShowOffBeatOnly] = useState(false);
  const visibleSpots = showOffBeatOnly
  ? spots.filter((spot) => spot.weight < 0.4)
  : spots;
  const [selectedSpot, setSelectedSpot] = useState<Spot | null>(null);



  async function handleTimelineChange(newYear:number, newMonth:number) {
    setYear(newYear);
    setMonth(newMonth);
    setLoading(true);
    console.log(`Fetching data for ${newYear}-${newMonth + 1}...`);
    const res = await fetch(
      `/api/crowd?year=${newYear}&month=${newMonth}`
    );
    const data = await res.json();

    setSpots(data.spots);
    setLoading(false);
  }

  function handleOffBeatToggle() {
    setShowOffBeatOnly((prev) => !prev);
  }

  return (
    <div className="relative">
      <div className="absolute z-20">
      <TimeSlider
        year={year}
        month={month}
        showOffBeatOnly={showOffBeatOnly}
        onToggleOffBeat={handleOffBeatToggle}
        onChange={handleTimelineChange}
        disabled={loading}
      />
      </div>



      <MapView spots={visibleSpots} dimmed={loading} selectedSpot={selectedSpot} setSelectedSpot={setSelectedSpot} />

      {loading && (
        <div className="absolute inset-0 z-30 
                  bg-black/30 backdrop-blur-sm
                  flex items-center justify-center
                  transition-opacity duration-300">

          <LoadingOverlay />

        </div>
      )}
    </div>
  );
}
