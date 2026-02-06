"use client";

import * as Slider from "@radix-ui/react-slider";

type Props = {
  year: number;
  onChange: (year: number) => void;
};

export function YearSlider({ year, onChange }: Props) {
  const MIN_YEAR = 2022;
  const MAX_YEAR = 2030;

  return (
    <div>
      <label className="text-xs text-gray-600">Year</label>

      <div className="flex justify-between text-sm mb-1">
        <span>{MIN_YEAR}</span>
        <span className="font-medium">{year}</span>
        <span>{MAX_YEAR}</span>
      </div>

      <Slider.Root
        min={MIN_YEAR}
        max={MAX_YEAR}
        step={1}
        value={[year]}
        onValueChange={(v) => onChange(v[0])}
        className="relative flex items-center h-5"
      >
        <Slider.Track className="bg-gray-300 relative grow rounded-full h-1">
          <Slider.Range className="absolute bg-blue-500 h-full rounded-full" />
        </Slider.Track>

        <Slider.Thumb
          className="
            block w-4 h-4 bg-white
            border border-gray-400
            rounded-full shadow
            hover:scale-110 transition
            focus:outline-none
          "
        />
      </Slider.Root>
    </div>
  );
}
