"use client";
import React, { Suspense } from "react";
import Logo from "../logo/Logo";
import Link from "next/link";
import SearchBox from "./SearchBox";
import Cart from "../carts/Cart";
import { ThemeToggle } from "../theme/ThemeToggle";
import AccountPopover from "../account/AccountPopover";
import {  Search } from "lucide-react";
import MobileHeader from "./MobileHeader";
import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useMobileSearchModal } from "@/store/mobileSearchStore";
import Loader from "../others/Loader";
import DropdownMenuComponent from "../others/DropdownMenu";

const HeaderOne = () => {
  const pathname = usePathname();

  const links = [

  ];

  const { openModal } = useMobileSearchModal();

  return (
    <header className="sticky bg-white dark:bg-slate-950 top-0 z-50 w-full">
      <div className="max-w-screen-xl mx-auto  p-4 md:py-4 md:px-8 flex items-center justify-between gap-2">
        <Logo />

        <div className="flex items-center gap-6 ">
          {/* mobile search option */}
 

          <div className="flex items-center gap-6 lg:gap-2 lg:-mt-1">
            <div className="hidden lg:block">
              <ThemeToggle />
            </div>
  
            {/* <Cart /> */}
            <MobileHeader />
          </div>
        </div>
      </div>
      <Separator />
    </header>
  );
};

export default HeaderOne;
