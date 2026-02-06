import MapView from "@/components/map-view/mapview"
import { TimeSlider } from "@/components/timeline/TimeSlider.client";
import IndiaClient from "@/components/india/IndiaClient";

export default function MapApplication() {
    return <>
    <h1>Map View Server</h1>
    {/* <MapView/> */}
    <IndiaClient initialData={{spots: []}}/>
    <TimeSlider/>
    </>
}