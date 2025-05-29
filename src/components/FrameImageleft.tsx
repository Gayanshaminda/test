import React from "react";
import frame24Svg from "../assets/frame-left-vector.svg";
import frameIconSvg from "../assets/frame-icon.svg";
import Marquee from "react-fast-marquee";

interface FrameImageProps {
  className?: string;
}

const FrameImageLeft: React.FC<FrameImageProps> = ({ className = "" }) => {
  return (
    <div className="hidden w-full xl:grid xl:grid-cols-12 2xl:grid-cols-12">
      <div
        className={`col-span-10 col-start-1 w-full xl:col-span-6 xl:mt-[0vw] xl:ml-[8.6vw] 2xl:col-span-6 2xl:mt-[-3.5vw] 2xl:ml-[10.1vw] ${className}`}
      >
        <div className="relative">
          {" "}
          <img
            src={frame24Svg}
            alt="Frame 24"
            className="h-auto w-full object-contain xl:origin-left xl:scale-105 2xl:scale-100"
          />
          <div className="absolute top-0 left-0 h-full w-full">
            <div className="absolute -translate-x-1/2 rotate-[-25.95deg] transform xl:top-[37%] xl:left-[50%] xl:w-[110%] 2xl:top-[36%] 2xl:left-[45%] 2xl:w-full">
              <div className="flex items-center overflow-hidden">
                <Marquee
                  speed={50}
                  direction="right"
                  gradient={false}
                  className="font-product-sans-black flex items-center text-xl text-white xl:text-2xl"
                >
                  {" "}
                  {Array(8)
                    .fill(0)
                    .map((_, index) => (
                      <span key={index} className="flex items-center justify-center">
                        {" "}
                        <span className="flex items-center leading-none xl:mr-3 2xl:mr-2">
                          G.S #2025
                        </span>
                        <img
                          src={frameIconSvg}
                          alt="Frame Icon"
                          className="flex-shrink-0 rotate-[23deg] transform xl:ml-3 xl:h-8 xl:w-8 2xl:ml-2 2xl:h-16 2xl:w-16"
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

export default FrameImageLeft;
