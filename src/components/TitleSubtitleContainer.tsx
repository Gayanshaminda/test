import React from "react";
import Title from "./Title";
import Subtitle from "./Subtitle";
import ActionButton from "./RulesButton";

interface TitleSubtitleContainerProps {
  title: string;
  subtitle: string;
  page: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  actionButtonText?: string;
  titleFont?: "rubik-mono-one" | "product-sans" | "product-sans-black" | "montserrat";
  className?: string;
  showActionButton?: boolean;
}

const TitleSubtitleContainer: React.FC<TitleSubtitleContainerProps> = ({
  title,
  subtitle,
  page,
  actionButtonText = "Read Rules",
  titleFont,
  className = "",
  showActionButton = true,
}) => {
  return (
    <div className="relative">
      <div
        className={`relative z-20 mx-6 mt-16 max-w-full text-white sm:mx-0 sm:mt-[70px] sm:max-w-lg md:mx-0 md:mt-[80px] md:max-w-xl lg:mx-4 lg:mt-[100px] lg:max-w-2xl xl:mx-54 xl:mt-[330px] xl:max-w-3xl 2xl:mx-72 2xl:mt-[300px] 2xl:max-w-4xl ${className}`}
      >
        <Title title={title} page={page} titleFont={titleFont} className="md:mb-8 lg:ml-0" />
        <Subtitle subtitle={subtitle} page={page} className="lg:ml-0" />
      </div>
      {showActionButton && <ActionButton text={actionButtonText} />}
    </div>
  );
};

export default TitleSubtitleContainer;
