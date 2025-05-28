import React, { useEffect, useState } from 'react';
import NavigationDots from './NavigationDots';

const AppNavigation: React.FC = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);  return (
    <div 
      className="fixed bottom-5 left-4 
                 lg:left-[36%] lg:transform lg:-translate-x-1/2 
                 xl:left-[32%] xl:transform xl:-translate-x-1/2 
                 2xl:left-[30%] 2xl:transform 2xl:-translate-x-1/2 
                 z-[9999] bg-transparent pointer-events-auto"
    >
      <NavigationDots orientation={isLargeScreen ? 'horizontal' : 'vertical'} />
    </div>
  );
};

export default AppNavigation;
