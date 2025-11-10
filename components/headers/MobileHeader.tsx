"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Heart,
  HelpCircle,
  Home,
  ListOrdered,
  LogOut,
  Menu,
  Store,
  Text,
  User,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const MobileHeader = () => {
  const pathname = usePathname();

  const navlinks = [
    {
      link: "/",
      label: "Trang Chủ",
      icon: <Home />,
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
      icon: <Text />,
      isActive: pathname.includes("/cua-hang/iphone-quoc-te"),
    },
    {
      link: "/cua-hang/iphone-lock",
      label: "iPhone Lock",
      icon: <Text />,
      isActive: pathname.includes("/cua-hang/iphone-lock"),
    },
  ];

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="mt-2" size={25} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription>
              <ul className="space-y-1 text-start text-lg p-2">
                {/* navigation links here */}
                {navlinks.map((link) => (
                  <Link
                    rel="canonical"
                    key={link.link}
                    href={link.link}
                    className={cn(
                      "flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800",
                      link.isActive && "bg-gray-200  dark:bg-gray-800"
                    )}
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                ))}
                <Separator className="!my-2" />
                {/* theme toggle option here */}

                <Separator className="!my-2" />

                {/* user retated options here */}
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileHeader;
