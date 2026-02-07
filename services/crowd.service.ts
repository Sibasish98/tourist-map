import { GeminiCrowdProvider } from "./ai/gemini.provider";


export type CrowdSpot = {
  name: string;
  lat: number;
  lng: number;
  weight: number; // 0 → low crowd, 1 → high crowd
};

export type CrowdResponse = {
  year: number;
  month: string;
  spots: CrowdSpot[];
};


const ai = new GeminiCrowdProvider();

// export async function getCrowdData(
//   year: number,
//   month: string
// ): Promise<CrowdResponse> {
//   // mock logic for now
 /// console.log("Fetching crowd data for hhhh");

//   return {
//     year,
//     month,
//     spots: [
//       {
//         name: "Okay",
//         lat: 15.2993,
//         lng: 74.124,
//         weight: 0.9,
//       },
//       {
//         name: "Manali",
//         lat: 32.2432,
//         lng: 77.1892,
//         weight: 0.6,
//       },
//     ],
//   };
// }


export async function getCrowdData(
  year: number,
  month: string
) {
  return ai.getCrowdPrediction({ year, month });
}
