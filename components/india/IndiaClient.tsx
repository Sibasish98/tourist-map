"use client";

import { useEffect, useState } from "react";
import MapView from "@/components/map-view/mapview";

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
      <MapView spots={data.spots} />
    </div>
  );
}
