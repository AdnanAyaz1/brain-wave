import React from "react";
import { motion } from "framer-motion";
import HeaderLinks from "./HeaderLinks";
import Rings from "../Reuseable/Rings";
import BackgroundCircles from "../Reuseable/BackgroundCircles";

type MobileNavProps = {
  handleMobileNav: () => void;
};

const MobileNav: React.FC<MobileNavProps> = ({ handleMobileNav }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-n-8/95 z-20 min-h-screen"
    >
      <div className="absolute top-4 right-4 z-40">
        <button
          onClick={handleMobileNav}
          className="block lg:hidden m-4 p-[2px] w-[45px] rounded-md bg-conic-gradient uppercase relative "
        >
          <div
            className={`h-[40px] flex flex-col px-2 items-center  justify-center  rounded-md  bg-n-8 space-y-2`}
          >
            <div
              className="w-full h-[2px] rounded-full bg-white 
               rotate-45 translate-y-1 transition-all duration-150 ease-in-out"
            ></div>
            <div className="w-full h-[2px] rounded-full bg-white -rotate-45 -translate-y-1 transition-all duration-150 ease-in-out"></div>
          </div>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen relative z-30 ">
        <HeaderLinks
          cl1="max-lg:flex flex-col gap-12 hidden"
          onlyMobile={true}
        />
      </div>

      <Rings />
      <div className="absolute md:hidden">
        <BackgroundCircles />
      </div>
    </motion.div>
  );
};

export default MobileNav;
