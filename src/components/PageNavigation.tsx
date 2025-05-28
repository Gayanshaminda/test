import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import leftIcon from '../assets/left.svg';
import rightIcon from '../assets/right.svg';

interface PageNavigationProps {
  className?: string;
}

const PageNavigation: React.FC<PageNavigationProps> = ({ className = '' }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  
  const getCurrentPage = (): number => {
    const match = location.pathname.match(/\/page(\d+)/);
    return match ? parseInt(match[1], 10) : 1;
  };  
  
  const currentPage = getCurrentPage();
  const totalPages = 10;

  const goToPage = (pageNum: number) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      navigate(`/page${pageNum}`);
    }  
  };    
  
  return (    
    <div className={`fixed w-full z-50 pointer-events-none ${className}`}>
      {/* Mobile and tablet layout (centered at bottom) */}        
      <div className="lg:hidden fixed bottom-[calc(6rem+16px)] min-[320px]:bottom-[calc(6.2rem+16px)] min-[360px]:bottom-[calc(5.9rem+16px)] min-[400px]:bottom-[calc(5.6rem+16px)] min-[440px]:bottom-[calc(5.3rem+16px)] min-[480px]:bottom-[calc(5rem+16px)] min-[520px]:bottom-[calc(4.7rem+16px)] min-[560px]:bottom-[calc(4.5rem+16px)] sm:bottom-[calc(4.2rem+16px)] md:bottom-[calc(4.5rem+16px)] w-full">
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 flex justify-center gap-16 sm:gap-20 md:gap-24 items-center ml-0 min-[360px]:ml-1 min-[400px]:ml-1 sm:ml-3 md:ml-4">          
          <button          
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`pointer-events-auto flex items-center justify-center gap-2 sm:gap-3 md:gap-4 
              w-32 sm:w-auto px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full
              bg-gradient-to-r from-pink-800 via-pink-950 to-pink-800
              border-[2px] sm:border-[3px] border-pink-500 shadow-md
              text-white font-montserrat font-bold text-base sm:text-lg md:text-xl
              transition-all hover:bg-pink-800 hover:scale-105
              disabled:opacity-50 disabled:hover:scale-100`}
          >
            <img src={rightIcon} alt="right" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            <span>Previous</span>
          </button>          
          
          <button          
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`pointer-events-auto flex items-center justify-center gap-2 sm:gap-3 md:gap-4 
              w-32 sm:w-auto px-5 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded-full
              bg-gradient-to-r from-pink-800 via-pink-950 to-pink-800
              border-[2px] sm:border-[3px] border-pink-500 shadow-md
              text-white font-montserrat font-bold text-base sm:text-lg md:text-xl
              transition-all hover:bg-pink-800 hover:scale-105
              disabled:opacity-50 disabled:hover:scale-100`}
          >
            <span>Next</span>
            <img src={leftIcon} alt="left" className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 md:w-6.5 md:h-6.5" />
          </button>
        </div>
      </div>     
      
      
       {/* Desktop layout  */}

      <div className="hidden lg:block fixed inset-0">        
        <div className="w-full h-full flex justify-between items-center px-16 max-w-[1600px] mx-auto">
              <div className="relative left-[36%] 2xl:left-[36%] top-[30%]">            
                <button          
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}              
                  className={`pointer-events-auto flex items-center justify-center gap-3 
                    px-6 py-2 rounded-full
                    bg-gradient-to-r from-pink-800 via-pink-950 to-pink-800
                    border-[2px] border-pink-500 shadow-md
                    text-white font-montserrat font-bold text-xl
                    transition-all hover:bg-pink-800 hover:scale-105
                    disabled:opacity-50 disabled:hover:scale-100`}
                >
                  <img src={rightIcon} alt="right" className="w-5 h-5" />
                  <span>Previous</span>
                </button>
              </div>
          
          
              <div className="relative -left-[14%] top-[38%]">            
                <button          
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}              
                  className={`pointer-events-auto flex items-center justify-center gap-3 
                    px-6 py-2 rounded-full
                    bg-gradient-to-r from-pink-800 via-pink-950 to-pink-800
                    border-[2px] border-pink-500 shadow-md
                    text-white font-montserrat font-bold text-xl
                    transition-all hover:bg-pink-800 hover:scale-105
                    disabled:opacity-50 disabled:hover:scale-100`}
                >
                  <span>Next</span>
                  <img src={leftIcon} alt="left" className="w-5.5 h-5.5" />
                </button>
              </div>
        </div>
      </div>
    </div>
  );
};

export default PageNavigation;


