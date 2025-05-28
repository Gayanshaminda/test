import React from 'react';
import Background from '../components/Background1';
import CenterPerson from '../components/CenterPerson';
import PeekingPerson from '../components/PeekingPerson';
import TitleSubtitleContainer from '../components/TitleSubtitleContainer';
import Cloud from '../components/Cloud';
import BottomRightText from '../components/BottomRightText';
import putinImage from '../assets/putin.svg';
import trumpPeekingImage from '../assets/trump-s.svg';
import { pageData } from '../data/pageData';

const Page2: React.FC = () => {
  const page = 2;
  const data = pageData[page];

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
        imageSrc={trumpPeekingImage} 
        altText="Trump"
      />
    </>
  );
};

export default Page2;
