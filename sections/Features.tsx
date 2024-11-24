import { BottomLine } from "@/components/Reuseable/BottomLine";
import { GradientLight } from "@/components/Reuseable/GradientLight";
import Heading from "@/components/Reuseable/Heading";
import PlusSvg from "@/components/Reuseable/PlusSvg";
import { benefits } from "@/constants";
import { div } from "framer-motion/client";
import React from "react";

const Features = () => {
  return (
    <section id="#features" className="relative">
      <div className="relative z-2 container py-[100px]">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((ben, i) => {
            return (
              <div
                key={i}
                className="  bg-n-8 rounded-[30px] rounded-tr-[90px]  md:max-w-[24rem] relative  "
              >
                <img
                  src={ben.backgroundUrl}
                  alt="bg-image"
                  className="w-full h-full absolute inset-0"
                />
                {/* that is the hover image */}
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10 z-3">
                  <img
                    src={ben.imageUrl}
                    width={380}
                    height={362}
                    alt={ben.title}
                    className="w-full h-full object-cover "
                  />
                </div>

                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                  <h5 className="h5 mb-5">{ben.title}</h5>
                  <p className="body-2 mb-6 text-n-3">{ben.text}</p>
                  <div className="flex items-center mt-auto">
                    <img
                      src={ben.iconUrl}
                      width={48}
                      height={48}
                      alt={ben.title}
                    />
                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                      Explore more
                    </p>
                  </div>
                  {ben?.light && <GradientLight />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <BottomLine /> */}
      <div className="hidden absolute bottom-0  left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block -z-10" />

      <PlusSvg className="hidden absolute bottom-[-5px] left-[2.1875rem] z-2 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute bottom-[-5px] right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </section>
  );
};

export default Features;
