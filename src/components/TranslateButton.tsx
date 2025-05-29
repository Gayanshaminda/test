import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import parkdownSvg from "../assets/parkdown.svg";

interface Language {
  name: string;
  code: string;
  targetPage: number;
}

interface TranslateButtonProps {
  text?: string;
  onClick?: () => void;
}

const TranslateButton: React.FC<TranslateButtonProps> = ({ text, onClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Get current page number
  const getCurrentPage = (): number => {
    const match = location.pathname.match(/\/page(\d+)/);
    return match ? parseInt(match[1], 10) : 1;
  };

  // Get current language and available translations based on page
  const getLanguageOptions = () => {
    const currentPage = getCurrentPage();
    let currentLang: Language;
    let availableLanguages: Language[];

    // Determine current language and available options
    if (currentPage >= 1 && currentPage <= 3) {
      // Russian pages
      currentLang = { name: "Russian", code: "ru", targetPage: currentPage };
      availableLanguages = [
        { name: "English", code: "en", targetPage: 4 },
        { name: "Hindi", code: "hi", targetPage: 6 },
      ];
    } else if (currentPage >= 4 && currentPage <= 5) {
      // English pages
      currentLang = { name: "English", code: "en", targetPage: currentPage };
      availableLanguages = [
        { name: "Russian", code: "ru", targetPage: 1 },
        { name: "Hindi", code: "hi", targetPage: 6 },
      ];
    } else if (currentPage >= 6 && currentPage <= 7) {
      // Hindi pages
      currentLang = { name: "Hindi", code: "hi", targetPage: currentPage };
      availableLanguages = [
        { name: "Russian", code: "ru", targetPage: 1 },
        { name: "English", code: "en", targetPage: 4 },
      ];
    } else {
      // Pages 8-10 (Country pages) - treat as English
      currentLang = { name: "English", code: "en", targetPage: currentPage };
      availableLanguages = [
        { name: "Russian", code: "ru", targetPage: 1 },
        { name: "Hindi", code: "hi", targetPage: 6 },
      ];
    }

    return { currentLang, availableLanguages };
  };

  const { currentLang, availableLanguages } = getLanguageOptions();
  const displayText = text || `Translate to ${currentLang.name}`;

  // Handle dropdown toggle
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (onClick) onClick();
  }; // Handle language selection
  const handleLanguageSelect = () => {
    setIsDropdownOpen(false);
    // Don't navigate to different pages - just close the dropdown
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={dropdownRef} className="relative">
      {/* Expandable Button Container */}
      <div
        className={`flex min-w-[100px] flex-col border-2 border-pink-500 bg-gradient-to-r from-pink-800/60 via-pink-950/50 to-pink-800/60 shadow-md transition-all duration-300 sm:min-w-[120px] md:min-w-[140px] lg:min-w-[160px] ${isHovered || isDropdownOpen ? "shadow-lg" : ""} ${
          isDropdownOpen ? "rounded-2xl" : "rounded-full"
        }`}
      >
        {/* Main Button */}{" "}
        <button
          className={`flex w-full items-center justify-center gap-1 px-2 py-1 transition-all duration-300 sm:gap-[4px] sm:px-3 sm:py-1.5 md:px-4 md:py-[6px] lg:px-5 ${isDropdownOpen ? "rounded-t-2xl" : "rounded-full"} hover:bg-pink-700/30`}
          onClick={handleDropdownToggle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="font-montserrat text-center text-[10px] leading-none font-bold whitespace-nowrap text-white capitalize sm:text-xs">
            {displayText}
          </span>
          {!isDropdownOpen && (
            <img
              src={parkdownSvg}
              alt="dropdown"
              className="h-1.5 w-1.5 transition-opacity duration-300 sm:h-2 sm:w-2 md:h-[8px] md:w-[10px]"
            />
          )}
        </button>
        {/* Expanded Language Options */}
        {isDropdownOpen && (
          <div className="flex w-full flex-col">
            {availableLanguages.map((language, index) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect()}
                className={`font-montserrat flex w-full items-center justify-center gap-1 px-2 py-1 text-[10px] font-bold text-white transition-all duration-200 hover:bg-pink-700/50 sm:gap-[4px] sm:px-3 sm:py-1.5 sm:text-xs md:px-4 md:py-[6px] lg:px-5 ${
                  index === availableLanguages.length - 1
                    ? "rounded-b-2xl"
                    : "border-b border-pink-600/50"
                }`}
              >
                <span>Translate to {language.name}</span>
                {index === availableLanguages.length - 1 && (
                  <img
                    src={parkdownSvg}
                    alt="collapse"
                    className="h-1.5 w-1.5 rotate-180 transition-opacity duration-300 sm:h-2 sm:w-2 md:h-[8px] md:w-[10px]"
                  />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TranslateButton;
