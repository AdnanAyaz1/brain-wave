import { LeftLine } from "@/components/Pricing/LeftLine";
import PricingList from "@/components/Pricing/PricingList";
import { RightLine } from "@/components/Pricing/RightLine";
import Heading from "@/components/Reuseable/Heading";
import React from "react";

const Pricing = () => {
  return (
    <section className="overflow-hidden" id="pricing">
      <div className="container relative z-2 py-24">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={"/assets/4-small.png"}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={"/assets/pricing/stars.svg"}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
