import React from "react";
import { MouseParallax } from "react-just-parallax";

const HeroParallax = () => {
  return (
    <MouseParallax>
      <div className="absolute bottom-1/2 left-1/2 w-2 h-2 origin-bottom rotate-[46deg] -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out border-2 border-white z-40" />

      <div className="absolute bottom-1/2 left-1/2 w-4 h-4 origin-bottom -rotate-[56deg] -ml-2 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out" />

      <div className="absolute bottom-1/2 left-1/2 w-4 h-4 origin-bottom rotate-[54deg] -ml-2 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out xl:block hidden" />

      <div className="absolute bottom-1/2 left-1/2 w-3 h-3 origin-bottom -rotate-[65deg] -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out" />

      <div className="absolute bottom-1/2 left-1/2 w-6 h-6 origin-bottom -rotate-[85deg] -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out" />

      <div className="absolute bottom-1/2 left-1/2 w-6 h-6 origin-bottom rotate-[70deg] -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out" />
    </MouseParallax>
  );
};

export default HeroParallax;
