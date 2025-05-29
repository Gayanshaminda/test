import React, { useState, useEffect } from "react";
import parkdownIcon from "../assets/parkdown.svg";

interface BurneventsProps {
  onClick?: () => void;
  description?: string;
}

const Burnevents: React.FC<BurneventsProps> = ({ onClick, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Check if screen is larger than 1024px
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize(); // Check on initial load
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isLargeScreen) {
      setIsExpanded(!isExpanded);
      if (onClick) onClick();
    }
  };
  return (
    <div className="flex w-full">
      {!isLargeScreen && !isExpanded ? (
        <button
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`border-theme-pink-500 bg-card-gradient flex h-12 w-full max-w-xs items-center justify-between rounded-[36px] border px-5 py-3 text-white transition-all duration-300 ease-in-out sm:max-w-md md:max-w-lg ${isHovered ? "shadow-theme-glow" : ""} `}
        >
          <span className="font-['Product_Sans_Black'] text-base font-[900] sm:text-lg">
            Burn Events
          </span>
          <img
            src={parkdownIcon}
            alt="Expand"
            className={`h-4 w-4 transition-transform duration-300 sm:h-5 sm:w-5 ${isHovered ? "scale-110" : ""}`}
          />
        </button>
      ) : (
        <div
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`border-theme-pink-500 bg-card-gradient flex min-h-[150px] w-full max-w-xs flex-col rounded-[36px] border px-9 py-9 text-white transition-all duration-300 ease-in-out sm:min-h-[180px] sm:max-w-md sm:px-4 sm:py-6 md:max-w-lg md:px-5 md:py-7 lg:min-h-[200px] lg:max-w-[420px] lg:px-4 lg:py-8 xl:min-h-[210px] xl:max-w-[430px] xl:px-5 xl:py-9 2xl:min-h-[220px] 2xl:max-w-[450px] 2xl:px-8 2xl:py-9 ${!isLargeScreen ? "cursor-pointer" : ""} ${isHovered ? "shadow-theme-glow" : ""} `}
        >
          <div
            className={`flex items-center ${isLargeScreen ? "justify-center" : "justify-between"} mb-3 sm:mb-3 md:mb-4 lg:mb-3 xl:mb-3`}
          >
            <h3
              className={`font-['Product_Sans_Black'] text-lg font-[900] sm:text-xl md:text-2xl lg:text-2xl xl:text-[28px] 2xl:text-[30px] ${isLargeScreen ? "text-center" : ""} `}
            >
              <span className="text-theme-pink-400">3 : </span>Burn Events
            </h3>
            {!isLargeScreen && (
              <img
                src={parkdownIcon}
                alt="Collapse"
                className={`h-4 w-4 transition-transform duration-300 sm:h-5 sm:w-5 ${isHovered ? "scale-110" : ""} rotate-180`}
              />
            )}
          </div>{" "}
          <div className="flex flex-grow items-center justify-center">
            <p
              className={`font-['Montserrat'] text-xs leading-tight sm:text-sm md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[15px] ${isLargeScreen ? "px-1 text-center lg:px-2 xl:px-3 2xl:px-2" : ""} `}
            >
              {description ||
                "Burn events permanently remove tokens from circulation, reducing the total supply and potentially increasing the value of remaining tokens over time."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Burnevents;
