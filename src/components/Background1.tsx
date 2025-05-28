import React from 'react';
import Button from './TranslateButton';
import SpeakerButton from './SpeakerButton';
import GroupImage from './GroupImage';
import FrameImageLeft from './FrameImageleft';
import FrameImageRight from './FrameImageRight';
import Cloud from './Cloud';
import Copy from './Copy';
import Menu from './Menu';
import './Background.css';


const Background: React.FC = () => {
  const backgroundImage = new URL('../assets/BG.svg', import.meta.url).href;
    return (
    <>
      <div 
        className="fixed inset-0 w-screen h-screen bg-cover bg-no-repeat overflow-hidden bg-responsive"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />      
      
      <div className="fixed inset-0 w-screen h-screen">
        <FrameImageLeft />
        <FrameImageRight />
        <Cloud className="z-10" />        
        <GroupImage className="z-20" />
          <div className="fixed top-4 right-4 z-[9999]">
          <Menu onClick={() => console.log('Menu clicked')} />
        </div>
        
        <Copy 
          codeText="DPTP4fUfEsrsasWuwVTgCmttqBu6Sy5B9TeCTBjc2YKgpDpump"
        />        
          <div className="absolute bottom-4 w-full flex flex-col sm:flex-row justify-between px-4 sm:px-8 md:px-12 z-[200]">
          <div className="flex items-center mb-2 sm:mb-0 pointer-events-auto">            
            <Button text="Translate to English" />
            <div className="ml-1 sm:ml-2 md:ml-3 lg:ml-4">
              <SpeakerButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Background;
