"use client";
import Logo from "@/components/Logo";
import { useState } from "react";
function Navigation() {
  const showMenuNav =
    "flex flex-col  mt-[34.63px] xl:mt-[75.67px] mb-[45.22px] xl:mb-0";
  const hideMenuNav = "hidden";
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="relative flex flex-col items-center min-w-[280px] xl:min-w-[345px] bg-white xl:h-screen">
      <div className=" z-20 relative nav-shadow xl:shadow-none w-full flex mt-[30.37px] xl:mt-[78.33px] items-center justify-center">
        <div
          onClick={() => setNavOpen((prev) => !prev)}
          className="space-y-2  absolute hover:animate-pulse  top-0 lg:h-[40.86px] flex flex-col justify-center	left-[26.38px] xl:hidden"
        >
          <span
            className={`block h-0.5 w-8  bg-black transform transition-transform duration-500 ${
              navOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-8 animate-none  bg-black transform transition-transform duration-500 ${
              navOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-8  bg-black transform transition-transform duration-500 ${
              navOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></span>
        </div>
        <div className="font-bold text-black text-[20px] mb-[30.37px] xl:mb-0 md:text-[28px] xl:text-[30px] leading-[27.24px] lg:leading-[40.86px]">
          白頭翁不吃小米
        </div>
      </div>

      <div
        className={`${
          navOpen ? showMenuNav : hideMenuNav
        } xl:flex xl:flex-col  xl:mt-[75.67px] xl:mb-0`}
      >
        {[
          ["白頭翁的特性", "/"],
          ["白頭翁的故事", "/"],
          ["白頭翁的美照", "/"],
          ["白頭翁的危機", "/"],
        ].map(([title, url], idx) => (
          <a
            key={idx}
            href={url}
            className="pb-1 mb-[17.74px] text-[18px] leading-[24.52px] transition ease-in-out  delay-75y-  hover:-translate-y-1 hover:scale-110  duration-300 font-normal hover:text-[#AA6666]  focus:font-bold text-black 
                focus:text-[#AA6666] focus:border-b-2 focus:border-[#AA6666] "
          >
            {title}
          </a>
        ))}
      </div>
      <Logo />
    </nav>
  );
}

export default Navigation;
