import React from "react";
import Totalsupply from "./Totalsupply";
import Governancevotes from "./Governancevotes";
import Burnevents from "./Burnevents";
import Countryname from "./Countryname";
import CenterPerson from "./CenterPerson";
import BackButton from "./Backbutton";
import Background2Clean from "./Background2";
import PersonShadow from "./PersonShadow";

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
  setIsCountryExpanded,
}) => {
  const [isLargeScreen, setIsLargeScreen] = React.useState(false);
  // Check if screen is larger than or equal to 1024px
  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize(); // Check on initial load
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
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
        className="z-30 -translate-x-1/4 transform sm:-translate-x-1/2 lg:mb-1 xl:-mb-3 2xl:-mb-4"
      />

      {shadowSrc && (
        <PersonShadow
          shadowSrc={shadowSrc}
          width="w-[400px] sm:w-[420px] md:w-[450px] lg:w-[400px] xl:w-[470px] 2xl:w-[480px]"
          height="h-[400px] sm:h-[420px] md:h-[450px] lg:h-[400px] xl:h-[470px] 2xl:h-[480px]"
          left="left-[100px] xs:left-[-50px] sm:left-[calc(50%-100px)] md:left-[calc(50%+0px)] lg:left-[calc(50%+90px)] xl:left-[calc(50%+120px)] 2xl:left-[calc(50%+138px)]"
          className="z-20 -translate-x-1/4 transform sm:-translate-x-1/2 lg:mb-1 xl:-mb-3 2xl:-mb-4"
        />
      )}

      {isLargeScreen ? (
        <div className="pointer-events-none absolute inset-0 z-40">
          <div className="relative mx-auto h-full w-full max-w-screen-2xl">
            <div className="pointer-events-auto absolute top-[65%] right-[5%] -translate-y-1/2 transform lg:top-[73.5%] lg:right-[15.5%] xl:top-[73%] xl:right-[16%] 2xl:top-[75%] 2xl:right-[17.5%]">
              <Countryname
                countryName={countryData.name}
                description={countryData.description}
                onClick={handleCountryClick}
              />
            </div>
          </div>
        </div>
      ) : (
        // For smaller screens, using a responsive container with flexible positioning
        <div className="pointer-events-none absolute top-0 right-0 left-0 z-40 px-6 pt-6 sm:px-8 sm:pt-7 md:px-9 md:pt-8">
          <div className="pointer-events-auto">
            <Countryname
              countryName={countryData.name}
              description={countryData.description}
              onClick={handleCountryClick}
            />
          </div>
        </div>
      )}
      {isLargeScreen ? (
        // Large screen layout with the centered container
        <div className="pointer-events-none fixed inset-0 z-20 flex items-center justify-center">
          <div className="pointer-events-auto relative mt-12 ml-0 flex w-full max-w-[1000px] flex-col px-4 lg:mt-14 lg:-ml-8 lg:max-w-[750px] lg:px-6 xl:mt-16 xl:-ml-12 xl:max-w-[800px] xl:px-4 2xl:-ml-16 2xl:max-w-[920px]">
            <div className="flex h-full flex-row justify-between gap-4 md:gap-6 lg:gap-8 2xl:gap-5">
              {/* Left column - stacked vertically */}
              <div className="flex h-full w-full max-w-[420px] flex-col justify-between md:max-w-[430px] lg:max-w-[500px] 2xl:max-w-[450px]">
                {/* Total Supply Card - Top Left */}
                <div className="mb-5">
                  <Totalsupply description={countryData.totalSupply} />
                </div>
                {/* Governance Votes Card - Bottom Left */}
                <div className="mt-auto">
                  <Governancevotes description={countryData.governanceVotes} />
                </div>{" "}
              </div>

              {/* Right column */}
              <div className="flex w-full max-w-[420px] flex-col md:max-w-[430px] lg:max-w-[500px] 2xl:max-w-[450px]">
                {/* Burn Events Card - Top Right */}
                <div>
                  <Burnevents description={countryData.burnEvents} />
                </div>
              </div>
            </div>
            {/* Back button positioned with flex for better responsiveness and higher z-index */}

            <div className="pointer-events-auto z-40 mt-3 flex pl-0 sm:mt-3 md:mt-4 md:pl-1 lg:justify-start lg:pl-1 xl:pl-1 2xl:pl-2">
              <BackButton />
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Mobile layout - aligned with country name */}
          <div className="pointer-events-auto fixed right-4 left-6 z-20 transition-all duration-300 sm:right-6 sm:left-8 md:right-7 md:left-9 lg:right-8 lg:left-8">
            <div
              className={`flex flex-col ${isCountryExpanded ? "mt-36 sm:mt-40 md:mt-44 lg:mt-44" : "mt-20 sm:mt-22 md:mt-24 lg:mt-22"} gap-3 sm:gap-4 md:gap-5 lg:gap-6`}
            >
              <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
                <div>
                  <Totalsupply description={countryData.totalSupply} />
                </div>

                <div>
                  <Governancevotes description={countryData.governanceVotes} />
                </div>

                <div>
                  <Burnevents description={countryData.burnEvents} />
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-auto fixed bottom-6 left-10 z-50 sm:bottom-8 sm:left-12 md:bottom-10 md:left-14 lg:bottom-12 lg:left-16">
            <BackButton />
          </div>
        </>
      )}
    </>
  );
};

export default CountryPageLayout;
