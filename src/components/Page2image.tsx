import React from "react";
import PersonShadow from "./PersonShadow";

// Define size options for the image
type SizeOption = "putin-preset" | "trump-preset" | "modi-preset" | "custom";

interface Page2imageProps {
  imageSrc: string;
  shadowSrc?: string;
  altText?: string;
  className?: string;
  size?: SizeOption;
  // Custom position classes to be passed from pages
  positionClasses?: string;
  // For custom positioning and sizing
  width?: string;
  height?: string;
  left?: string;
  bottom?: string;
  visible?: boolean;
  hideOnMobile?: boolean;
}

const Page2image: React.FC<Page2imageProps> = ({
  imageSrc,
  shadowSrc,
  altText = "Page Image",
  className = "",
  size = "custom",
  positionClasses = "",
  width,
  height,
  left,
  bottom = "bottom-0",
  visible = true,
  hideOnMobile = false,
}) => {
  if (!visible) return null;

  // Define preset size classes for different characters
  let sizeClasses: string;
  let finalPositionClasses: string;

  if (size === "putin-preset") {
    sizeClasses = "w-[620px] sm:w-[650px] md:w-[720px] lg:w-[800px] xl:w-[800px] 2xl:w-[900px] h-[620px] sm:h-[650px] md:h-[720px] lg:h-[800px] xl:h-[800px] 2xl:h-[900px]";
    finalPositionClasses = positionClasses || "fixed bottom-0 left-1/2 -translate-x-1/2 z-30";
  } else if (size === "trump-preset") {
    sizeClasses = "w-[670px] sm:w-[700px] md:w-[780px] lg:w-[850px] xl:w-[900px] 2xl:w-[1050px] h-[670px] sm:h-[700px] md:h-[780px] lg:h-[850px] xl:h-[900px] 2xl:h-[1050px]";
    finalPositionClasses = positionClasses || "fixed bottom-0 left-[-110px] xs:left-[-80px] sm:left-1/2 sm:-translate-x-72 md:left-1/2 md:-translate-x-72 lg:left-1/2 lg:-translate-x-72 xl:left-1/2 xl:-translate-x-72 2xl:left-1/2 2xl:-translate-x-72 z-30";
  } else if (size === "modi-preset") {
    sizeClasses = "w-[670px] sm:w-[700px] md:w-[780px] lg:w-[850px] xl:w-[900px] 2xl:w-[1050px] h-[670px] sm:h-[700px] md:h-[780px] lg:h-[850px] xl:h-[900px] 2xl:h-[1050px]";
    finalPositionClasses = positionClasses || "fixed bottom-0 left-[-110px] xs:left-[-80px] sm:left-1/2 sm:-translate-x-72 md:left-1/2 md:-translate-x-72 lg:left-1/2 lg:-translate-x-72 xl:left-1/2 xl:-translate-x-72 2xl:left-1/2 2xl:-translate-x-72 z-30";
  } else {
    // Custom size - use provided width/height or defaults
    sizeClasses = `${width || "w-[400px] sm:w-[420px] md:w-[450px] lg:w-[400px] xl:w-[470px] 2xl:w-[480px]"} ${height || "h-[400px] sm:h-[420px] md:h-[450px] lg:h-[400px] xl:h-[470px] 2xl:h-[480px]"}`;
    finalPositionClasses = positionClasses || `fixed ${bottom} ${left || "left-1/2 -translate-x-1/2"} z-30`;
  }

  // Visibility classes
  const visibilityClasses = hideOnMobile ? "hidden sm:block" : "";

  return (
    <>
      {/* Main Image */}
      <div
        className={`page-image ${sizeClasses} ${finalPositionClasses} ${visibilityClasses} pointer-events-none flex items-end justify-center ${className}`}
      >
        <img
          src={imageSrc}
          alt={altText}
          className="pointer-events-none h-full w-full max-w-full object-contain object-bottom"
        />
      </div>

      {/* Shadow Image (if provided) */}
      {shadowSrc && (
        <PersonShadow
          shadowSrc={shadowSrc}
          width={width}
          height={height}
          left={left}
          bottom={bottom}
          className="z-20 -translate-x-1/4 transform sm:-translate-x-1/2 lg:mb-1 xl:-mb-3 2xl:-mb-4"
          visible={visible}
        />
      )}
    </>
  );
};

export default Page2image;
