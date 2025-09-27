"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { parseConfig, ProductConfig } from "@/lib/parseData";

async function fetchRange(
  sheetTitle: string,
  a1Range: string,
  sheetId: string,
  apiKey: string
): Promise<string[][]> {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(
    `${sheetTitle}!${a1Range}`
  )}?majorDimension=ROWS&key=${apiKey}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to load range");
  const data = await res.json();
  return (data.values ?? []) as string[][];
}

type IProductProps = {
  phone: string;
  slug?: string;
  apiKey: string;
  sheetId: string;
};
function Product({ phone, slug, apiKey, sheetId }: IProductProps) {
  const [currentVariant, setCurrentVariant] = useState<{
    image: string;
    color: string;
  }>();
  const [config, setConfig] = useState<ProductConfig | null>(null);

  useEffect(() => {
    if (!phone) return;
    (async () => {
      try {
        const values = await fetchRange(phone, "H1:Z4", sheetId ?? "", apiKey);
        const parsed = parseConfig(values);
        setCurrentVariant({
          image: parsed?.variants[0]?.image ?? "",
          color: parsed?.variants[0]?.color ?? "",
        });
        setConfig(parsed);
      } catch (e: any) {
        console.log(e.message ?? "Load config failed");
      }
    })();
  }, []);

  return (
    <Link
      href={`/cua-hang/${slug}/bang-gia?iphone=${phone}`}
      className="relative border rounded-xl shadow-lg overflow-hidden group"
    >
      <div className={`w-full bg-gray-200 overflow-hidden  `}>
        <div className="w-full h-[400px] rounded-lg overflow-hidden border flex justify-center items-center">
          {config?.banner && (
            <div className="relative w-full h-[300px] overflow-hidden">
              <Image
                src={currentVariant?.image || config?.banner}
                alt="Product banner"
                fill
                priority
                className="w-full  object-cover transition-all duration-300"
              />
            </div>
          )}
        </div>
      </div>

      <div className="my-2 space-y-2 p-4">
        <h3 className="text-xl font-fold capitalize hover:text-green-500 font-bold">
          {phone}
        </h3>

        <div className="flex gap-1">
          {config?.variants.map((v: any, idx: any) => (
            <div
              key={idx}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentVariant({ image: v.image, color: v.color });
              }}
              className={`w-7 h-7 rounded-full border cursor-pointer ${
                currentVariant?.color === v.color
                  ? "border-2 border-spacing-3 border-red-600"
                  : ""
              } `}
              style={{ backgroundColor: v.color }}
              title={v.color}
            />
          ))}
        </div>
        <div className="text-lg font-bold  bg-[#c9c9c9] w-fit px-4 py-2 rounded-full">
          <span className=" !text-[#ff2929] text-muted-foreground">
            Xem ngay
          </span>
        </div>
      </div>
    </Link>
  );
}

export default Product;
