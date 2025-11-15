import {
  CACHE_REVALIDATE_SECONDS,
  getPriceData,
} from "@/lib/server/googleSheets";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = CACHE_REVALIDATE_SECONDS;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const sheetId = searchParams.get("sheetId");
  const sheetTitle = searchParams.get("sheetTitle");
  const range = searchParams.get("range");

  if (!sheetId || !sheetTitle || !range) {
    return NextResponse.json(
      { error: "Missing sheetId, sheetTitle or range parameter" },
      { status: 400 }
    );
  }

  try {
    const data = await getPriceData(sheetId, sheetTitle, range);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to load price data", error);
    return NextResponse.json(
      { error: "Failed to load price data" },
      { status: 500 }
    );
  }
}
