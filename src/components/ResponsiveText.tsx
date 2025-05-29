import React from "react";

interface ResponsiveTextProps {
  text: string;
  mobileWidth?: string;
  mobileHeight?: string;
  desktopWidth?: string;
  desktopHeight?: string;
  className?: string;
  fontSize?: string;
  mobileFontSize?: string;
  desktopFontSize?: string;
  autoWrap?: boolean;
}

const ResponsiveText: React.FC<ResponsiveTextProps> = ({
  text,
  mobileWidth = "w-[300px]",
  mobileHeight = "h-auto",
  desktopWidth = "w-[650px]",
  desktopHeight = "h-auto",
  className = "",
  fontSize,
  mobileFontSize,
  desktopFontSize,
  autoWrap = true,
}) => {
  const fontSizeClass = fontSize ? `text-${fontSize}` : "";
  const mobileFontSizeClass = mobileFontSize ? `sm:text-${mobileFontSize}` : "";
  const desktopFontSizeClass = desktopFontSize ? `md:text-${desktopFontSize}` : "";
  return (
    <div
      className={` ${mobileWidth} ${mobileHeight} ${desktopWidth} ${desktopHeight} flex items-start justify-start overflow-visible text-left transition-all duration-200 ${fontSizeClass} ${mobileFontSizeClass} ${desktopFontSizeClass} ${className} `}
    >
      {autoWrap ? <span className="w-full break-words">{text}</span> : <span>{text}</span>}
    </div>
  );
};

export default ResponsiveText;
