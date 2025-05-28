import React, { useState } from 'react';
import rightIcon from '../assets/right.svg';
import { useNavigate, useLocation } from 'react-router-dom';

interface BackButtonProps {
  className?: string;
  onClick?: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ className = '', onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    
    // Extract the current page number from the URL
    const currentPath = location.pathname;
    const pageMatch = currentPath.match(/page(\d+)/);
    
    if (pageMatch && pageMatch[1]) {
      const currentPageNumber = parseInt(pageMatch[1], 10);
      // Only navigate if the current page number is greater than 1
      if (currentPageNumber > 1) {
        const previousPageNumber = currentPageNumber - 1;
        navigate(`/page${previousPageNumber}`);
      } else {
        // If we're on page 1, navigate to the root
        navigate('/');
      }
    } else {
      // If we can't determine the page number, just go back
      navigate(-1);
    }
  };
  
  return (
    <div>
      <button 
        className={`w-[89px] h-[41px] rounded-[24px] text-white font-medium flex items-center justify-center gap-2 bg-gradient-to-r 
          from-[#932A51] via-[rgba(81,19,42,0.83)] to-[#932A51] border-2
           border-[#E84481] transition-all duration-300 ease-in-out ${isHovered ? 'shadow-[0_0_10px_rgba(232,68,129,0.5)]' : ''} ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >      
        <img 
          src={rightIcon} 
          alt="Right Arrow" 
          className="w-4 h-4"
        />
        <span className="font-product-sans-black">Back</span>
      </button>
    </div>
  );
};

export default BackButton;