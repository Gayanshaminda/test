import React, { useState, useEffect } from 'react';
import Background from '../components/Background1';
import CenterPerson from '../components/CenterPerson';
import PeekingPerson from '../components/PeekingPerson';
import TitleSubtitleContainer from '../components/TitleSubtitleContainer';
import Cloud from '../components/Cloud';
import BottomRightText from '../components/BottomRightText';
import putinImage from '../assets/putin.svg';
import zelenskyImage from '../assets/zel-s-2.svg';
import zelenskyLargeImage from '../assets/zel-s.svg';
import { pageData } from '../data/pageData';

const Page1: React.FC = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const page = 1;
  const data = pageData[page];
  
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>     
    
     <Background />          
        <BottomRightText 
        text={data.bottomRightText}
        centerOnMobile={true} 
      />
      
      <TitleSubtitleContainer
        title={data.title}
        subtitle={data.subtitle}
        page={page}
        actionButtonText={data.actionButtonText}
      />
      
      <Cloud text={data.cloudText} />
      
      <CenterPerson 
        imageSrc={putinImage} 
        altText="Putin"
        size="putin-preset"
        position="putin-center"
      />
        <PeekingPerson 
        imageSrc={isLargeScreen ? zelenskyLargeImage : zelenskyImage} 
        altText="Zelenskyy"
      />
    </>
  );
};

export default Page1;