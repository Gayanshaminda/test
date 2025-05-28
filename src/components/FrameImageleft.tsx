import React from 'react';
import frame24Svg from '../assets/frame-left-vector.svg';
import frameIconSvg from '../assets/frame-icon.svg';
import Marquee from 'react-fast-marquee';

interface FrameImageProps {
  className?: string;
}

const FrameImageLeft: React.FC<FrameImageProps> = ({ className = '' }) => {
  return (
    <div className="hidden xl:grid xl:grid-cols-12 2xl:grid-cols-12 w-full">
      <div
        className={`col-start-1 col-span-10 
          xl:col-span-6 2xl:col-span-6          w-full 
          xl:mt-[0vw] 2xl:mt-[-3.5vw]
          xl:ml-[8.6vw] 2xl:ml-[10.1vw]
          ${className}`}
      >
        <div className="relative">          <img
            src={frame24Svg}
            alt="Frame 24"
            className="w-full h-auto object-contain xl:scale-105 xl:origin-left 2xl:scale-100"
          />
          
          <div className="absolute top-0 left-0 w-full h-full">             
             <div className="absolute 
            xl:top-[37%] 2xl:top-[36%] 
            xl:left-[50%] 2xl:left-[45%] 
            transform -translate-x-1/2 rotate-[-25.95deg] xl:w-[110%] 2xl:w-full">
              <div className="overflow-hidden flex items-center">                
                
                <Marquee
                  speed={50}
                  direction="right"
                  gradient={false}
                  className="font-product-sans-black text-white text-xl xl:text-2xl flex items-center"
                >                  {Array(8).fill(0).map((_, index) => (
                    <span
                      key={index}
                      className="flex items-center justify-center"
                    >                      <span className="leading-none flex items-center xl:mr-3 2xl:mr-2">G.S #2025</span>
                      <img
                        src={frameIconSvg}
                        alt="Frame Icon"
                        className="xl:h-8 xl:w-8 2xl:h-16 2xl:w-16 transform rotate-[23deg] xl:ml-3 2xl:ml-2 flex-shrink-0"
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
