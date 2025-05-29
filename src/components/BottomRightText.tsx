import React from "react";

interface BottomRightTextProps {
  text: string;
  className?: string;
  centerOnMobile?: boolean;
}

const BottomRightText: React.FC<BottomRightTextProps> = ({
  text,
  className = "",
  centerOnMobile = true,
}) => {
  const textSizes =
    "text-[14px] sm:text-[16px] md:text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]";

  const marginBottoms = "mb-6 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4";

  return (
    <div
      className={`font-montserrat fixed bottom-0 z-20 leading-[120%] font-medium tracking-[0%] text-white ${textSizes} ${marginBottoms} ${
        centerOnMobile
          ? // On mobile: centered at bottom
            "left-1/2 -ml-4 flex h-[30px] w-[254px] -translate-x-1/2 transform items-center justify-center text-center" +
            // sm and md: centered horizontally
            " sm:left-1/2 sm:ml-0 sm:h-auto sm:w-auto sm:-translate-x-1/2 sm:transform sm:whitespace-nowrap" +
            // lg and above: right aligned
            " lg:right-6 lg:left-auto lg:translate-x-0 lg:transform-none"
          : // Always bottom right
            "right-6 sm:whitespace-nowrap"
      } ${className} `}
    >
      {text}
    </div>
  );
};

export default BottomRightText;
