"use client";

import * as Slider from "@radix-ui/react-slider";

const MONTHS = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec"
];

type Props = {
  month: number; // 0–11
  onChange: (month: number) => void;
};

export function MonthSlider({ month, onChange }: Props) {
  return (
    <div>
      <label className="text-sm text-white/70">Month</label>

      <div className="flex justify-between text-sm mb-1">
        <span>Jan</span>
        <span className="font-medium">{MONTHS[month]}</span>
        <span>Dec</span>
      </div>

      <Slider.Root
        min={0}
        max={11}
        step={1}
        value={[month]}
        onValueChange={(v) => onChange(v[0])}
        className="relative flex items-center h-5"
      >
        <Slider.Track className="bg-gray-300 relative grow rounded-full h-1">
          <Slider.Range className="absolute bg-emerald-500 h-full rounded-full" />
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
