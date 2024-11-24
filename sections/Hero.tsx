"use client";
import CompanyLogos from "@/components/Header/CompanyLogos";
import Generating from "@/components/Hero/Generating";
import Notification from "@/components/Hero/Notification";
import Planets from "@/components/Hero/Planets";
import { BottomLine } from "@/components/Reuseable/BottomLine";
import ClippedButton from "@/components/Reuseable/ClippedButton";
import Rings from "@/components/Reuseable/Rings";
import { heroIcons } from "@/constants";
import Image from "next/image";
import React, { useRef } from "react";
import { MouseParallax, ScrollParallax } from "react-just-parallax";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <div id="#hero " ref={parallaxRef}>
      <div className="container relative py-[7rem] ">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `}
            <span className="inline-block relative">
              Brainwave {/* this image is underline gradient */}
              <Image
                src={"/assets/hero/curve.png"}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <ClippedButton text="Explore Here" cl1="" />
        </div>
        <div className="relative">
          {/* this here is the center image */}
          <Image
            src="/assets/robot.jpg"
            width={1024}
            height={1024}
            className="object-cover object-[center_38%] mx-auto h-[500px] w-[1024px] rounded-md"
            alt="AI"
          />
          <MouseParallax
            isAbsolutelyPositioned
            zIndex={30}
            enableOnTouchDevice={true}
            strength={0.05}
          >
            <Planets />
          </MouseParallax>
          <div className="absolute -z-10 max-sm:-top-[200px] scale-150 md:scale-[1] -top-[500px] w-full ">
            <Image
              src={"/assets/hero-background.jpg"}
              alt="hero"
              width={2000}
              height={2000}
              className="h-full w-full object-contain object-center"
            />
          </div>

          <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

          <ScrollParallax isAbsolutelyPositioned>
            <ul className="hidden absolute left-[1.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
              {heroIcons.map((icon, index) => (
                <li className="p-5" key={index}>
                  <Image
                    src={icon || ""}
                    width={24}
                    height={25}
                    alt={icon || ""}
                  />
                </li>
              ))}
            </ul>
          </ScrollParallax>

          <ScrollParallax isAbsolutelyPositioned>
            <Notification
              className="hidden absolute -right-[3.5rem] bottom-[13rem] w-[18rem] xl:flex"
              title="Code generation"
            />
          </ScrollParallax>

          <div className="top-[30px] -z-10 absolute left-1/2 border-2 border-white">
            <Rings />
          </div>
        </div>
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>
      <BottomLine />
    </div>
  );
};

export default Hero;
