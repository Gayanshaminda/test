import React, { useState } from "react";
import trumpImage from "../assets/trump-2.svg";
import trumpShadow from "../assets/Shadow-trump.svg";
import { countryData } from "../data/countryData";
import CountryPageLayout from "../components/CountryPageLayout";

const Page8: React.FC = () => {
  const [isCountryExpanded, setIsCountryExpanded] = useState(false);

  return (
    <CountryPageLayout
      countryData={countryData.usa}
      personImage={trumpImage}
      shadowSrc={trumpShadow}
      isCountryExpanded={isCountryExpanded}
      setIsCountryExpanded={setIsCountryExpanded}
    />
  );
};

export default Page8;
