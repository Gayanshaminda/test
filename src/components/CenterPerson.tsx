import React from "react";

// Define size options for the center person
type SizeOption = "normal" | "large" | "putin-preset" | "trump-preset" | "modi-preset" | "custom";
// Define position options
type PositionOption =
  | "center"
  | "left"
  | "right"
  | "putin-center"
  | "trump-center"
  | "modi-center"
  | "custom";

interface CenterPersonProps {
  imageSrc: string;
  altText?: string;
  className?: string;
  size?: SizeOption;
  position?: PositionOption;
  // For custom positioning and sizing
  width?: string;
  height?: string;
  left?: string;
  bottom?: string;
  visible?: boolean;
  hideOnMobile?: boolean;
}

const CenterPerson: React.FC<CenterPersonProps> = ({
  imageSrc,
  altText = "Center Person",
  className = "",
  size = "normal",
  position = "center",
  width,
  height,
  left,
  bottom = "bottom-0",
  visible = true,
  hideOnMobile = false,
}) => {
  if (!visible) return null;
  let sizeClasses;
  if (size === "large") {
    sizeClasses =
      "w-[620px] sm:w-[650px] md:w-[720px] lg:w-[800px] xl:w-[800px] 2xl:w-[900px] 3xl:w-[1200px] h-[620px] sm:h-[650px] md:h-[720px] lg:h-[800px] xl:h-[800px] 2xl:h-[900px] 3xl:h-[1200px]";
  } else if (size === "putin-preset") {
    sizeClasses =
      "w-[620px] sm:w-[650px] md:w-[720px] lg:w-[800px] xl:w-[800px] 2xl:w-[900px] 3xl:w-[1500px] h-[620px] sm:h-[650px] md:h-[720px] lg:h-[800px] xl:h-[800px] 2xl:h-[900px] 3xl:h-[1500px]";
  } else if (size === "trump-preset") {
    sizeClasses =
      "w-[600px] sm:w-[670px] md:w-[780px] lg:w-[850px] xl:w-[850px] 2xl:w-[1000px] 3xl:w-[1300px] h-[600px] sm:h-[670px] md:h-[780px] lg:h-[850px] xl:h-[850px] 2xl:h-[1000px] 3xl:h-[1300px]";
  } else if (size === "modi-preset") {
    sizeClasses =
      "w-[670px] sm:w-[700px] md:w-[780px] lg:w-[850px] xl:w-[900px] 2xl:w-[1050px] 3xl:w-[1350px] h-[670px] sm:h-[700px] md:h-[780px] lg:h-[850px] xl:h-[900px] 2xl:h-[1050px] 3xl:h-[1350px]";
  } else if (size === "custom" && width && height) {
    sizeClasses = `${width} ${height}`;
  } else {
    // Default 'normal' size
    sizeClasses =
      "w-[460px] sm:w-[500px] md:w-[580px] lg:w-[650px] xl:w-[750px] 2xl:w-[750px] 3xl:w-[950px] h-[460px] sm:h-[500px] md:h-[580px] lg:h-[650px] xl:h-[750px] 2xl:h-[750px] 3xl:h-[950px]";
  } // Define position
  let positionClasses;
  if (position === "left") {
    positionClasses =
      "fixed bottom-0 left-[-230px] sm:left-[-180px] md:left-[-140px] lg:left-[-70px] z-10";
  } else if (position === "right") {
    positionClasses =
      "fixed bottom-0 right-0 md:right-[20px] lg:right-[100px] xl:right-[120px] 2xl:right-[150px] z-10";
  } else if (position === "putin-center") {
    positionClasses =
      "fixed bottom-0 left-[-220px] xs:left-[-180px] sm:left-[calc(50%-100px)] md:left-[calc(50%-100px)] lg:left-[calc(50%-30px)] xl:left-[calc(50%-15px)] 2xl:left-[calc(51%)] transform sm:transform sm:-translate-x-1/2 z-10";
  } else if (position === "trump-center") {
    positionClasses =
      "fixed bottom-0 left-[45px] xs:left-[-50px] sm:left-[calc(50%+5px)] md:left-[calc(50%+0px)] lg:left-[calc(50%+70px)] xl:left-[calc(50%+140px)] 2xl:left-[calc(50%+220px)] transform -translate-x-1/4 sm:-translate-x-1/2 z-10";
  } else if (position === "modi-center") {
    positionClasses =
      "fixed bottom-0 left-[65px] xs:left-[-100px] sm:left-[calc(50%+20px)] md:left-[calc(50%+30px)] lg:left-[calc(50%+120px)] xl:left-[calc(50%+180px)] 2xl:left-[calc(50%+200px)] transform -translate-x-1/4 sm:-translate-x-1/2 z-10";
  } else if (position === "custom" && left) {
    positionClasses = `fixed ${bottom} ${left} z-10`;
  } else {
    // Default 'center' position - moved more to the right on web screens
    positionClasses =
      "fixed bottom-0 left-[-220px] xs:left-[-180px] sm:left-[calc(50%-100px)] md:left-[calc(50%-100px)] lg:left-[calc(50%-30px)] xl:left-[calc(50%-15px)] 2xl:left-[calc(51%)] transform sm:transform sm:-translate-x-1/2 z-10";
  }

  // Set visibility based on hideOnMobile
  const visibilityClasses = hideOnMobile ? "hidden sm:block" : "";
  return (
    <div
      className={`center-person ${sizeClasses} ${positionClasses} ${visibilityClasses} pointer-events-none flex items-end justify-center ${className}`}
    >
      <img
        src={imageSrc}
        alt={altText}
        className="pointer-events-none h-full w-full max-w-full object-contain object-bottom"
      />
    </div>
  );
};

export default CenterPerson;
