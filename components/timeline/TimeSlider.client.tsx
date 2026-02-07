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
};

export  function TimeSlider({ year, month, onChange, disabled }: TimeSliderProps) {
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
      <h3 className="text-sm font-semibold text-gray-800">
        Explore Tourist Crowd
      </h3>

      <YearSlider year={year} onChange={(newYear) => onChange && onChange(newYear, month)} />
      <MonthSlider month={month} onChange={(newMonth) => onChange && onChange(year, newMonth)} />

      <div className="text-xs text-gray-600 pt-1">
        Selected: {year}, {month + 1}
      </div>
    </TimelineCard>
  );
}
