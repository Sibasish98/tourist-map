"use client";

import { useState } from "react";
import { TimeSlider } from "@/components/timeline/TimeSlider.client";
import MapView, { Spot } from "@/components/map-view/mapview";

export default function CrowdExplorer({ initialData } : { initialData: Spot[] }) {
  const [year, setYear] = useState(2025);
  const [month, setMonth] = useState(0);
  const [spots, setSpots] = useState(initialData);
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="relative">
      <TimeSlider
        year={year}
        month={month}
        onChange={handleTimelineChange}
        disabled={loading}
      />

      <MapView spots={spots} dimmed={loading} />
    </div>
  );
}
