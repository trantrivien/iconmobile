import React, { Suspense } from "react";
import HeroBannerOne from "@/components/hero/HeroBannerOne";
import ProductsCollectionOne from "@/components/products/ProductsCollectionOne";
import NewsLetterTwo from "@/components/newsLetter/NewsLetterTwo";
import LatestBlogPosts from "@/components/blog/LatestBlogPosts";
import CategoriesCollection from "@/components/category/CategoriesCollection";
import TestimonialsSection from "@/components/others/Testimonials";
import BannerOne from "@/components/banners/BannerOne";
import BenefitsSection from "@/components/others/BenefitSection";
import Loader from "@/components/others/Loader";

const HomePageOne = () => {
  return (
    <section className="overflow-hidden">
      {/* <HeroBannerOne /> */}
      {/* <BannerOne /> */}
      <img src="https://cdnv2.tgdd.vn/mwg-static/topzone/Banner/ea/94/ea94d44864f18fa4831425d2836ccb92.png" alt="" />

      <ProductsCollectionOne />
      <BenefitsSection textCenter={true} />
      <TestimonialsSection textCenter={true} />

    
    </section>
  );
};

export default HomePageOne;
