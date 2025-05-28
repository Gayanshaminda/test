import React from 'react';
import Totalsupply from './Totalsupply';
import Governancevotes from './Governancevotes';
import Burnevents from './Burnevents';
import Countryname from './Countryname';
import CenterPerson from './CenterPerson';
import BackButton from './Backbutton';
import Background2Clean from './Background2';
import PersonShadow from './PersonShadow';

interface CountryData {
  name: string;
  description: string;
  totalSupply: string;
  governanceVotes: string;
  burnEvents: string;
}

interface CountryPageLayoutProps {
  countryData: CountryData;
  personImage: string;
  shadowSrc?: string;
  isCountryExpanded: boolean;
  setIsCountryExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const CountryPageLayout: React.FC<CountryPageLayoutProps> = ({
  countryData,
  personImage,
  shadowSrc,
  isCountryExpanded,
  setIsCountryExpanded
}) => {
  const [isLargeScreen, setIsLargeScreen] = React.useState(false);
    // Check if screen is larger than or equal to 1024px
  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    
    checkScreenSize(); // Check on initial load
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);
    // Handle country name expansion
  const handleCountryClick = () => {
    setIsCountryExpanded(!isCountryExpanded);
  };
  
  
  return (
    <>     
        <Background2Clean />
        <CenterPerson
        imageSrc={personImage}
        position="custom"
        size="custom"
        width="w-[400px] sm:w-[420px] md:w-[450px] lg:w-[400px] xl:w-[470px] 2xl:w-[480px]"
        height="h-[400px] sm:h-[420px] md:h-[450px] lg:h-[400px] xl:h-[470px] 2xl:h-[480px]"
        left="left-[100px] xs:left-[-50px] sm:left-[calc(50%-100px)] md:left-[calc(50%+0px)] lg:left-[calc(50%+90px)] xl:left-[calc(50%+120px)] 2xl:left-[calc(50%+138px)]"
        className="transform -translate-x-1/4 sm:-translate-x-1/2 z-30 lg:mb-1 xl:-mb-3 2xl:-mb-4" 
      />     
      
      {shadowSrc && (
        <PersonShadow
          shadowSrc={shadowSrc}
          width="w-[400px] sm:w-[420px] md:w-[450px] lg:w-[400px] xl:w-[470px] 2xl:w-[480px]"
          height="h-[400px] sm:h-[420px] md:h-[450px] lg:h-[400px] xl:h-[470px] 2xl:h-[480px]"
          left="left-[100px] xs:left-[-50px] sm:left-[calc(50%-100px)] md:left-[calc(50%+0px)] lg:left-[calc(50%+90px)] xl:left-[calc(50%+120px)] 2xl:left-[calc(50%+138px)]"
          className="transform -translate-x-1/4 sm:-translate-x-1/2 z-20 lg:mb-1 xl:-mb-3 2xl:-mb-4"
        />
      )}
      
      {isLargeScreen ? (
        
        <div className="absolute inset-0 z-40 pointer-events-none">
          <div className="relative w-full h-full max-w-screen-2xl mx-auto">
            <div className="absolute top-[65%] lg:top-[73.5%] xl:top-[73%] 2xl:top-[75%]
                           right-[5%] lg:right-[15.5%] xl:right-[16%] 2xl:right-[17.5%]
                           transform -translate-y-1/2 pointer-events-auto">
              <Countryname 
                countryName={countryData.name}
                description={countryData.description}
                onClick={handleCountryClick}
              />
            </div>
          </div>
        </div>      ) : (
        // For smaller screens, using a responsive container with flexible positioning
        <div className="absolute top-0 left-0 right-0 z-40 px-6 sm:px-8 md:px-9 pt-6 sm:pt-7 md:pt-8 pointer-events-none">
          <div className="pointer-events-auto">
            <Countryname 
              countryName={countryData.name}
              description={countryData.description}
              onClick={handleCountryClick}
            />
          </div>
        </div>
      )}{isLargeScreen ? (
        // Large screen layout with the centered container
        <div className="fixed inset-0 flex items-center justify-center z-20 pointer-events-none">          
        
        <div className="relative w-full max-w-[1000px] lg:max-w-[750px] xl:max-w-[800px] 2xl:max-w-[920px] flex flex-col pointer-events-auto 
            px-4 lg:px-6 xl:px-4 
            ml-0 lg:-ml-8 xl:-ml-12 2xl:-ml-16 
            mt-12 lg:mt-14 xl:mt-16">
           
            <div className="flex flex-row justify-between h-full gap-4 md:gap-6 lg:gap-8 2xl:gap-5">
              {/* Left column - stacked vertically */}
              <div className="flex flex-col justify-between h-full w-full max-w-[420px] md:max-w-[430px] lg:max-w-[500px] 2xl:max-w-[450px]">
                {/* Total Supply Card - Top Left */}
                <div className="mb-5">
                  <Totalsupply 
                    description={countryData.totalSupply} 
                  />
                </div>
                
                {/* Governance Votes Card - Bottom Left */}
                <div className="mt-auto">
                  <Governancevotes 
                    description={countryData.governanceVotes} 
                  />
                </div>              </div>
              
              {/* Right column */}
              <div className="flex flex-col w-full max-w-[420px] md:max-w-[430px] lg:max-w-[500px] 2xl:max-w-[450px]">
                {/* Burn Events Card - Top Right */}
                <div>
                  <Burnevents
                    description={countryData.burnEvents}
                  />
                </div>
              </div>            
              </div>
                {/* Back button positioned with flex for better responsiveness and higher z-index */}            
                
                <div className="flex mt-3 sm:mt-3 md:mt-4 pointer-events-auto z-40 lg:justify-start pl-0 md:pl-1 lg:pl-1 xl:pl-1 2xl:pl-2">
              <BackButton />
            </div>
          </div>
        </div>      ) : (        <>
          {/* Mobile layout - aligned with country name */}          
          <div className="fixed left-6 sm:left-8 md:left-9 lg:left-8 right-4 sm:right-6 md:right-7 lg:right-8 z-20 pointer-events-auto transition-all duration-300">
            <div className={`flex flex-col ${isCountryExpanded ? 'mt-36 sm:mt-40 md:mt-44 lg:mt-44' : 'mt-20 sm:mt-22 md:mt-24 lg:mt-22'} gap-3 sm:gap-4 md:gap-5 lg:gap-6`}>
              <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
                <div>
                  <Totalsupply 
                    description={countryData.totalSupply} 
                  />
                </div>
                
                <div>
                  <Governancevotes
                    description={countryData.governanceVotes} 
                  />
                </div>
                
                <div>
                  <Burnevents
                    description={countryData.burnEvents}
                  />
                </div>
              </div>
            </div>          
            
            </div>            
            <div className="fixed bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 left-10 sm:left-12 md:left-14 lg:left-16 z-50 pointer-events-auto">
            <BackButton />
          </div>
        </>
      )}
    </>
  );
};

export default CountryPageLayout;
