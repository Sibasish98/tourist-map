import CrowdExplorer from "@/components/crowd-explorer/CrowdExplorer";
import { TimeSlider } from "@/components/timeline/TimeSlider.client";
//import IndiaMap from "@/components/map/IndiaMap.client";
import InitialSnapshot from '@/data/crowd-snapshots/2025-jan.json'

export default function Page() {
  return (
    <>
      {/* <IndiaMap /> */}
      {/* <TimeSlider /> */}
      <CrowdExplorer initialData={InitialSnapshot.spots} />
    </>
  );
}
