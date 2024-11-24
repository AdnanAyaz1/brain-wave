import { mobileNavigationLinks, navigation } from "@/constants";
import React from "react";
import { twMerge } from "tailwind-merge";

const HeaderLinks = ({
  cl1,
  onlyMobile,
}: {
  cl1: string;
  onlyMobile: boolean;
}) => {
  const Links = onlyMobile ? mobileNavigationLinks : navigation;
  return (
    <div>
      <ul className={twMerge("lg:flex gap-16 hidden ", cl1)}>
        {Links.map((navItem, index) => (
          <li key={index}>
            <a
              className={`font-code text-2xl uppercase ${
                onlyMobile ? "text-white" : "text-n-1/50"
              }  transition-colors hover:text-color-1 lg:text-sm lg:font-semibold `}
              href={navItem.url}
            >
              {navItem.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderLinks;
