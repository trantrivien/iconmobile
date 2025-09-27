
import ProductGallery from "@/components/product/ProductGallery";
import { productsData } from "@/data/products/productsData";
import React from "react";
import RelatedProducts from "@/components/products/RelatedProducts";
import BreadcrumbComponent from "@/components/others/Breadcrumb";
import ProductDetails from "@/components/product/ProductDetails";

// Define the props interface for the component
interface ProductIdPageProps {
  params: { productId: string };
}

// Define the main component
const ProductIdPage = ({ params }: ProductIdPageProps) => {
  // TODO: fetch product data with the productId

  // Find the product with the specified ID from the products data
  const product = productsData.find(
    (product) => product.id === Number(params.productId)
  );

  // Filter related products based on the category of the current product
  const relatedProducts = productsData.filter(
    (prod) => prod.category === product?.category
  );

  // Return the JSX structure of the component
  return (
    <div className="max-w-screen-xl mx-auto p-4 md:p-8 flex flex-col items-start gap-2 min-h-screen">
      {/* Breadcrumb Component */}
      <div className="my-2">
        <BreadcrumbComponent links={["/shop"]} pageText={product?.name!} />
      </div>

      <div className=" grid grid-cols-4">
        <div className="w-full h-[200px]">
          <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-17-pro-256-gb.png" alt="" />
          <h6 className="text-[20px] font-bold">Iphone 17 Pro</h6>
          <div className="flex w-ful gap-2">
            <p>Màu: </p>
            <div className="w-[20px] h-[20px] rounded-full bg-[#e9e9e9]" ></div>
            <div className="w-[20px] h-[20px] rounded-full bg-[#ff2222]" ></div>
            <div className="w-[20px] h-[20px] rounded-full bg-[#ff6021]" ></div>
          </div>
        </div>

      </div>
     
    </div>
  );
};

// Export the component as default
export default ProductIdPage;
