import React from "react";

const Planets = () => {
  return (
    <>
      <div className="absolute  w-3 h-3   bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out -top-[400px] right-0 z-40 max-md:hidden" />

      <div className="absolute  w-6 h-6  bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out -top-[100px] right-0 max-md:hidden" />

      <div className="absolute  w-4 h-4  bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out -top-[120px] right-[25%] max-md:hidden" />
      <div className="absolute  w-3 h-3   bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out -top-[400px] left-0 z-40 max-md:hidden" />

      <div className="absolute  w-6 h-6  bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out -top-[100px] left-0 max-md:hidden" />

      <div className="absolute  w-4 h-4  bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out -top-[120px] left-[25%] max-md:hidden" />
    </>
  );
};

export default Planets;
