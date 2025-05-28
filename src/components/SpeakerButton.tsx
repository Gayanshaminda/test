import React from 'react';
import speakerSvg from '../assets/speaker.svg';

interface SpeakerButtonProps {
  onClick?: () => void;
}

const SpeakerButton: React.FC<SpeakerButtonProps> = ({ onClick }) => {  return (    

<button className="inline-flex items-center justify-center h-4 w-5 sm:h-5 sm:w-6 md:h-6 md:w-8 lg:h-7 lg:w-9
      rounded-full border-2 border-pink-500 bg-gradient-to-r from-pink-800/60
       via-pink-950/50 to-pink-800/60 shadow-md transition-all duration-200"
      onClick={onClick}
    >
      <img 
        src={speakerSvg} 
        alt="Speaker" 
        className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-3.5" 
      />
    </button>
  );
};

export default SpeakerButton;
