import React from 'react';
import group56Svg from '../assets/Group 56.svg';

interface GroupImageProps {
  className?: string;
}

const GroupImage: React.FC<GroupImageProps> = ({ className = '' }) => {  return (
    <div className={`hidden lg:flex items-end justify-start 
        w-full h-full 
        absolute bottom-0 left-0 z-[100]
        ${className}`}>
        
         <div className="
        relative
        lg:w-[200px] xl:w-[230px] 2xl:w-[250px]
        lg:h-[100px] xl:h-[130px] 2xl:h-[140px]
        lg:mb-[80px] xl:mb-[50px] 2xl:mb-[60px]
        lg:ml-[80px] xl:ml-[100px] 2xl:ml-[130px]
        -rotate-[2.37deg]
        drop-shadow-2xl
      ">       <img
          src={group56Svg}
          alt="Group 56"
          className="w-full h-full object-contain "
        />
      </div>
    </div>
  );
};

export default GroupImage;