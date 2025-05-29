import React, { useState } from "react";
import menuIcon from "../assets/menu.svg";
import crossIcon from "../assets/cross.svg";
import sideArrowIcon from "../assets/side-arrow.svg";

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
    className="flex w-full cursor-pointer items-center justify-between rounded-lg px-2.5 py-1.5 hover:bg-[rgba(147,42,81,0.8)]"
    onClick={onClick}
  >
    <div className="flex items-center gap-2">
      {" "}
      {icon && <img src={icon} alt={text} className="h-4 w-4" />}
      <span className="font-product-sans-black text-sm text-white">{text}</span>
    </div>
    {hasArrow && <img src={sideArrowIcon} alt="More" className="h-3.5 w-3.5" />}
  </div>
);

const Menu: React.FC<MenuProps> = ({ onClick, className = "" }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded((prev) => !prev);
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
            className={`xs:w-12 xs:h-12 relative z-10 hidden h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-[#932A51] via-[rgba(81,19,42,0.83)] to-[#932A51] shadow-md transition-all hover:scale-105 hover:shadow-lg active:scale-95 max-lg:flex sm:h-14 sm:w-14 md:h-16 md:w-16 ${className} `}
          >
            <img
              src={menuIcon}
              alt="Menu"
              className="xs:w-7 xs:h-7 h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
            />
          </button>

          <div className="pointer-events-none absolute top-[-2px] right-[-2px] bottom-[-2px] left-[-2px] -z-0 hidden rounded-full bg-[linear-gradient(114.17deg,#822648_27.17%,#E84481_118.36%)] max-lg:block"></div>

          <div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0 -z-0 hidden rounded-full bg-black max-lg:block"></div>
        </>
      ) : (
        <div className="fixed top-0 left-0 z-50 h-full w-full" onClick={closeMenu}>
          {" "}
          <div
            className="absolute top-4 right-4 flex w-[310px] flex-col gap-2 rounded-[24px] p-2"
            onClick={(e) => e.stopPropagation()}
            style={{
              background:
                "linear-gradient(81.54deg, rgba(147, 42, 81, 0.85) 3.48%, rgba(81, 19, 42, 0.7) 34.41%, rgba(81, 19, 42, 0.7) 66.74%, rgba(147, 42, 81, 0.85) 100.94%)",
            }}
          >
            {" "}
            <div className="absolute inset-[-1px] -z-10 rounded-[24px] bg-gradient-to-r from-[rgba(130,38,72,0.9)] to-[rgba(232,68,129,0.9)]"></div>
            <div className="mb-1 flex items-center justify-between px-2.5">
              <h2 className="font-product-sans-black text-lg font-bold text-white">
                GlobalSurvivour
              </h2>

              <div className="relative">
                <button
                  onClick={closeMenu}
                  className="relative flex h-[40px] w-[42px] items-center justify-center rounded-[24px] bg-gradient-to-r from-[rgba(147,42,81,0.85)] via-[rgba(81,19,42,0.7)] to-[rgba(147,42,81,0.85)] p-3"
                >
                  <img src={crossIcon} alt="Close" className="h-4 w-4" />
                </button>{" "}
                <div className="absolute inset-[-2px] -z-10 rounded-[24px] bg-gradient-to-r from-[rgba(130,38,72,0.9)] to-[rgba(232,68,129,0.9)] p-0.5"></div>
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
