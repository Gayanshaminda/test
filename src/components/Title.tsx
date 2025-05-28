import React from 'react';
import ResponsiveText from './ResponsiveText';

interface TitleProps {
  title: string;
  className?: string;
  titleFont?: 'rubik-mono-one' | 'product-sans' | 'product-sans-black' | 'montserrat';
  page?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
}

const Title: React.FC<TitleProps> = ({
  title,
  className = '',
  titleFont,
  page = 1
}) => {
  
  const determinedTitleFont = titleFont || (page <= 3 ? 'rubik-mono-one' : 'product-sans-black');  
  let titleMobileWidth, titleDesktopWidth;  
  
  if (page <= 3) {
    titleMobileWidth = 'w-full max-w-[300px]';
    titleDesktopWidth = 'sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%] 2xl:w-[70%] sm:max-w-[650px]';
  } else if (page <= 5) {
    titleMobileWidth = 'w-full max-w-[300px]';
    titleDesktopWidth = 'sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[60%] 2xl:w-[65%] sm:max-w-[550px]';
  } else {
    titleMobileWidth = 'w-full max-w-[250px]';
    titleDesktopWidth = 'sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[60%] 2xl:w-[70%] sm:max-w-[550px]';
  }

  return (
    <div className={`mb-6 md:mb-8 lg:mb-10 mt-[-10px] sm:mt-[-20px] md:mt-[-30px] lg:mt-[-35px] xl:mt-[-40px] ml-0 sm:ml-7 md:ml-10 lg:ml-6 xl:ml-8 ${className}`}>
      
      <ResponsiveText 
        text={title}        
        mobileWidth={titleMobileWidth}
        mobileHeight="h-auto"
        desktopWidth={titleDesktopWidth}
        desktopHeight="h-auto"
        autoWrap={true}
        className={`text-[7vw] min-text-[20px] max-text-[30px] sm:text-[40px] md:text-[42px] lg:text-[46px] xl:text-[40px] 2xl:text-[48px] font-${determinedTitleFont} 
        uppercase tracking-wider leading-tight ${determinedTitleFont === 'product-sans-black' ? 'font-black ' : 'font-extrabold'} break-words`}
      />
    </div>
  );
};

export default Title;
