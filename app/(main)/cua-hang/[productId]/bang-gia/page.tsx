import IphonePriceTable from "@/components/IphonePriceTable/IphonePriceTable";
import BenefitsSection from "@/components/others/BenefitSection";
import BreadcrumbComponent from "@/components/others/Breadcrumb";
import { getPriceData } from "@/lib/server/googleSheets";
import { getSheetIDBySlug } from "@/lib/utils";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "iConMobile - Bảng Giá IPhone",
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

export default async function Page({
  params,
  searchParams,
}: {
  params: { productId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const productId = params.productId;
  const sheetTitleParam = searchParams.iphone;
  const sheetTitle =
    typeof sheetTitleParam === "string" ? sheetTitleParam : "";
  const range = "A10:E100";

  const sheetId = getSheetIDBySlug(productId);

  if (!sheetId || !sheetTitle) {
    return null;
  }

  const data = await getPriceData(sheetId, sheetTitle, range);
  return (
    <div>
      <div className="md:block hidden">
      <BenefitsSection textCenter={true} />
      </div>
      <IphonePriceTable
        data={data}
        productId={productId}
        sheetTitle={sheetTitle ?? ""}
      />
    </div>
  );
}
