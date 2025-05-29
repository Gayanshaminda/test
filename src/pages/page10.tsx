import React, { useState } from "react";
import modiImage from "../assets/modi-2.svg";
import modiShadow from "../assets/Shadow-modi.svg";
import { countryData } from "../data/countryData";
import CountryPageLayout from "../components/CountryPageLayout";

const Page10: React.FC = () => {
  const [isCountryExpanded, setIsCountryExpanded] = useState(false);

  return (
    <CountryPageLayout
      countryData={countryData.india}
      personImage={modiImage}
      shadowSrc={modiShadow}
      isCountryExpanded={isCountryExpanded}
      setIsCountryExpanded={setIsCountryExpanded}
    />
  );
};

export default Page10;
