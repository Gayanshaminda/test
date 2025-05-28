import React from 'react';
import frame26Svg from '../assets/frame-right-vector.svg';
import frameIconSvg from '../assets/frame-icon.svg';
import Marquee from 'react-fast-marquee';

interface FrameImageRightProps {
  className?: string;
}

const FrameImageRight: React.FC<FrameImageRightProps> = ({ className = '' }) => {
  return (    
  
  <div className="hidden lg:grid lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12 w-full">
      <div className={`justify-self-end 
          col-start-7 col-span-6 
          lg:col-start-7 lg:col-span-6 xl:col-start-7 xl:col-span-6 2xl:col-start-7 2xl:col-span-6
          w-full 
          mt-[-3vw] lg:mt-[-0.3vw] xl:mt-[-24.8vw] 2xl:mt-[-24.5vw]
          ml-auto mr-[4.5vw] lg:mr-[-8.6vw] xl:mr-[-10.8vw] 2xl:mr-[-10.9vw]
          ${className}`}      >       
          
          
           <div className="relative">
         
          <img
            src={frame26Svg}
            alt="Frame 26"
            className="w-[60%] h-auto lg:w-[74%] xl:max-w-[63%] 2xl:max-w-[60%] object-contain"
          />          
            <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute 
            lg:top-[38%] xl:top-[38%] 2xl:top-[35%] 
            lg:left-[37%] xl:left-[32%] 2xl:left-[30%] 
            transform -translate-x-1/2 rotate-[53.71deg] w-full lg:w-[120%] xl:w-full 2xl:w-full">


              <div className="overflow-hidden flex items-center">
                
                <Marquee
                  speed={50}
                  direction="right"
                  gradient={false}
                  className="font-product-sans-black text-white text-lg md:text-xl lg:text-2xl flex items-center"
                >
                  {Array(8).fill(0).map((_, index) => (
                    <span
                      key={index}
                      className="flex items-center justify-center"
                    >
                      <span className="leading-none flex items-center">G.S #2025</span>
                      <img
                        src={frameIconSvg}
                        alt="Frame Icon"
                        className="lg:h-6 lg:w-6 xl:h-8 xl:w-8 2xl:h-16 2xl:w-16 transform rotate-[23deg] ml-2 flex-shrink-0"
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
