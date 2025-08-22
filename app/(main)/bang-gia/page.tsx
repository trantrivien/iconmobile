import IphonePriceTable from "@/components/IphonePriceTable/IphonePriceTable";
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
      <IphonePriceTable />
    </div>
  );
}

export default IphonePrice;
