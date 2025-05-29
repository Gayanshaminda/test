import React from "react";
import group56Svg from "../assets/Group 56.svg";

interface GroupImageProps {
  className?: string;
}

const GroupImage: React.FC<GroupImageProps> = ({ className = "" }) => {
  return (
    <div
      className={`absolute bottom-0 left-0 z-[100] hidden h-full w-full items-end justify-start lg:flex ${className}`}
    >
      <div className="relative -rotate-[2.37deg] drop-shadow-2xl lg:mb-[80px] lg:ml-[80px] lg:h-[100px] lg:w-[200px] xl:mb-[50px] xl:ml-[100px] xl:h-[130px] xl:w-[230px] 2xl:mb-[60px] 2xl:ml-[130px] 2xl:h-[140px] 2xl:w-[250px]">
        {" "}
        <img src={group56Svg} alt="Group 56" className="h-full w-full object-contain" />
      </div>
    </div>
  );
};

export default GroupImage;
