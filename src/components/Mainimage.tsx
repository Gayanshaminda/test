import React from "react";

// Import images
import putinImage from "../assets/putin.svg";
import trumpImage from "../assets/trump-p.png";
import modiImage from "../assets/modi-p.png";

// Define types for sizing
type SizePreset = "putin-size" | "trump-size" | "modi-size";

interface MainimageProps {
  page: number;
  className?: string;
  visible?: boolean;
  hideOnMobile?: boolean;
}

const Mainimage: React.FC<MainimageProps> = ({
  page,
  className = "",
  visible = true,
  hideOnMobile = false,
}) => {
  if (!visible) return null;
  // Determine character and sizing based on page
  let sizePreset: SizePreset;
  let imageSrc: string;
  let altText: string;
  let positionClasses: string;
  // Page-based character selection
  if (page >= 1 && page <= 3) {
    sizePreset = "putin-size";
    imageSrc = putinImage;
    altText = "Putin";
    positionClasses = "fixed bottom-0 left-[-220px] xs:left-[-180px] sm:left-1/2 sm:-translate-x-1/2 md:left-1/2 md:-translate-x-1/2 lg:left-1/2 lg:-translate-x-1/2 xl:left-1/2 xl:-translate-x-1/2 2xl:left-1/2 2xl:-translate-x-1/2 z-10";
  } else if (page >= 4 && page <= 5) {
    sizePreset = "trump-size";
    imageSrc = trumpImage;
    altText = "Trump";
    positionClasses = "fixed bottom-0 left-[-110px] xs:left-[-80px] sm:left-1/2 sm:-translate-x-72 md:left-1/2 md:-translate-x-72 lg:left-1/2 lg:-translate-x-72 xl:left-1/2 xl:-translate-x-72 2xl:left-1/2 2xl:-translate-x-72 z-10";
  } else if (page >= 6 && page <= 7) {
    sizePreset = "modi-size";
    imageSrc = modiImage;
    altText = "Modi";
    positionClasses = "fixed bottom-0 left-[-110px] xs:left-[-80px] sm:left-1/2 sm:-translate-x-72 md:left-1/2 md:-translate-x-72 lg:left-1/2 lg:-translate-x-72 xl:left-1/2 xl:-translate-x-72 2xl:left-1/2 2xl:-translate-x-72 z-10";
  } else {
    // Default fallback for any other pages
    sizePreset = "putin-size";
    imageSrc = putinImage;
    altText = "Character";
    positionClasses = "fixed bottom-0 left-1/2 -translate-x-1/2 z-10";
  }

  // Define size classes for each character type
  let sizeClasses: string;
  if (sizePreset === "putin-size") {
    sizeClasses = "w-[620px] sm:w-[650px] md:w-[720px] lg:w-[800px] xl:w-[800px] 2xl:w-[900px] 3xl:w-[1500px] h-[620px] sm:h-[650px] md:h-[720px] lg:h-[800px] xl:h-[800px] 2xl:h-[900px] 3xl:h-[1500px]";
  } else if (sizePreset === "trump-size") {
    sizeClasses = "w-[600px] sm:w-[670px] md:w-[780px] lg:w-[850px] xl:w-[850px] 2xl:w-[1000px] 3xl:w-[1300px] h-[600px] sm:h-[670px] md:h-[780px] lg:h-[850px] xl:h-[850px] 2xl:h-[1000px] 3xl:h-[1300px]";
  } else if (sizePreset === "modi-size") {
    sizeClasses = "w-[670px] sm:w-[700px] md:w-[780px] lg:w-[850px] xl:w-[900px] 2xl:w-[1050px] 3xl:w-[1350px] h-[670px] sm:h-[700px] md:h-[780px] lg:h-[850px] xl:h-[900px] 2xl:h-[1050px] 3xl:h-[1350px]";
  } else {
    // Default size classes
    sizeClasses = "w-[620px] sm:w-[650px] md:w-[720px] lg:w-[800px] xl:w-[800px] 2xl:w-[900px] h-[620px] sm:h-[650px] md:h-[720px] lg:h-[800px] xl:h-[800px] 2xl:h-[900px]";
  }

  // Visibility classes
  const visibilityClasses = hideOnMobile ? "hidden sm:block" : "";

  return (
    <div
      className={`mainimage ${sizeClasses} ${positionClasses} ${visibilityClasses} pointer-events-none flex items-end justify-center ${className}`}
    >
      <img
        src={imageSrc}
        alt={altText}
        className="pointer-events-none h-full w-full max-w-full object-contain object-bottom"
      />
    </div>
  );
};

export default Mainimage;