import { Gradient } from "@/components/brainWaveServices/Gradient";
import TagLine from "@/components/Pricing/Tagline";
import { BottomLine } from "@/components/Reuseable/BottomLine";
import ClippedButton from "@/components/Reuseable/ClippedButton";
import Heading from "@/components/Reuseable/Heading";
import PlusSvg from "@/components/Reuseable/PlusSvg";
import { roadmap } from "@/constants";
import React from "react";

const Roadmap = () => {
  return (
    <section className="overflow-hidden py-24 relative" id="roadmap">
      <div className="container md:pb-10">
        <Heading tag="Ready to get started" title="What we’re working on" />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";

            return (
              <div
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
                key={item.id}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <img
                    className="w-full absolute inset-0 "
                    src={"/assets/grid.png"}
                    width={550}
                    height={550}
                    alt="Grid"
                  />

                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <TagLine>{item.date}</TagLine>

                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        <img
                          className="mr-2.5"
                          src={
                            item.status === "done"
                              ? "/assets/check-02.svg"
                              : "/assets/loading-01.svg"
                          }
                          width={16}
                          height={16}
                          alt={status}
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>

                    <div className="mb-10 -my-10 -mx-15 ">
                      <img
                        className="w-full"
                        src={item.imageUrl}
                        width={628}
                        height={426}
                        alt={item.title}
                      />
                    </div>
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}

          <Gradient />
        </div>

        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <ClippedButton text="Our Roadmap" />{" "}
        </div>
      </div>
      <div className="hidden absolute bottom-10  left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block -z-10" />

      <PlusSvg className="hidden absolute bottom-[35px] left-[2.1875rem] z-2 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute bottom-[35px] right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </section>
  );
};

export default Roadmap;
