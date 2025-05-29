import React from "react";
import copyIcon from "../assets/copy-2.svg";

interface CopyProps {
  className?: string;
  onClick?: () => void;

  top?: string;
  right?: string;
  codeText?: string;
}

const Copy: React.FC<CopyProps> = ({
  className = "",
  onClick,
  top = "top-[10%] sm:top-[8%] md:top-[8%]",
  right = "right-[5%] sm:right-[4%] md:right-[5%]",
  codeText = "DPTP4fUfEsrsasWuwVTgCmttqBu6Sy5B9TeCTBjc2YKgpDpump",
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default copy behavior
      navigator.clipboard
        .writeText(codeText)
        .then(() => {
          alert("Code copied to clipboard!");
        })
        .catch((err) => {
          console.error("Could not copy text: ", err);
        });
    }
  };
  const positionClasses = `fixed ${top} ${right} z-10`;
  return (
    <div className={`copy-button ${positionClasses} block lg:hidden ${className}`}>
      {/* Common container for both SVG and text with mobile-optimized positioning */}
      <div
        className="relative h-36 w-36 cursor-pointer sm:h-42 sm:w-42 md:h-48 md:w-42"
        onClick={handleClick}
      >
        {/* SVG icon */}
        <img
          src={copyIcon}
          alt="Copy"
          className="pointer-events-none block h-full w-full"
          style={{ display: "block" }}
        />
        {/* Text overlay positioned for mobile screens */}
        <div className="pointer-events-none absolute top-[35%] left-[-2%] rotate-[-25.45deg] font-mono text-[6px] leading-none tracking-tighter whitespace-nowrap text-white sm:text-[7px] md:text-[7px]">
          {codeText}
        </div>
      </div>
    </div>
  );
};

export default Copy;
