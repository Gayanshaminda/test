import React, { ReactNode } from "react";
import cloudDesktop from "../assets/cloud.svg";
import cloudMobile from "../assets/cloud-d.svg";

interface CloudProps {
  className?: string;
  text?: string;
  children?: ReactNode;
  top?: string;
  left?: string;
  lineHeight?: string;
  hideOnMobile?: boolean;
}

const Cloud: React.FC<CloudProps> = ({
  className = "",
  text = "",
  children,
  top = "top-[36%] sm:top-[37%] md:top-[38%] lg:top-[12%] xl:top-[14%] 2xl:top-[10%]",
  left = "left-[70%] sm:left-[75%] md:left-[75%] lg:left-[78%] xl:left-[78%] 2xl:left-[79%]",
  lineHeight = "leading-tight",
  hideOnMobile = false,
}) => {
  return (
    <div
      className={`${hideOnMobile ? "hidden sm:block" : ""} absolute h-[80px] w-[144px] sm:h-[100px] sm:w-[180px] md:h-[120px] md:w-[220px] lg:h-[120px] lg:w-[240px] xl:h-[120px] xl:w-[280px] 2xl:h-[117px] 2xl:w-[330px] ${top} ${left} ${className} z-10 -translate-x-1/2 transform`}
    >
      {/* Mobile cloud image */}
      <img src={cloudMobile} alt="cloud" className="block h-full w-full object-contain lg:hidden" />
      {/* Desktop cloud image  */}
      <img
        src={cloudDesktop}
        alt="cloud"
        className="hidden h-full w-full object-contain lg:block xl:object-contain 2xl:object-contain"
      />
      {(text || children) && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center">
          <div
            className={`font-product-sans-black mx-auto mt-5 w-[90px] text-[10px] sm:mt-3 sm:w-[120px] sm:text-[12px] md:mt-3 md:w-[140px] md:text-[14px] lg:-mt-3 lg:w-[160px] lg:text-[17px] xl:w-[180px] xl:text-[18px] 2xl:w-[180px] 2xl:text-[19px] ${lineHeight} -rotate-[14.37deg] overflow-hidden font-bold break-words text-[#E84481]`}
          >
            {children || text}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cloud;
