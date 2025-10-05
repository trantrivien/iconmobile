"use client";
import React, { useEffect, useState } from "react";
import RatingReview from "../others/RatingReview";
import Link from "next/link";
import Image from "next/image";
import ProductOptions from "./ProductOptions";
import { Product } from "@/types";
import { calculateDiscount } from "@/lib/calculateDiscount";
import { useRouter } from "next/navigation";

const SingleProductCartView = ({ product }: { product: any }) => {
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();

  const {
    category,
    discount,
    id,
    slug,
    images,
    name,
    price,
    rating,
    reviews,
    stockItems,
  } = product;

  // Calculate discounted price
  const discountedPrice = calculateDiscount(price, discount);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Link
      href={slug?.includes('http') ? slug : `/cua-hang/${slug}`}
      target={slug?.includes('http') ? '_blank' : '_self'}

      className="relative border rounded-xl shadow-lg overflow-hidden group"
    >
      <div className={`w-full bg-gray-200 overflow-hidden`}>
        <div className="relative w-full h-[18rem] group-hover:scale-110 transition-all duration-300 rounded-md overflow-hidden">
          <Image className="object-contain" src={images[0]} alt={name} fill />

        </div>
      </div>
      <div className="hidden group-hover:block slideCartOptions absolute top-16 right-2">
        <ProductOptions product={product} />
      </div>
      <div className="my-2 space-y-1 p-4">
        <p

          className="text-lg font-bold text-sky-500 -mb-1 hover:opacity-60 "
        >
          {" "}
          {category}
        </p>
        <h3 className="text-xl font-fold capitalize hover:text-green-500 font-bold">
          {name.slice(0, 45)}
          {name.length > 45 && "..."}
        </h3>
        <div className="text-lg font-bold space-x-3 bg-[#c9c9c9] w-fit px-4 py-2 rounded-full">
          <span className=" text-[#ff2929]">Xem ngay</span>

        </div>
      </div>
    </Link>
  );
};

export default SingleProductCartView;
