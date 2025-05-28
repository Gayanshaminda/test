import React from 'react';

interface BottomRightTextProps {
  text: string;
  className?: string;
  centerOnMobile?: boolean;
}

const BottomRightText: React.FC<BottomRightTextProps> = ({ 
  text, 
  className = '',
  centerOnMobile = true
}) => {
  
  const textSizes = 'text-[14px] sm:text-[16px] md:text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]';
  
  const marginBottoms = 'mb-6 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4';
  
  return (    
  <div      className={`
        fixed text-white font-montserrat font-medium z-20 leading-[120%] tracking-[0%] bottom-0
        ${textSizes}
        ${marginBottoms}        ${centerOnMobile ? 
          // On mobile: centered at bottom
          'text-center w-[254px] h-[30px] flex items-center justify-center left-1/2 transform -translate-x-1/2 -ml-4' + 
          // sm and md: centered horizontally
          ' sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:ml-0 sm:whitespace-nowrap sm:w-auto sm:h-auto' +
          // lg and above: right aligned 
          ' lg:left-auto lg:transform-none lg:translate-x-0 lg:right-6'
          : 
          // Always bottom right
          'right-6 sm:whitespace-nowrap'
        }
        ${className}
      `}
    >
      {text}
    </div>
  );
};

export default BottomRightText;
