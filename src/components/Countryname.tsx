import React, { useState, useEffect } from "react";
import parkdownIcon from "../assets/parkdown.svg";

interface CountrynameProps {
  onClick?: () => void;
  countryName?: string;
  description?: string;
}

const Countryname: React.FC<CountrynameProps> = ({
  onClick,
  countryName = "America",
  description = "The American pool is allocated a fixed portion of the total token supply, reserved for U.S.-based events, challenges, and rewards.",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleClick = () => {
    if (!isLargeScreen) {
      setIsExpanded(!isExpanded);
      if (onClick) onClick(); // Call the parent's onClick handler
    }
  };

  return (
    <div>
      {isLargeScreen ? (
        <div className="flex h-[170px] w-[200px] flex-col items-end justify-center text-right text-white lg:h-[160px] lg:w-[180px] xl:h-[170px] xl:w-[200px] 2xl:h-[180px] 2xl:w-[220px]">
          <div className="mb-1 lg:mb-1 xl:mb-1 2xl:mb-1">
            <span className="font-product-sans-black block text-[20px] lg:text-[28px] xl:text-[32px] 2xl:text-[50px]">
              {countryName}
            </span>
          </div>
          <div className="pr-0">
            <p className="text-right font-['Montserrat'] text-[13px] leading-tight lg:text-[10px] xl:text-[10px] 2xl:text-[11px]">
              {description}
            </p>
          </div>
        </div>
      ) : // Mobile layout - original collapsible behavior
      !isExpanded ? (
        <button
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex items-center justify-between text-white"
        >
          <span className="font-product-sans-black mr-2 text-[20px]">{countryName}</span>
          <img
            src={parkdownIcon}
            alt="Expand"
            className={`h-4 w-4 transition-transform duration-300 ${isHovered ? "scale-110" : ""}`}
          />
        </button>
      ) : (
        <div>
          <button
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex items-center justify-between text-white"
          >
            <span className="font-product-sans-black mr-2 text-[20px]">{countryName}</span>
            <img
              src={parkdownIcon}
              alt="Collapse"
              className={`h-4 w-4 transition-transform duration-300 ${isHovered ? "scale-110" : ""} rotate-180`}
            />
          </button>
          <div className="relative z-50 mt-2 w-[320px] pl-0 text-white">
            <p className="font-['Montserrat'] text-[13px] leading-tight">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Countryname;
