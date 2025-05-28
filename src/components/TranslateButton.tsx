import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import parkdownSvg from '../assets/parkdown.svg';

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);  const [isHovered, setIsHovered] = useState(false);
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
      currentLang = { name: 'Russian', code: 'ru', targetPage: currentPage };
      availableLanguages = [
        { name: 'English', code: 'en', targetPage: 4 },
        { name: 'Hindi', code: 'hi', targetPage: 6 }
      ];
    } else if (currentPage >= 4 && currentPage <= 5) {
      // English pages
      currentLang = { name: 'English', code: 'en', targetPage: currentPage };
      availableLanguages = [
        { name: 'Russian', code: 'ru', targetPage: 1 },
        { name: 'Hindi', code: 'hi', targetPage: 6 }
      ];
    } else if (currentPage >= 6 && currentPage <= 7) {
      // Hindi pages
      currentLang = { name: 'Hindi', code: 'hi', targetPage: currentPage };
      availableLanguages = [
        { name: 'Russian', code: 'ru', targetPage: 1 },
        { name: 'English', code: 'en', targetPage: 4 }
      ];
    } else {
      // Pages 8-10 (Country pages) - treat as English
      currentLang = { name: 'English', code: 'en', targetPage: currentPage };
      availableLanguages = [
        { name: 'Russian', code: 'ru', targetPage: 1 },
        { name: 'Hindi', code: 'hi', targetPage: 6 }
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
  };  // Handle language selection
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

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div ref={dropdownRef} className="relative">
      {/* Expandable Button Container */}
      <div 
        className={`flex flex-col min-w-[100px] sm:min-w-[120px] md:min-w-[140px] lg:min-w-[160px]
        border-2 border-pink-500 bg-gradient-to-r from-pink-800/60 via-pink-950/50 to-pink-800/60 
        shadow-md transition-all duration-300 ${isHovered || isDropdownOpen ? 'shadow-lg' : ''} ${
          isDropdownOpen ? 'rounded-2xl' : 'rounded-full'
        }`}
      >
        {/* Main Button */}        <button
          className={`flex items-center justify-center w-full
          py-1 sm:py-1.5 md:py-[6px] px-2 sm:px-3 md:px-4 lg:px-5 gap-1 sm:gap-[4px]
          transition-all duration-300 ${isDropdownOpen ? 'rounded-t-2xl' : 'rounded-full'}
          hover:bg-pink-700/30`}
          onClick={handleDropdownToggle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="font-montserrat font-bold text-[10px] sm:text-xs leading-none text-center capitalize text-white whitespace-nowrap">
            {displayText}
          </span>
          {!isDropdownOpen && (
            <img 
              src={parkdownSvg} 
              alt="dropdown" 
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-[10px] md:h-[8px] transition-opacity duration-300" 
            />
          )}
        </button>       
        
         {/* Expanded Language Options */}
        {isDropdownOpen && (
          <div className="flex flex-col w-full">
            {availableLanguages.map((language, index) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect()}
                className={`w-full px-2 sm:px-3 md:px-4 lg:px-5 py-1 sm:py-1.5 md:py-[6px] 
                text-white font-montserrat font-bold text-[10px] sm:text-xs 
                hover:bg-pink-700/50 transition-all duration-200 flex items-center justify-center gap-1 sm:gap-[4px] ${
                  index === availableLanguages.length - 1 ? 'rounded-b-2xl' : 'border-b border-pink-600/50'
                }`}
              >
                <span>Translate to {language.name}</span>
                {index === availableLanguages.length - 1 && (
                  <img 
                    src={parkdownSvg} 
                    alt="collapse" 
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-[10px] md:h-[8px] rotate-180 transition-opacity duration-300" 
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