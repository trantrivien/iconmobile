import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.BASE_URL;
  const now = new Date().toISOString();

  const staticPages: any = [
    "",
    "/cua-hang",
    "/cua-hang/iphone-quoc-te",
    "/cua-hang/iphone-lock",
  ].map((p) => ({
    url: `${base}${p || "/"}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: p === "" ? 1 : 0.7,
  }));

  return [...staticPages];
}
