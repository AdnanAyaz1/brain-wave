"use client";
import Image from "next/image";
import React, { useState } from "react";
import ClippedButton from "@/components/Reuseable/ClippedButton";
import MobileNav from "@/components/Header/MobileNav";
import { AnimatePresence } from "framer-motion";
import HeaderLinks from "@/components/Header/HeaderLinks";
const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const handleMobileNav = () => {
    setOpenNav((pre) => !pre);
  };
  return (
    <div className=" fixed  top-0  w-full z-50 border-b border-n-6 lg:bg-n-8/90 backdrop-blur-sm ">
      <div className="relative flex items-center justify-between px-5 lg:px-7.5 xl:px-10 py-4">
        {/* logo */}
        <a className=" w-[12rem] xl:mr-8" href="#hero">
          <Image
            src={"/assets/brainwave.svg"}
            width={190}
            height={40}
            alt="Brainwave"
          />
        </a>
        {/* links */}
        <HeaderLinks onlyMobile={openNav} cl1="" />
        {/* registration buttons */}
        <div className="lg:flex gap-4 items-center capitalize hidden ">
          <button className="text-n-1/50 transition-colors hover:text-n-1 font-code text-2xl lg:text-sm lg:font-semibold ">
            New Account
          </button>
          <ClippedButton text="Sign In" />
          {/* <div className="relative group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 120 44"
              width="120"
              height="44"
            >
              <defs>
                <linearGradient
                  id="conic-gradient"
                  gradientTransform="rotate(90)"
                >
                  <stop offset="0%" stopColor="red" />
                  <stop offset="25%" stopColor="yellow" />
                  <stop offset="50%" stopColor="green" />
                  <stop offset="75%" stopColor="blue" />
                  <stop offset="100%" stopColor="red" />
                </linearGradient>
              </defs>

              <path
                d="M20,43 L8,43 C4,43 1,39 1,35 L1,9 C1,5 4,1 8,1 L20,1"
                fill="black"
                stroke="url(#conic-gradient)"
                strokeWidth="2"
              />
        
              <rect
                x="20"
                y="0"
                width="80"
                height="44"
                fill="black"
                stroke="url(#conic-gradient)"
                strokeWidth="2"
                strokeDasharray="80 44 80 44"
                strokeDashoffset="124"
              />
         
              <path
                d="M100,43 L115,43 C119,43 120,39 120,35 L120,16 C120,14 118,12 116,10 L106,2 C104,1 102,1 100,1"
                fill="black"
                stroke="url(#conic-gradient)"
                strokeWidth="2"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center font-bold">
              TEXT
            </span>
          </div> */}
        </div>
        {/* hamburger menu */}
        <button
          className="block lg:hidden m-4 p-[2px] w-[45px] rounded-md bg-conic-gradient uppercase relative "
          onClick={() => setOpenNav((pre) => !pre)}
        >
          <div
            className={`h-[40px] flex flex-col px-2 items-center  justify-center  rounded-md  bg-n-8 space-y-2`}
          >
            <div
              className={`w-full h-[2px] rounded-full bg-white ${
                openNav
                  ? "rotate-45 translate-y-1 transition-all duration-150 ease-in-out"
                  : "rotate-0 translate-y-0 transition-all duration-150 ease-in-out"
              } `}
            ></div>
            <div
              className={`w-full h-[2px] rounded-full bg-white ${
                openNav
                  ? "-rotate-45 -translate-y-1 transition-all duration-150 ease-in-out"
                  : "rotate-0 translate-y-0 transition-all duration-150 ease-in-out"
              }`}
            ></div>
          </div>
        </button>
      </div>
      <AnimatePresence>
        {openNav ? <MobileNav handleMobileNav={handleMobileNav} /> : null}
      </AnimatePresence>
    </div>
  );
};

export default Header;
