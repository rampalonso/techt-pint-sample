import React from "react";
import Navigation from "./components/Nav";
import LogoIcon from "./icons/Logo";
import { Button } from "@/components/ui";

const Header = () => {
  return (
    <header className="py-6">
      <div className="flex items-center justify-between gap-8">
        <div className="flex items-center gap-2 cursor-pointer">
          <LogoIcon />
          <span className="text-2xl font-bold">Techt</span>
        </div>
        <Navigation />
        <Button>Get A Quotes</Button>
      </div>
    </header>
  );
};

export default Header;
