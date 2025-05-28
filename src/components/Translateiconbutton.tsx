import React, { useState } from 'react';
import translateIcon from '../assets/translate.svg';
import translateDownIcon from '../assets/translate-down.svg';

interface TranslateIconButtonProps {
  onClick?: () => void;
  className?: string;
  isActive?: boolean;
}

const TranslateIconButton: React.FC<TranslateIconButtonProps> = ({
  onClick,
  className = '',
}) => {
  const [hover, setHover] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
    return (    
   
   <div className="fixed bottom-3 sm:bottom-4 md:bottom-4 right-4 sm:right-5 md:right-6 lg:hidden xl:hidden z-[100] max-w-[56px] transition-all duration-300 pointer-events-auto">
      <button
        className={`translate-icon-button relative w-[36px] h-[62px] sm:w-[40px] sm:h-[68px] md:w-[42px] md:h-[70px]
            rounded-3xl p-[7px] sm:p-[8px] flex flex-col items-center 
            justify-between cursor-pointer gap-1 bg-gradient-to-r
            from-[#932A51] via-[rgba(81,19,42,0.83)] to-[#932A51] border-[2px] border-[#E84481] shadow-lg 
            hover:shadow-xl transition-all duration-300 ${isPressed ? 'scale-95' : ''} 
            ${hover ? 'brightness-110' : ''} ${className}`}
        onClick={() => {
          setIsPressed(true);
          setTimeout(() => setIsPressed(false), 200);
          if (onClick) onClick();
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>        <img 
          src={translateIcon} 
          alt="Translate" 
          className={`w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 mt-0.5 ${hover ? 'brightness-125' : ''}`} />
        <div className="flex-grow"></div>
        <img 
          src={translateDownIcon}
          alt="Down Arrow" 
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4 md:h-4 mb-0.5" />
      </button>
    </div>
  );
};

export default TranslateIconButton;