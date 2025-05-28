import React from 'react';

interface ActionButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ text, onClick, className = '' }) => {    return (      
<div className="relative z-20 w-full">       
      <div className="flex justify-start ml-6 sm:ml-8 md:ml-10 lg:ml-10 xl:ml-60 2xl:ml-80 mt-6 sm:mt-7 md:mt-8">        
        <button         
         className={`
            w-auto min-w-[120px] md:min-w-[150px] lg:min-w-[170px]
            px-3 sm:px-4 md:px-6     py-2 sm:py-1.5 md:py-2
            flex items-center justify-center
            rounded-full     border border-pink-500
            bg-[linear-gradient(81.54deg,#932A51_3.48%,rgba(81,19,42,0.83)_34.41%,rgba(81,19,42,0.83)_66.74%,#932A51_100.94%)]
            hover:bg-[linear-gradient(81.54deg,#932A51_13.48%,rgba(81,19,42,0.9)_34.41%,rgba(81,19,42,0.9)_66.74%,#932A51_90.94%)] active:bg-[linear-gradient(81.54deg,#832244_3.48%,rgba(71,16,36,0.9)_34.41%,rgba(71,16,36,0.9)_66.74%,#832244_100.94%)]            transition-all duration-200
            text-white text-xs sm:text-sm md:text-base font-montserrat font-medium
            shadow-lg hover:shadow-xl
            ${className}`}
          onClick={onClick}
        >
          {text}
        </button>
      </div>
    </div>
  );
};

export default ActionButton;
