import React from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import ActionButton from './RulesButton';

interface TitleSubtitleContainerProps {
  title: string;
  subtitle: string;
  page: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  actionButtonText?: string;
  titleFont?: 'rubik-mono-one' | 'product-sans' | 'product-sans-black' | 'montserrat';
  className?: string;
  showActionButton?: boolean;
}

const TitleSubtitleContainer: React.FC<TitleSubtitleContainerProps> = ({
  title,
  subtitle,
  page,
  actionButtonText = "Read Rules",
  titleFont,
  className = '',
  showActionButton = true
}) => {
  return (
    <div className="relative">
      <div className={`relative 
        mx-6 sm:mx-0 md:mx-0 lg:mx-4 xl:mx-54 2xl:mx-72 
        mt-16 sm:mt-[70px] md:mt-[80px] lg:mt-[100px] xl:mt-[330px] 2xl:mt-[300px] 
        max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl
         text-white z-20 ${className}`}>        
         
         <Title 
          title={title}
          page={page}
          titleFont={titleFont}
          className="lg:ml-0 md:mb-8"
        />
        <Subtitle 
          subtitle={subtitle}
          page={page}
          className="lg:ml-0"
        />
      </div>
      {showActionButton && (
        <ActionButton text={actionButtonText} />
      )}
    </div>
  );
};

export default TitleSubtitleContainer;
