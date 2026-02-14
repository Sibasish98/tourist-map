import { getCrowdColor } from "@/lib/mapStyles";
import { Spot } from "../map-view/mapview";

export default function MapOverlayBubble({ spot }: { spot: Spot }) {
  return (
    <foreignObject x={12} y={-90} width={240} height={140}>
      <div className="relative backdrop-blur-md bg-gray-900/85 text-white 
                      rounded-xl shadow-2xl px-4 py-3 
                      border border-white/10 text-sm">

        {/* Accent bar */}
        <div
          className="absolute left-0 top-0 h-full w-1 rounded-l-xl"
          style={{ backgroundColor: getCrowdColor(spot.weight) }}
        />

        <div className="pl-2">
          <div className="font-semibold text-sm">
            {spot.name}
          </div>

          {spot.reason && (
            <p className="mt-1 text-white/70 leading-snug">
              {spot.reason}
            </p>
          )}
        </div>

        {/* Pointer */}
        <div className="absolute left-6 bottom-[-6px] 
                        w-3 h-3 bg-gray-900 rotate-45 
                        border-r border-b border-white/10" />
      </div>
    </foreignObject>
  );
}
