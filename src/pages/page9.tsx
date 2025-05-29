import React, { useState } from "react";
import putinImage from "../assets/putin-2.svg";
import putinShadow from "../assets/Shadow-putin.svg";
import { countryData } from "../data/countryData";
import CountryPageLayout from "../components/CountryPageLayout";

const Page9: React.FC = () => {
  const [isCountryExpanded, setIsCountryExpanded] = useState(false);

  return (
    <CountryPageLayout
      countryData={countryData.russia}
      personImage={putinImage}
      shadowSrc={putinShadow}
      isCountryExpanded={isCountryExpanded}
      setIsCountryExpanded={setIsCountryExpanded}
    />
  );
};

export default Page9;
