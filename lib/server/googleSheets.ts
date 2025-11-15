import "server-only";

const API_BASE_URL = "https://sheets.googleapis.com/v4/spreadsheets";
export const CACHE_REVALIDATE_SECONDS = 120;

function getApiKey() {
  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    throw new Error("Missing Google API key");
  }
  return apiKey;
}

async function fetchFromGoogle(url: string) {
  const response = await fetch(url, {
    next: { revalidate: CACHE_REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    throw new Error(`Google Sheets request failed with status ${response.status}`);
  }

  return response.json();
}

export async function getSheetTitles(sheetId: string): Promise<string[]> {
  const apiKey = getApiKey();
  const url = `${API_BASE_URL}/${sheetId}?fields=sheets.properties.title&key=${apiKey}`;
  const data = await fetchFromGoogle(url);

  return (
    (data?.sheets ?? [])
      .map((sheet: any) => sheet?.properties?.title as string)
      .filter(Boolean) ?? []
  );
}

export async function getPriceData(
  sheetId: string,
  sheetTitle: string,
  range: string
): Promise<any> {
  const apiKey = getApiKey();
  const encodedRange = encodeURIComponent(`${sheetTitle}!${range}`);
  const url = `${API_BASE_URL}/${sheetId}?includeGridData=true&ranges=${encodedRange}&key=${apiKey}`;
  return fetchFromGoogle(url);
}

export async function getRangeValues(
  sheetId: string,
  sheetTitle: string,
  range: string
): Promise<string[][]> {
  const apiKey = getApiKey();
  const encodedRange = encodeURIComponent(`${sheetTitle}!${range}`);
  const url = `${API_BASE_URL}/${sheetId}/values/${encodedRange}?majorDimension=ROWS&key=${apiKey}`;
  const data = await fetchFromGoogle(url);
  return (data?.values ?? []) as string[][];
}
