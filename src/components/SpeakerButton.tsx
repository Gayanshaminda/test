import React from "react";
import speakerSvg from "../assets/speaker.svg";

interface SpeakerButtonProps {
  onClick?: () => void;
}

const SpeakerButton: React.FC<SpeakerButtonProps> = ({ onClick }) => {
  return (
    <button
      className="hidden lg:inline-flex h-4 w-5 items-center justify-center rounded-full border-2 border-pink-500 bg-gradient-to-r from-pink-800/60 via-pink-950/50 to-pink-800/60 shadow-md transition-all duration-200 sm:h-5 sm:w-6 md:h-6 md:w-8 lg:h-7 lg:w-9"
      onClick={onClick}
    >
      <img
        src={speakerSvg}
        alt="Speaker"
        className="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 lg:h-3.5 lg:w-4"
      />
    </button>
  );
};

export default SpeakerButton;
