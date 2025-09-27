import React from "react";
import { Separator } from "../ui/separator";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";
import { dummyCategories } from "@/data/category/categoryData";
import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <footer className=" bg-gray-700 text-white py-8 px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto p-4 md:p-8 flex md:flex-row  flex-wrap gap-4 md:gap-2 justify-between">
        <div className="flex flex-col space-y-4 mb-8 md:mb-0">
          <Logo />
          <p></p>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com" className="" target="_blank">
              <FaFacebook size={30} />
            </Link>
            <Link href="https://www.x.com" className="" target="_blank">
              <FaTwitter size={30} />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" className="">
              <FaInstagramSquare size={30} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4"></div>
        <div className="flex flex-col space-y-4"></div>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-4 items-end text-right">
            <a
              href="tel:+84777010102"
              className="text-lg font-semibold cursor-pointer"
            >
              📞 Hotline: 0777 010 102{" "}
            </a>
            <a
              href="https://maps.app.goo.gl/y8uxQv1qAhtkkJMX6"
              target="_blank"
              className="text-lg"
            >
              🏠 Địa chỉ: 117 Lê Đức Thọ, P.Thông Tây Hội, TP.HCM
            </a>
            <p className="text-lg">
              🏬 IconMobile - Chuyên iPhone & Apple chính hãng
            </p>
          </div>
        </div>
      </div>
      <hr className="w-full h-[2px] bg-white" />
      <div className="text-center mt-8">
        <p>&copy; 2025 iCon Mobile. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
