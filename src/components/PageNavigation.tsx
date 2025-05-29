import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import leftIcon from "../assets/left.svg";
import rightIcon from "../assets/right.svg";

interface PageNavigationProps {
  className?: string;
}

const PageNavigation: React.FC<PageNavigationProps> = ({ className = "" }) => {
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
    <div className={`pointer-events-none fixed z-50 w-full ${className}`}>
      {/* Mobile and tablet layout (centered at bottom) */}
      <div className="fixed bottom-[calc(6rem+16px)] w-full min-[320px]:bottom-[calc(6.2rem+16px)] min-[360px]:bottom-[calc(5.9rem+16px)] min-[400px]:bottom-[calc(5.6rem+16px)] min-[440px]:bottom-[calc(5.3rem+16px)] min-[480px]:bottom-[calc(5rem+16px)] min-[520px]:bottom-[calc(4.7rem+16px)] min-[560px]:bottom-[calc(4.5rem+16px)] sm:bottom-[calc(4.2rem+16px)] md:bottom-[calc(4.5rem+16px)] lg:hidden">
        <div className="mx-auto ml-0 flex w-full max-w-screen-xl items-center justify-center gap-16 px-4 min-[360px]:ml-1 min-[400px]:ml-1 sm:ml-3 sm:gap-20 sm:px-6 md:ml-4 md:gap-24 md:px-8">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`font-montserrat pointer-events-auto flex w-32 items-center justify-center gap-2 rounded-full border-[2px] border-pink-500 bg-gradient-to-r from-pink-800 via-pink-950 to-pink-800 px-4 py-2 text-base font-bold text-white shadow-md transition-all hover:scale-105 hover:bg-pink-800 disabled:opacity-50 disabled:hover:scale-100 sm:w-auto sm:gap-3 sm:border-[3px] sm:px-6 sm:py-3 sm:text-lg md:gap-4 md:px-8 md:py-4 md:text-xl`}
          >
            <img src={rightIcon} alt="right" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            <span>Previous</span>
          </button>

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`font-montserrat pointer-events-auto flex w-32 items-center justify-center gap-2 rounded-full border-[2px] border-pink-500 bg-gradient-to-r from-pink-800 via-pink-950 to-pink-800 px-5 py-2 text-base font-bold text-white shadow-md transition-all hover:scale-105 hover:bg-pink-800 disabled:opacity-50 disabled:hover:scale-100 sm:w-auto sm:gap-3 sm:border-[3px] sm:px-8 sm:py-3 sm:text-lg md:gap-4 md:px-10 md:py-4 md:text-xl`}
          >
            <span>Next</span>
            <img
              src={leftIcon}
              alt="left"
              className="h-4.5 w-4.5 sm:h-5.5 sm:w-5.5 md:h-6.5 md:w-6.5"
            />
          </button>
        </div>
      </div>

      {/* Desktop layout  */}

      <div className="fixed inset-0 hidden lg:block">
        <div className="mx-auto flex h-full w-full max-w-[1600px] items-center justify-between px-16">
          <div className="relative top-[30%] left-[36%] 2xl:left-[36%]">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`font-montserrat pointer-events-auto flex items-center justify-center gap-3 rounded-full border-[2px] border-pink-500 bg-gradient-to-r from-pink-800 via-pink-950 to-pink-800 px-6 py-2 text-xl font-bold text-white shadow-md transition-all hover:scale-105 hover:bg-pink-800 disabled:opacity-50 disabled:hover:scale-100`}
            >
              <img src={rightIcon} alt="right" className="h-5 w-5" />
              <span>Previous</span>
            </button>
          </div>

          <div className="relative top-[38%] -left-[14%]">
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`font-montserrat pointer-events-auto flex items-center justify-center gap-3 rounded-full border-[2px] border-pink-500 bg-gradient-to-r from-pink-800 via-pink-950 to-pink-800 px-6 py-2 text-xl font-bold text-white shadow-md transition-all hover:scale-105 hover:bg-pink-800 disabled:opacity-50 disabled:hover:scale-100`}
            >
              <span>Next</span>
              <img src={leftIcon} alt="left" className="h-5.5 w-5.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNavigation;
