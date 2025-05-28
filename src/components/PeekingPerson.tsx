import React from 'react';

type DeviceSize = 'mobile' | 'desktop' | 'both';

interface PeekingPersonProps {
  imageSrc: string;
  altText?: string;
  className?: string;
  visible?: boolean;
  deviceSize?: DeviceSize;
  hideOnMobile?: boolean;
  // For custom positioning if needed
  top?: string;
  right?: string;
}

const PeekingPerson: React.FC<PeekingPersonProps> = ({
  imageSrc,  altText = 'Peeking Person',
  className = '',
  visible = true,
  deviceSize = 'both', 
  hideOnMobile = false,   
  
  top = 'top-[25%] sm:top-[25%] md:top-[25%] lg:top-[21%] xl:top-[23%] 2xl:top-[19%]',
  right = 'right-[5.7%] sm:right-[7.4%] md:right-[7.8%] lg:right-[4.4%] xl:right-[7.7%] 2xl:right-[9.1%]'

}) => {  if (!visible) return null;    
  const standardWidth = 'w-[160px] sm:w-[85px] md:w-[95px] lg:w-[90px] xl:w-[90px] 2xl:w-[110px]';
  const standardHeight = 'h-[230px] sm:h-[240px] md:h-[260px] lg:h-[260px] xl:h-[270px] 2xl:h-[310px]';
  
  
  let visibilityClasses = '';
  if (deviceSize === 'mobile') {
    visibilityClasses = 'block lg:hidden';
  } else if (deviceSize === 'desktop') {
    visibilityClasses = 'hidden lg:block';
  } else { 
    visibilityClasses = hideOnMobile ? 'hidden sm:block' : '';
  }
  
  
  const positionClasses = `fixed ${top} ${right} z-20`;
    return (
    <div 
      className={`peeking-person ${standardWidth} ${standardHeight} ${positionClasses} ${visibilityClasses} ${className}`}
    >      <img
        src={imageSrc}
        alt={altText}
        className={`w-full h-full object-contain object-right relative transition-all duration-300 origin-right-center transform`}
      />
    </div>
  );
};

export default PeekingPerson;
