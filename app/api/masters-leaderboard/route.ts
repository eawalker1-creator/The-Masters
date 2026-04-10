import { NextResponse } from "next/server";

const RAPIDAPI_URL =
  "https://live-golf-data.p.rapidapi.com/leaderboard?orgId=1&tournId=014&year=2026";

export async function GET() {
  const apiKey = process.env.RAPIDAPI_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing RAPIDAPI_KEY" },
      { status: 500 }
    );
  }

  const res = await fetch(RAPIDAPI_URL, {
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": "live-golf-data.p.rapidapi.com",
    },
  });

  const json = await res.json();
  return NextResponse.json(json);
}
