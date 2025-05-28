import React from 'react';
import Button from './TranslateButton';
import SpeakerButton from './SpeakerButton';
import GroupImage from './GroupImage';
import Menu from './Menu';
import TranslateIconButton from './Translateiconbutton';
import Copy from './Copy';
import './Background.css';


const Background2Clean: React.FC = () => {
  const backgroundImage = new URL('../assets/BG.svg', import.meta.url).href;
  
  return (
    <>
      <div 
        className="fixed inset-0 w-screen h-screen bg-responsive"
        style={{ backgroundImage: `url(${backgroundImage})` }}      
      />        
      
      <Copy 
        codeText="DPTP4fUfEsrsasWuwVTgCmttqBu6Sy5B9TeCTBjc2YKgpDpump"
      />
        <div className="fixed inset-0 w-screen h-screen z-[110] pointer-events-none">
        <GroupImage />        <div className="absolute bottom-4 w-full flex justify-between px-12 z-[200]">
          <div className="flex items-center pointer-events-auto">            
            <Button text="Translate to English" />
            <div className="ml-1 sm:ml-2 md:ml-3 lg:ml-4">
              <SpeakerButton />
            </div>
          </div>
          
          </div>
          <div className="fixed top-4 right-4 z-[9999] pointer-events-auto">
          <Menu onClick={() => console.log('Menu clicked')} />
        </div>
          <TranslateIconButton onClick={() => console.log('Translate clicked')} />
        
        
      </div>
    </>
  );
};

export default Background2Clean;
