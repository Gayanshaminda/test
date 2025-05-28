 import React, { ReactNode } from 'react';
import cloudDesktop from '../assets/cloud.svg';
import cloudMobile from '../assets/cloud-d.svg';

interface CloudProps {
  className?: string;
  text?: string;
  children?: ReactNode;
  top?: string;
  left?: string;
  lineHeight?: string;
  hideOnMobile?: boolean;
}

const Cloud: React.FC<CloudProps> = ({  className = '', 
  text = '', 
  children,  top = 'top-[36%] sm:top-[37%] md:top-[38%] lg:top-[12%] xl:top-[14%] 2xl:top-[10%]', 
  left = 'left-[70%] sm:left-[75%] md:left-[75%] lg:left-[78%] xl:left-[78%] 2xl:left-[79%]',
  lineHeight = 'leading-tight',
  hideOnMobile = false
})=> {  return (    

<div    className={`${hideOnMobile ? 'hidden sm:block' : ''} absolute 
      w-[144px] h-[80px] sm:w-[180px] sm:h-[100px] md:w-[220px] md:h-[120px] lg:w-[240px] lg:h-[120px] xl:w-[280px] xl:h-[120px] 2xl:w-[330px] 2xl:h-[117px]
      ${top} ${left} ${className} z-10 transform -translate-x-1/2`}
    >     
      {/* Mobile cloud image */}
      <img
        src={cloudMobile}
        alt="cloud"
        className="block lg:hidden w-full h-full object-contain"
      />
        {/* Desktop cloud image  */}      
        <img
        src={cloudDesktop}
        alt="cloud"
        className="hidden lg:block w-full h-full object-contain xl:object-contain 2xl:object-contain"      />        
         {(text || children) && (        
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className={`w-[90px] sm:w-[120px] md:w-[140px] lg:w-[160px] xl:w-[180px] 2xl:w-[180px] mx-auto mt-5 sm:mt-3 md:mt-3 lg:-mt-3 
            text-[10px] sm:text-[12px] md:text-[14px] lg:text-[17px] xl:text-[18px] 2xl:text-[19px] font-product-sans-black ${lineHeight} text-[#E84481] font-bold break-words -rotate-[14.37deg] overflow-hidden`}>
            {children || text} 
          </div>
        </div>
      )}
    </div>
  );
};

export default Cloud;
