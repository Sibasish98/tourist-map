"use client";

import { useEffect, useState } from "react";
import MapView, { Spot } from "@/components/map-view/mapview";

export default function IndiaClient({
  initialData,
}: {
  initialData: any;
}) {
  const [data, setData] = useState(initialData);

  // optional: refetch once on mount
  useEffect(() => {
    async function fetchCrowd() {
      const res = await fetch(
        "/api/crowd?year=2026&month=Jan"
      );
      const json = await res.json();
      setData(json);
    }
    if (!initialData)
    fetchCrowd();
  }, []);

  return (
    <div className="relative h-screen w-full">
      <MapView spots={data.spots} selectedSpot={null} setSelectedSpot={function (spot: Spot | null): void {
        throw new Error("Function not implemented.");
      } } />
    </div>
  );
}
