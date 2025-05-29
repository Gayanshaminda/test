import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface AutoPageTransitionProps {
  enabled?: boolean;
  transitionDelay?: number;
}

const AutoPageTransition: React.FC<AutoPageTransitionProps> = ({
  enabled = true,
  transitionDelay = 5000,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const getCurrentPage = (): number => {
    const match = location.pathname.match(/\/page(\d+)/);
    return match ? parseInt(match[1], 10) : 1;
  };

  const getPageSection = (pageNum: number): number => {
    if (pageNum >= 1 && pageNum <= 3) return 1;
    if (pageNum >= 4 && pageNum <= 5) return 2;
    if (pageNum >= 6 && pageNum <= 7) return 3;
    if (pageNum >= 8 && pageNum <= 10) return 4;
    return 1;
  };

  const getPagesInSection = (section: number): number[] => {
    switch (section) {
      case 1:
        return [1, 2, 3];
      case 2:
        return [4, 5];
      case 3:
        return [6, 7];
      case 4:
        return [8, 9, 10];
      default:
        return [1];
    }
  };
  // Function to get the next page in the current section
  const getNextPageInSection = (currentPage: number): number | null => {
    const currentSection = getPageSection(currentPage);
    const pagesInSection = getPagesInSection(currentSection);
    const currentIndex = pagesInSection.indexOf(currentPage);

    if (currentIndex === -1) {
      return pagesInSection[0];
    }

    // If current page is the last in section, loop back to first page
    if (currentIndex === pagesInSection.length - 1) {
      return pagesInSection[0];
    }

    // Return next page in section
    return pagesInSection[currentIndex + 1];
  };

  // Clear existing timer
  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  // Start auto-transition timer
  const startTimer = () => {
    if (!enabled) return;

    clearTimer();

    timerRef.current = setTimeout(() => {
      const currentPage = getCurrentPage();
      const nextPage = getNextPageInSection(currentPage);

      if (nextPage) {
        navigate(`/page${nextPage}`);
      }
    }, transitionDelay);
  };

  useEffect(() => {
    const currentPage = getCurrentPage();
    const nextPage = getNextPageInSection(currentPage);

    if (enabled && nextPage) {
      startTimer();
    } else {
      clearTimer();
    }

    return () => {
      clearTimer();
    };
  }, [location.pathname, enabled, transitionDelay]);

  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, []);

  return null;
};

export default AutoPageTransition;
