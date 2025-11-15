import {
  getSheetTitles,
  CACHE_REVALIDATE_SECONDS,
} from "@/lib/server/googleSheets";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 5 * 60;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const sheetId = searchParams.get("sheetId");

  if (!sheetId) {
    return NextResponse.json(
      { error: "Missing sheetId parameter" },
      { status: 400 }
    );
  }

  try {
    const titles = await getSheetTitles(sheetId);
    return NextResponse.json({ titles });
  } catch (error) {
    console.error("Failed to load sheet titles", error);
    return NextResponse.json(
      { error: "Failed to load sheet titles" },
      { status: 500 }
    );
  }
}
