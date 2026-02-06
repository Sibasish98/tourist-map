"use client";

import { useEffect, useState } from "react";
import { TimelineCard } from "./timelinecard";
import { YearSlider } from "./YearSlider";
import { MonthSlider } from "./MonthSlider";

export  function TimeSlider() {
  const [year, setYear] = useState(2026);
  const [month, setMonth] = useState(0);


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

      <YearSlider year={year} onChange={setYear} />
      <MonthSlider month={month} onChange={setMonth} />

      <div className="text-xs text-gray-600 pt-1">
        Selected: {year}, {month + 1}
      </div>
    </TimelineCard>
  );
}
