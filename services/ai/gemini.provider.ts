import { CrowdAIProvider } from "./ai.provider";
import { extractJson } from './utils/extractJson'

const GEMINI_API_KEY = process.env.GEMINI_API_KEY!;

export class GeminiCrowdProvider
  implements CrowdAIProvider {

  async getCrowdPrediction({ year, month } : { year: number; month: string; }) {
    const prompt = `You are a travel data assistant.

Given:
Year: ${year}
Month: ${month}
Country: India

Return a balanced mix of:
- Highly popular destinations
- Moderately visited destinations
- Lesser-known or off-beat destinations

Crowd intensity (weight) must be a number between 0 and 1:
- 0.0–0.3 → low crowd (off-beat)
- 0.3–0.6 → moderate
- 0.6–1.0 → high crowd

Ensure there is a natural distribution across these ranges.
Do not return only highly crowded places.

Return ONLY valid JSON in this format:
{
  "spots": [
    {
      "name": string,
      "lat": number,
      "lng": number,
      "weight": number,
      "reason": string
    }
  ]
}
`

    const res = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": GEMINI_API_KEY,
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );

    const json = await res.json();
    console.log(json)
    const text =
      json.candidates[0].content.parts[0].text;

    return JSON.parse(extractJson(text));
  }
}
