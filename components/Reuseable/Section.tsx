import SectionSvg from "@/public/assets/svg/SectionSvg";
import React, { ReactNode, forwardRef } from "react";

interface SectionProps {
  className?: string;
  id?: string;
  crosses?: boolean;
  crossesOffset?: string;
  customPaddings?: string;
  children: ReactNode;
}

// Forward ref in the Section component
const Section = forwardRef<HTMLDivElement, SectionProps>(
  (
    { className, id, crosses, crossesOffset, customPaddings, children },
    ref
  ) => {
    return (
      <div
        id={id}
        ref={ref} // Use the forwarded ref here
        className={`
        relative 
        ${
          customPaddings ||
          `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
        } 
        ${className || ""}`}
      >
        {children}

        <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
        <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />

        {crosses && (
          <>
            <div
              className={`hidden absolute top-0 border-2 border-white left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
                crossesOffset || ""
              } pointer-events-none lg:block xl:left-10 right-10`}
            />
            <SectionSvg crossesOffset={crossesOffset || ""} />
          </>
        )}
      </div>
    );
  }
);

export default Section;
