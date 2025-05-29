import React from "react";
import { NavLink, useLocation } from "react-router-dom";

interface NavigationDotsProps {
  className?: string;
  variant?: "dots" | "numbers";
  totalPages?: number;
  orientation?: "horizontal" | "vertical";
}

const NavigationDots: React.FC<NavigationDotsProps> = ({
  className = "",
  variant = "dots",
  totalPages = 4,
  orientation = "horizontal",
}) => {
  const location = useLocation();
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Function to get current page number from URL
  const getCurrentPage = (): number => {
    const match = location.pathname.match(/\/page(\d+)/);
    return match ? parseInt(match[1], 10) : 1;
  };

  const getPageSection = (pageNum: number): number => {
    if (pageNum >= 1 && pageNum <= 3) return 1; // Part 1: pages 1,2,3
    if (pageNum >= 4 && pageNum <= 5) return 2; // Part 2: pages 4,5
    if (pageNum >= 6 && pageNum <= 7) return 3; // Part 3: pages 6,7
    if (pageNum >= 8 && pageNum <= 10) return 4; // Part 4: pages 8,9,10
    return 1; // Default to section 1
  };

  // Function to determine the correct page URL
  const getPageUrl = (pageNum: number) => {
    if (pageNum === 2) {
      return "/page4";
    }
    if (pageNum === 3) {
      return "/page6";
    }
    if (pageNum === 4) {
      return "/page8";
    }
    return `/page${pageNum}`;
  };

  // Check if a dot should be active based on current page section
  const isDotActive = (dotNumber: number): boolean => {
    const currentPage = getCurrentPage();
    const currentSection = getPageSection(currentPage);
    return dotNumber === currentSection;
  };

  return (
    <div
      className={`flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 lg:flex-row ${orientation === "vertical" ? "flex-col" : "flex-row"} ${className}`}
    >
      {" "}
      {pages.map((page) => (
        <NavLink
          key={page}
          to={getPageUrl(page)}
          className={() => {
            const isActive = isDotActive(page);
            return variant === "dots"
              ? `transition-duration-300 block cursor-pointer rounded-full ${orientation === "vertical" && !isActive ? "h-[8px] w-[8px] sm:h-[10px] sm:w-[10px] md:h-[12px] md:w-[12px]" : ""} ${orientation === "vertical" && isActive ? "h-[25px] w-[8px] sm:h-[30px] sm:w-[10px] md:h-[40px] md:w-[12px]" : ""} ${orientation === "horizontal" && !isActive ? "h-[8px] w-[8px] sm:h-[10px] sm:w-[10px] md:h-[12px] md:w-[12px]" : ""} ${orientation === "horizontal" && isActive ? "h-[8px] w-[25px] sm:h-[10px] sm:w-[30px] md:h-[12px] md:w-[40px]" : ""} ${
                  isActive
                    ? "bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                    : "bg-pink-500/70 hover:bg-pink-400"
                }`
              : `flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`;
          }}
          style={{
            zIndex: 9999,
            position: "relative",
            minHeight: variant === "dots" ? "8px" : "32px",
            minWidth: variant === "dots" ? "8px" : "32px",
          }}
          aria-label={`Go to page ${page === 2 ? 4 : page === 3 ? 6 : page === 4 ? 8 : page}`}
        >
          {variant === "numbers" && (page === 2 ? 4 : page === 3 ? 6 : page === 4 ? 8 : page)}
          {variant === "dots" && (
            <span className="sr-only">
              Page {page === 2 ? 4 : page === 3 ? 6 : page === 4 ? 8 : page}
            </span>
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default NavigationDots;
