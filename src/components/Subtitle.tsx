import React from "react";
import ResponsiveText from "./ResponsiveText";

interface SubtitleProps {
  subtitle: string;
  className?: string;
  page?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
}

const Subtitle: React.FC<SubtitleProps> = ({ subtitle, className = "", page = 1 }) => {
  let subtitleMobileWidth, subtitleDesktopWidth;
  if (page <= 3) {
    subtitleMobileWidth =
      "w-[220px] max-w-[220px] sm:w-[70%] sm:max-w-none md:w-[60%] lg:w-[60%] xl:w-[55%] xl:max-w-[400px]";
    subtitleDesktopWidth = "";
  } else if (page <= 5) {
    subtitleMobileWidth =
      "w-[220px] max-w-[220px] sm:w-[70%] sm:max-w-none md:w-[65%] lg:w-[60%] xl:w-[50%] xl:max-w-[400px]";
    subtitleDesktopWidth = "";
  } else {
    subtitleMobileWidth =
      "w-[240px] max-w-[240px] sm:w-[70%] sm:max-w-none md:w-[65%] lg:w-[60%] xl:w-[55%] xl:max-w-[400px]";
    subtitleDesktopWidth = "";
  }

  return (
    <div className={`-mt-4 ml-0 sm:ml-7 md:-mt-6 md:ml-10 lg:ml-6 xl:ml-8 ${className}`}>
      <ResponsiveText
        text={subtitle}
        mobileWidth={subtitleMobileWidth}
        mobileHeight="h-auto"
        desktopWidth={subtitleDesktopWidth}
        desktopHeight="h-auto"
        autoWrap={true}
        className={`font-montserrat text-[14px] leading-tight break-words opacity-80 sm:text-[16px] md:text-[16px] lg:text-[17px] xl:text-[20px] 2xl:text-[20px]`}
      />
    </div>
  );
};

export default Subtitle;
