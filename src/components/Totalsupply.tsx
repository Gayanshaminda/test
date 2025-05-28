import React, { useState, useEffect } from 'react';
import parkdownIcon from '../assets/parkdown.svg';

interface TotalsupplyProps {
  onClick?: () => void;
  description?: string;
}

const Totalsupply: React.FC<TotalsupplyProps> = ({ onClick, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    
    checkScreenSize(); 
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isLargeScreen) {
      setIsExpanded(!isExpanded);
      if (onClick) onClick();
    }
  };
  
  return (
    <div className="flex w-full">
      {(!isLargeScreen && !isExpanded) ? (
        <button 
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}            
          className={`
            w-full max-w-xs sm:max-w-md md:max-w-lg
            h-12
            rounded-[36px] 
            border border-pink-500 
            px-5 py-3 
            flex items-center justify-between 
            text-white 
            bg-gradient-to-r from-pink-800 via-pink-950 to-pink-800
            transition-all duration-300 ease-in-out
            ${isHovered ? 'shadow-card' : ''}
          `}
        >
          <span className="text-base sm:text-lg font-[900] font-['Product_Sans_Black']">Total Supply</span>
          <img 
            src={parkdownIcon} 
            alt="Expand" 
            className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} 
          />
        </button>
      ) : (
        <div 
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`flex flex-col
            w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-[420px] xl:max-w-[430px] 2xl:max-w-[450px]
            min-h-[150px] sm:min-h-[180px] lg:min-h-[200px] xl:min-h-[210px] 2xl:min-h-[220px]
            py-9 px-9 sm:py-6 sm:px-4 md:py-7 md:px-5 lg:py-8 lg:px-4 xl:py-9 xl:px-5 2xl:py-9 2xl:px-8
            rounded-[36px] 
            border border-pink-500 
            bg-gradient-to-r from-pink-800 via-pink-950 to-pink-800 
            text-white 
            transition-all duration-300 ease-in-out 
            ${!isLargeScreen ? 'cursor-pointer' : ''} 
            ${isHovered ? 'shadow-card' : ''}
          `}
        >
          <div className={`flex items-center ${isLargeScreen ? 'justify-center' : 'justify-between'} mb-3 sm:mb-3 md:mb-4 lg:mb-3 xl:mb-3`}>
            <h3 className={`
              text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-[28px] 2xl:text-[30px] 
              font-['Product_Sans_Black'] font-[900] 
              ${isLargeScreen ? 'text-center' : ''}            `}>
              <span className="text-accent-pink">1 : </span>Total Supply
            </h3>
            {!isLargeScreen && (
              <img 
                src={parkdownIcon} 
                alt="Collapse" 
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${isHovered ? 'scale-110' : ''} rotate-180`} 
              />
            )}
          </div>          <div className="flex-grow flex items-center justify-center">
            <p className={`
              text-xs sm:text-sm md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[15px] 
              font-['Montserrat'] leading-tight 
              ${isLargeScreen ? 'text-center px-1 lg:px-2 xl:px-3 2xl:px-2' : ''}
            `}>
              {description || "The American pool is allocated a fixed portion of the total token supply, reserved for U.S.-based events, challenges, and rewards."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Totalsupply;