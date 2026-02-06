import { CrowdAIProvider } from "./ai.provider";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY!;

export class GeminiCrowdProvider
  implements CrowdAIProvider {

  async getCrowdPrediction({ year, month } : { year: number; month: string; }) {
    const prompt = `
You are a travel data assistant.

Given:
Year: ${year}
Month: ${month}
Country: India

Return ONLY valid JSON in this format:
{
  "spots": [
    {
      "name": string,
      "lat": number,
      "lng": number,
      "weight": number (0 to 1),
      "reason": string
    }
  ]
}

Focus on major tourist destinations.
`;

    const res = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" +
        GEMINI_API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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

    const text =
      json.candidates[0].content.parts[0].text;

    return JSON.parse(text);
  }
}
