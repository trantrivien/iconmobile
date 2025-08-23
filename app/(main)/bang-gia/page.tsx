import HeroBannerOne from "@/components/hero/HeroBannerOne";
import IphonePriceTable from "@/components/IphonePriceTable/IphonePriceTable";
import BenefitsSection from "@/components/others/BenefitSection";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "iConMobile",
  description:
    "iconmobile - Chuyên Bán Hàng iphone trả góp - uy tín số 1 Việt Nam - Bảng giá iphone cập nhật hằng ngày",
};

function IphonePrice() {
  return (
    <div>
      <BenefitsSection textCenter={true} />
      <IphonePriceTable />
    </div>
  );
}

export default IphonePrice;
