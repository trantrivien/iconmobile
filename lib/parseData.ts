export type ProductConfig = {
  name: string;
  banner?: string;
  colors: string[]; 
  images: string[]; 
  variants: { color: string; image?: string }[];
};

export function parseConfig(rows: string[][]): ProductConfig {
  const map: Record<string, string[]> = {};
  for (const r of rows) {
    if (!r?.length) continue;
    const key = (r[0] ?? "").trim().toLowerCase();
    map[key] = (r.slice(1) ?? []).filter(Boolean);
  }
  const name = map["name"]?.[0] ?? "";
  const colors = map["color"] ?? [];
  const images = map["image"] ?? [];
  const banner = map["banner"]?.[0];

  const variants = colors.map((color, idx) => ({
    color,
    image: images[idx] ?? images[images.length - 1],
  }));

  return { name, banner, colors, images, variants };
}
