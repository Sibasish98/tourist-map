"use client";

import { useEffect, useState } from "react";
import { TimelineCard } from "./timelinecard";
import { YearSlider } from "./YearSlider";
import { MonthSlider } from "./MonthSlider";

type TimeSliderProps = {
  year: number;
  month: number;
  onChange?: (year: number, month: number) => void;
  disabled?: boolean;
  showOffBeatOnly?: boolean;
  onToggleOffBeat?: () => void;
};

export  function TimeSlider({ year, month, onChange, disabled, showOffBeatOnly, onToggleOffBeat }: TimeSliderProps) {
  // const [currentYear, setCurrentYear] = useState(year || 2026);
  // const [currentMonth, setCurrentMonth] = useState(month || 0);


// useEffect(() => {
//   async function fetchInitialTime() {
//     const res = await fetch(
//   "/api/crowd?year=2026&month=Jan"
// );
// const data = await res.json();
// console.log(data);}
// fetchInitialTime();
// },[]);


  return (
    <TimelineCard>
      <h3 className="text-lg font-semibold text-white">
        Explore Tourist Crowd
      </h3>

      <YearSlider year={year} onChange={(newYear) => onChange && onChange(newYear, month)} />
      <MonthSlider month={month} onChange={(newMonth) => onChange && onChange(year, newMonth)} />

      <div className="text-sm text-white/70">
        Selected: {year}, {month + 1}
      </div>

      <div className="absolute bottom-4 right-4 bg-black/60 text-white p-3 rounded text-sm">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showOffBeatOnly}
            onChange={(e) => onToggleOffBeat && onToggleOffBeat()}
          />
          Show Off-Beat Only
        </label>
      </div>

    </TimelineCard>
  );
}
