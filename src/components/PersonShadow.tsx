import React from 'react';

interface PersonShadowProps {
  shadowSrc: string;
  altText?: string;
  className?: string;
  width?: string;
  height?: string;
  left?: string;
  bottom?: string;
  visible?: boolean;
}

const PersonShadow: React.FC<PersonShadowProps> = ({
  shadowSrc,
  altText = 'Person Shadow',
  className = '',
  width = 'w-[400px] sm:w-[420px] md:w-[450px] lg:w-[400px] xl:w-[470px] 2xl:w-[480px]',
  height = 'h-[400px] sm:h-[420px] md:h-[450px] lg:h-[400px] xl:h-[470px] 2xl:h-[480px]',
  left = 'left-[100px] xs:left-[-50px] sm:left-[calc(50%-100px)] md:left-[calc(50%+0px)] lg:left-[calc(50%+90px)] xl:left-[calc(50%+120px)] 2xl:left-[calc(50%+138px)]',
  bottom = 'bottom-0',
  visible = true
}) => {
  if (!visible) return null;

  return (
    <div 
      className={`fixed ${bottom} ${left} ${width} ${height} transform -translate-x-1/4 sm:-translate-x-1/2 z-20 lg:mb-1 xl:-mb-3 2xl:-mb-4 pointer-events-none ${className}`}
    >
      <img
        src={shadowSrc}
        alt={altText}
        className="w-full h-full object-contain object-bottom max-w-full pointer-events-none"
      />
    </div>
  );
};

export default PersonShadow;
