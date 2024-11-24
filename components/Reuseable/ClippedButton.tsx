import React from "react";
import { twMerge } from "tailwind-merge";

const ClippedButton = ({ text, cl1 }: { text: string; cl1?: string }) => {
  return (
    <button
      className="m-4 p-[2px] rounded-md bg-conic-gradient uppercase relative overflow-hidden"
      style={{
        clipPath: "polygon(0 0, 75% 0, 100% 30%, 100% 100%, 0 100%)",
      }}
    >
      <span
        className={twMerge(
          `block text-white transition-colors hover:text-color-1 px-4 py-[6px] font-semibold rounded-md  bg-n-8 font-code text-sm lg:font-semibold`,
          cl1
        )}
        style={{
          clipPath: "polygon(0 0, 75% 0, 100% 30%, 100% 100%, 0 100%)",
        }}
      >
        {text}
      </span>
    </button>
  );
};

export default ClippedButton;
