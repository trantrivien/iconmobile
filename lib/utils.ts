import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSheetIDBySlug = (slug: string) => {
  if (slug === "iphone-quoc-te")
    return process.env.GOOGLE_SHEET_ID_GLOBAL as string;
  if (slug === "iphone-lock")
    return process.env.GOOGLE_SHEET_ID_LOCK as string;
};
