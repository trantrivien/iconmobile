import BenefitsSection from "@/components/others/BenefitSection";
import TestimonialsSection from "@/components/others/Testimonials";
import ProductsCollectionOne from "@/components/products/ProductsCollectionOne";
import Image from "next/image";

const HomePageOne = () => {
  return (
    <section className="overflow-hidden">
      <div className="relative w-full h-[500px] overflow-hidden">
        <Image
          src="https://cdnv2.tgdd.vn/mwg-static/topzone/Banner/ea/94/ea94d44864f18fa4831425d2836ccb92.png"
          alt="Banner"
          fill
          className="object-cover"
          priority
        />
      </div>

      <ProductsCollectionOne />
      <BenefitsSection textCenter={true} />
      <TestimonialsSection textCenter={true} />
    </section>
  );
};

export default HomePageOne;
