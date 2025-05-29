import React, { useState } from "react";
import translateIcon from "../assets/translate.svg";
import translateDownIcon from "../assets/translate-down.svg";

interface TranslateIconButtonProps {
  onClick?: () => void;
  className?: string;
  isActive?: boolean;
}

const TranslateIconButton: React.FC<TranslateIconButtonProps> = ({ onClick, className = "" }) => {
  const [hover, setHover] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  return (
    <div className="pointer-events-auto fixed right-4 bottom-3 z-[100] max-w-[56px] transition-all duration-300 sm:right-5 sm:bottom-4 md:right-6 md:bottom-4 lg:hidden xl:hidden">
      <button
        className={`translate-icon-button relative flex h-[62px] w-[36px] cursor-pointer flex-col items-center justify-between gap-1 rounded-3xl border-[2px] border-[#E84481] bg-gradient-to-r from-[#932A51] via-[rgba(81,19,42,0.83)] to-[#932A51] p-[7px] shadow-lg transition-all duration-300 hover:shadow-xl sm:h-[68px] sm:w-[40px] sm:p-[8px] md:h-[70px] md:w-[42px] ${isPressed ? "scale-95" : ""} ${hover ? "brightness-110" : ""} ${className}`}
        onClick={() => {
          setIsPressed(true);
          setTimeout(() => setIsPressed(false), 200);
          if (onClick) onClick();
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {" "}
        <img
          src={translateIcon}
          alt="Translate"
          className={`mt-0.5 h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6 ${hover ? "brightness-125" : ""}`}
        />
        <div className="flex-grow"></div>
        <img
          src={translateDownIcon}
          alt="Down Arrow"
          className="mb-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-4 md:w-4"
        />
      </button>
    </div>
  );
};

export default TranslateIconButton;
