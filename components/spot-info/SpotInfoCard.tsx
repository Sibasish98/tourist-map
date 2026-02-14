import { Spot } from "../map-view/mapview";
type SpotInfoCardProps = {
  spot: Spot;
  onClose: () => void;
};

export default function SpotInfoCard({
  spot,
  onClose,
}: SpotInfoCardProps) {
  return (
    <g transform="translate(10,-70)">
      {/* Background */}
      <rect
        width={180}
        height={60}
        rx={8}
        fill="black"
        opacity={0.9}
      />

      {/* Title */}
      <text
        x={10}
        y={20}
        fill="white"
        fontSize={12}
        fontWeight="bold"
      >
        {spot.name}
      </text>

      {/* Reason */}
      <text
        x={10}
        y={38}
        fill="white"
        fontSize={10}
      >
        {spot.reason?.slice(0, 40)}...
      </text>
    </g>
  );
}
