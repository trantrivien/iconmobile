import {
  CACHE_REVALIDATE_SECONDS,
  getRangeValues,
} from "@/lib/server/googleSheets";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 10 * 60;

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
    const values = await getRangeValues(sheetId, sheetTitle, range);
    return NextResponse.json({ values });
  } catch (error) {
    console.error("Failed to load sheet range", error);
    return NextResponse.json(
      { error: "Failed to load sheet range" },
      { status: 500 }
    );
  }
}
