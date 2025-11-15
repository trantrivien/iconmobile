import BreadcrumbComponent from "@/components/others/Breadcrumb";
import Product from "@/components/product/Product";
import { productsData } from "@/data/products/productsData";
import { getSheetTitles } from "@/lib/server/googleSheets";
import { getSheetIDBySlug } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "iConMobile - Cửa Hàng IPhone",
  description:
    "iConMobile - Chuyên bán iPhone trả góp, uy tín số 1 Việt Nam - Bảng giá iPhone cập nhật hằng ngày.",
  keywords: [
    "iPhone Hồ Chí Minh",
    "iPhone HCM",
    "iPhone TP.HCM",
    "mua iPhone Hồ Chí Minh",
    "iPhone trả góp Hồ Chí Minh",

    "iPhone Gò Vấp",
    "iPhone Quận 1",
    "iPhone Quận 3",
    "iPhone Quận 5",
    "iPhone Quận 7",
    "iPhone Quận 10",
    "iPhone Quận 12",
    "iPhone Tân Bình",
    "iPhone Tân Phú",
    "iPhone Bình Thạnh",
    "iPhone Phú Nhuận",
    "iPhone Thủ Đức",
    "iPhone Bình Tân",
    "iPhone Nhà Bè",
    "iPhone Hóc Môn",
    "iPhone Củ Chi",

    "iPhone trả góp",
    "iPhone giá rẻ",
    "bảng giá iPhone",
    "iPhone chính hãng",
    "iPhone cũ Hồ Chí Minh",
    "iPhone mới Hồ Chí Minh",
    "iPhone 11",
    "iPhone 11 Pro",
    "iPhone 11 Pro Max",
    "iPhone 12",
    "iPhone 12 Pro",
    "iPhone 12 Pro Max",
    "iPhone 13",
    "iPhone 13 Pro",
    "iPhone 13 Pro Max",
    "iPhone 14",
    "iPhone 14 Pro",
    "iPhone 14 Pro Max",
    "iPhone 15",
    "iPhone 15 Plus",
    "iPhone 15 Pro",
    "iPhone 15 Pro Max",
    "iPhone 16",
    "iPhone 17",

    "mua iPhone trả góp HCM",
    "cửa hàng iPhone Hồ Chí Minh",
    "iPhone trả góp lãi suất thấp",
    "iPhone trả góp nhanh",
    "iPhone khuyến mãi HCM",
  ],
};
interface ProductIdPageProps {
  params: { productId: string };
}

type ProductConfig = {
  name: string;
  banner?: string;
  colors: string[];
  images: string[];
  variants: { color: string; image?: string }[];
};

const ProductIdPage = async ({ params }: ProductIdPageProps) => {
  const sheetId = getSheetIDBySlug(params?.productId);
  const product = productsData.find(
    (product) => product.slug === params.productId
  );

  if (!sheetId) return <></>;

  const listIphone = await getSheetTitles(sheetId ?? "");
  return (
    <div className="max-w-screen-xl mx-auto p-4 md:p-8 flex flex-col items-start gap-2 min-h-screen">
      <div className="my-2">
        <BreadcrumbComponent links={["/cua-hang"]} pageText={product?.name!} />
      </div>

      <div className=" grid md:grid-cols-4 grid-cols-1 w-full gap-4">
        {listIphone?.map((phone, idx) => (
          <Product
            key={idx}
            phone={phone}
            slug={product?.slug}
            sheetId={sheetId}
          />
        ))}
      </div>
    </div>
  );
};

// Export the component as default
export default ProductIdPage;
