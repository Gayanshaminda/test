import React, { useState } from 'react';
import menuIcon from '../assets/menu.svg';
import crossIcon from '../assets/cross.svg';
import sideArrowIcon from '../assets/side-arrow.svg';

interface MenuProps {
  onClick?: () => void;
  className?: string;
}

interface MenuItemProps {
  icon?: string;
  text: string;
  onClick?: () => void;
  hasArrow?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, text, onClick, hasArrow = true }) => (
  <div 
    className="flex items-center justify-between w-full px-2.5 py-1.5 hover:bg-[rgba(147,42,81,0.8)] rounded-lg cursor-pointer"
    onClick={onClick}
  >
    <div className="flex items-center gap-2">      {icon && <img src={icon} alt={text} className="w-4 h-4" />}
      <span className="text-white text-sm font-product-sans-black">{text}</span>
    </div>
    {hasArrow && <img src={sideArrowIcon} alt="More" className="w-3.5 h-3.5" />}
  </div>
);

const Menu: React.FC<MenuProps> = ({ onClick, className = '' }) => {  
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleMenu = () => {
    setIsExpanded(prev => !prev);
    if (onClick) {
      onClick();
    }
  };

  const closeMenu = () => {
    setIsExpanded(false);
  };
  
  return (
    <div className="relative inline-block">      
    
    {!isExpanded ? (
      <>
        <button 
          onClick={toggleMenu}
          className={`
            hidden max-lg:flex items-center justify-center
            w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full
            bg-gradient-to-r from-[#932A51] via-[rgba(81,19,42,0.83)] to-[#932A51]
            shadow-md hover:shadow-lg transition-all
            z-10 relative
            active:scale-95 hover:scale-105
            ${className}
          `}
        >
          <img src={menuIcon} alt="Menu" className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
        </button>
        
        <div
          className="hidden max-lg:block absolute top-[-2px] left-[-2px] right-[-2px] bottom-[-2px]
          rounded-full bg-[linear-gradient(114.17deg,#822648_27.17%,#E84481_118.36%)] -z-0 pointer-events-none"
        ></div>
        
        <div
          className="hidden max-lg:block absolute top-0 left-0 right-0 bottom-0 rounded-full bg-black -z-0 pointer-events-none"
        ></div>
      </>    ) : (      <div 
        className="fixed top-0 left-0 w-full h-full z-50"
        onClick={closeMenu}      >        <div 
          className="w-[310px] absolute top-4 right-4 rounded-[24px] p-2 gap-2 flex flex-col"          onClick={(e) => e.stopPropagation()}
          style={{
            background: 'linear-gradient(81.54deg, rgba(147, 42, 81, 0.85) 3.48%, rgba(81, 19, 42, 0.7) 34.41%, rgba(81, 19, 42, 0.7) 66.74%, rgba(147, 42, 81, 0.85) 100.94%)'
          }}
        >           <div 
            className="absolute inset-[-1px] rounded-[24px] -z-10 bg-gradient-to-r from-[rgba(130,38,72,0.9)] to-[rgba(232,68,129,0.9)]"
          ></div>
            <div className="flex items-center justify-between mb-1 px-2.5">
            <h2 className="text-white text-lg font-bold font-product-sans-black">GlobalSurvivour</h2>            
            
            <div className="relative">
              <button                onClick={closeMenu}
                className="w-[42px] h-[40px] flex items-center justify-center rounded-[24px] p-3 bg-gradient-to-r from-[rgba(147,42,81,0.85)] via-[rgba(81,19,42,0.7)] to-[rgba(147,42,81,0.85)] relative"
              >
                <img src={crossIcon} alt="Close" className="w-4 h-4" />
              </button>              <div 
                className="absolute inset-[-2px] rounded-[24px] -z-10 bg-gradient-to-r from-[rgba(130,38,72,0.9)] to-[rgba(232,68,129,0.9)] p-0.5"
              ></div>
            </div>
          </div>
          <div className="space-y-1">
            <MenuItem text="DEXTools" hasArrow={true} />
            <MenuItem text="Telegram" hasArrow={true} />
            <MenuItem text="Twitter" hasArrow={true} />
          </div>
        </div>
      </div>
    )}
    </div>
  );
};

export default Menu;