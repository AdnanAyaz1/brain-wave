import LeftCurve from "@/components/Collaboration/LeftCurve";
import RightCurve from "@/components/Collaboration/RightCurve";
import { collabApps, collabContent, collabText } from "@/constants";
import React from "react";

const Collaoration = () => {
  return (
    <div className="container lg:flex py-20">
      <div className="max-w-[25rem]">
        <h2 className="h2 mb-4 md:mb-8">
          AI Chat App for seamless collaboration
        </h2>

        <ul className="max-w-[22rem] mb-10 md:mb-14">
          {collabContent.map((item) => (
            <li className="mb-3 py-3" key={item.id}>
              <div className="flex items-center">
                <img
                  src={"/assets/check.svg"}
                  width={24}
                  height={24}
                  alt="check"
                />
                <h6 className="body-2 ml-5">{item.title}</h6>
              </div>
              {item.text && <p className="body-2 mt-3 text-n-4">{item.text}</p>}
            </li>
          ))}
        </ul>

        <button>Try it now</button>
      </div>

      <div className="lg:ml-auto xl:w-[38rem] mt-4">
        <p className="body-2 pb-8 text-n-4 md:pb-16 lg:mb-32 lg:w-[22rem]  lg:mx-auto ">
          {collabText}
        </p>
        <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full max-lg:mt-[130px]">
          <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full ">
            {/* Center Brainwave Icon */}
            <img
              src={"/assets/brainwave-symbol.svg"}
              width={48}
              height={48}
              alt="brainwave"
              className="relative"
            />

            {/* Concentric Circles */}
            <div className="w-60 h-60 absolute border border-n-6 rounded-full"></div>
            <div className="w-80 h-80 absolute border border-n-6 rounded-full">
              {/* Map collabApps to arrange in a circular pattern */}
              {collabApps.map((app, index) => {
                const totalIcons = collabApps.length; // Total number of icons
                const angle = (360 / totalIcons) * index; // Angle for each icon
                const radius = 160; // Adjust radius to fit within parent circle

                // Calculate x and y using trigonometry
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);

                return (
                  <div
                    key={index}
                    className="absolute flex items-center justify-center w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl left-[130px] bottom-[130px] "
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                );
              })}
              <LeftCurve />
              <RightCurve />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaoration;
