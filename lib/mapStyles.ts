export function getCrowdColor(weight: number) {
  if (weight >= 0.8) return "#dc2626";   // red-600
  if (weight >= 0.6) return "#f97316";   // orange-500
  if (weight >= 0.3) return "#eab308";   // yellow-500
  return "#16a34a";                      // green-600
}
