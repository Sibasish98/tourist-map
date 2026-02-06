import { getCrowdData } from "@/services/crowd.service";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const year = Number(searchParams.get("year") ?? 2026);
  const month = searchParams.get("month") ?? "Jan";

  const data = await getCrowdData(year, month);

  return Response.json(data);
}
