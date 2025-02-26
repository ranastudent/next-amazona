import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import data from "@/lib/data";
import {   MenuIcon, Search } from "lucide-react";
import Link from "next/link"; // ✅ Correct import
import Image from "next/image";
import Menu from "./menu";
import SearchComponent from "./search"; // ✅ Correct import


const Header = () => {
  return (
    <header className="bg-black  text-white">
      <div className="px-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center header-button font-extrabold text-2xl m-1 "
            >
              <Image
                src="/icons/logo.svg"
                width={40}
                height={40}
                alt={`${APP_NAME} logo`}
                priority // Ensures image is loaded during SSR
              />

              {APP_NAME}
            </Link>
          </div>

          <div className="hidden md:block flex-1 max-w-xl">
            <SearchComponent />
          </div>
          <Menu />
        </div>
        <div className="md:hidden block py-2">
          <SearchComponent />
        </div>
      </div>
      <div className="flex items-center gap-1 text-base [&_svg]:size-6">
        <Button
          variant="ghost"
          className="header-button flex items-center gap-1 text-base [&_svg]:size-6"
        >
          <MenuIcon />
          All
        </Button>
        <div className="flex items-center flex-wrap gap-3 overflow-hidden   max-h-[42px]">
          {data.headerMenus.map((menu) => (
            <Link
              href={menu.href}
              key={menu.href}
              className="header-button !p-2 "
            >
              {  menu.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
