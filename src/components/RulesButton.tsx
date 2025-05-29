import React from "react";

interface ActionButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ text, onClick, className = "" }) => {
  return (
    <div className="relative z-20 w-full">
      <div className="mt-6 ml-6 flex justify-start sm:mt-7 sm:ml-8 md:mt-8 md:ml-10 lg:ml-10 xl:ml-60 2xl:ml-80">
        <button
          className={`font-montserrat flex w-auto min-w-[120px] items-center justify-center rounded-full border border-pink-500 bg-[linear-gradient(81.54deg,#932A51_3.48%,rgba(81,19,42,0.83)_34.41%,rgba(81,19,42,0.83)_66.74%,#932A51_100.94%)] px-3 py-2 text-xs font-medium text-white shadow-lg transition-all duration-200 hover:bg-[linear-gradient(81.54deg,#932A51_13.48%,rgba(81,19,42,0.9)_34.41%,rgba(81,19,42,0.9)_66.74%,#932A51_90.94%)] hover:shadow-xl active:bg-[linear-gradient(81.54deg,#832244_3.48%,rgba(71,16,36,0.9)_34.41%,rgba(71,16,36,0.9)_66.74%,#832244_100.94%)] sm:px-4 sm:py-1.5 sm:text-sm md:min-w-[150px] md:px-6 md:py-2 md:text-base lg:min-w-[170px] ${className}`}
          onClick={onClick}
        >
          {text}
        </button>
      </div>
    </div>
  );
};

export default ActionButton;
