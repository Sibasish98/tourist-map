import { TimeSlider } from "@/components/timeline/TimeSlider.client";
import IndiaClient from "@/components/india/IndiaClient";
import InitialSnapshot from '@/data/crowd-snapshots/2025-jan.json'
import CrowdExplorer from "@/components/crowd-explorer/CrowdExplorer";

export default function MapApplication() {
    return <>
    <h1>Map View Server</h1>
    {/* <MapView/> */}
    {/* <IndiaClient initialData={InitialSnapshot}/>
    <TimeSlider/> */}
    <CrowdExplorer initialData={InitialSnapshot.spots} />
    </>
}