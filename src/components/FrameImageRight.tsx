import React from "react";
import frame26Svg from "../assets/frame-right-vector.svg";
import frameIconSvg from "../assets/frame-icon.svg";
import Marquee from "react-fast-marquee";

interface FrameImageRightProps {
  className?: string;
}

const FrameImageRight: React.FC<FrameImageRightProps> = ({ className = "" }) => {
  return (
    <div className="hidden w-full lg:grid lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12">
      <div
        className={`col-span-6 col-start-7 mt-[-3vw] mr-[4.5vw] ml-auto w-full justify-self-end lg:col-span-6 lg:col-start-7 lg:mt-[-0.3vw] lg:mr-[-8.6vw] xl:col-span-6 xl:col-start-7 xl:mt-[-24.8vw] xl:mr-[-10.8vw] 2xl:col-span-6 2xl:col-start-7 2xl:mt-[-24.5vw] 2xl:mr-[-10.9vw] ${className}`}
      >
        <div className="relative">
          <img
            src={frame26Svg}
            alt="Frame 26"
            className="h-auto w-[60%] object-contain lg:w-[74%] xl:max-w-[63%] 2xl:max-w-[60%]"
          />
          <div className="absolute top-0 left-0 h-full w-full">
            <div className="absolute w-full -translate-x-1/2 rotate-[53.71deg] transform lg:top-[38%] lg:left-[37%] lg:w-[120%] xl:top-[38%] xl:left-[32%] xl:w-full 2xl:top-[35%] 2xl:left-[30%] 2xl:w-full">
              <div className="flex items-center overflow-hidden">
                <Marquee
                  speed={50}
                  direction="right"
                  gradient={false}
                  className="font-product-sans-black flex items-center text-lg text-white md:text-xl lg:text-2xl"
                >
                  {Array(8)
                    .fill(0)
                    .map((_, index) => (
                      <span key={index} className="flex items-center justify-center">
                        <span className="flex items-center leading-none">G.S #2025</span>
                        <img
                          src={frameIconSvg}
                          alt="Frame Icon"
                          className="ml-2 flex-shrink-0 rotate-[23deg] transform lg:h-6 lg:w-6 xl:h-8 xl:w-8 2xl:h-16 2xl:w-16"
                        />
                      </span>
                    ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameImageRight;
