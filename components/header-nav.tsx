import React from "react";
import { Button } from "@/components/ui/button";

const HeaderNav = () => {
  return (
    <nav className="w-full flex justify-center">
      <div className="fixed text-white w-[1080px] h-[70px] flex flex-row items-center border-b-2 border-b-white/50 text-xl z-50 bg-transparent backdrop-blur-sm">
        <div className="flex flex-row h-full w-full items-center justify-evenly">
          {navMenu.map((data) => (
            <Button
              className=" bg-transparent text-white text-xl hover:text-black"
              key={data.label}
            >
              {data.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const navMenu = [
  {
    label: "Knowledge",
    href: "/",
  },
  {
    label: "About Me",
    href: "/",
  },
  {
    label: "RoadMap",
    href: "/",
  },
];

export default HeaderNav;
