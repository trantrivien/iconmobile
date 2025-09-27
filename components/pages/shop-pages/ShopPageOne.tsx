import FilterProducts from "@/components/products/FilterProducts";
import ShopPageContainer from "@/components/products/ShopPageContainer";
import React, { Suspense } from "react";
import Loader from "@/components/others/Loader";

interface ShopPageOneProps {
  searchParams: {
    page: string;
    category: string;
    brand: string;
    search: string;
    min: string;
    max: string;
    color: string;
  };
}

const ShopPageOne = ({ searchParams }: ShopPageOneProps) => {
  
  return (
    <section className="max-w-screen-xl flex gap-2 mx-auto p-2 md:p-8">

      <ShopPageContainer gridColumn={4} searchParams={searchParams} />
    </section>
  );
};

export default ShopPageOne;
