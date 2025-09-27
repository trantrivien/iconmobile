import Logo from "@/components/logo/Logo";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import DashboardMobileHeader from "./DashboardMobileHeader";

const DashboardHeader = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow sticky top-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          <Button
            size={"sm"}
            variant={"destructive"}
            className="flex items-center gap-2"
          >
            <LogOut /> Exit
          </Button>
          <DashboardMobileHeader />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
