"use client";
import { useMobileSearchModal } from "@/store/mobileSearchStore";
import { Store } from "lucide-react";
import { usePathname } from "next/navigation";
import Logo from "../logo/Logo";
import { Separator } from "../ui/separator";
import MobileHeader from "./MobileHeader";
import Link from "next/link";

const HeaderOne = () => {
  const pathname = usePathname();

  const navlinks = [
    {
      link: "/",
      label: "Trang Chủ",
      isActive: pathname === "/",
    },
    {
      link: "/cua-hang",
      label: "Cửa hàng",
      icon: <Store />,
      isActive: pathname.includes("/cua-hang"),
    },
    {
      link: "/cua-hang/iphone-quoc-te",
      label: "iPhone Quốc Tế",
      isActive: pathname.includes("/cua-hang/iphone-quoc-te"),
    },
    {
      link: "/cua-hang/iphone-lock",
      label: "iPhone Lock",
      isActive: pathname.includes("/cua-hang/iphone-lock"),
    },
  ];

  const { openModal } = useMobileSearchModal();

  return (
    <header className="sticky bg-white dark:bg-slate-950 top-0 z-50 w-full">
      <div className="max-w-screen-xl mx-auto  p-4 md:py-4 md:px-8 flex items-center justify-between gap-2">
        <Logo />

        <div className="lg:flex items-center gap-6   ">
          <div className="lg:flex items-center hidden gap-6">
            {navlinks.map((link: any) => (
              <Link
                rel="canonical"
                key={link.link}
                className=" text-lg font-medium"
                href={link.link}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6 lg:gap-2 lg:-mt-1">
            <MobileHeader />
          </div>
        </div>
      </div>
      <Separator />
    </header>
  );
};

export default HeaderOne;
