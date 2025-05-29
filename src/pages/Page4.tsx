import React from "react";
import Background from "../components/Background1";
import CenterPerson from "../components/CenterPerson";
import PeekingPerson from "../components/PeekingPerson";
import TitleSubtitleContainer from "../components/TitleSubtitleContainer";
import Cloud from "../components/Cloud";
import BottomRightText from "../components/BottomRightText";
import trumpImage from "../assets/trump-p.png";
import putinPeekingImage from "../assets/putin-s.svg";
import { pageData } from "../data/pageData";

const Page4: React.FC = () => {
  const page = 4;
  const data = pageData[page];

  return (
    <>
      <Background />

      <BottomRightText text={data.bottomRightText} centerOnMobile={true} />

      <TitleSubtitleContainer
        title={data.title}
        subtitle={data.subtitle}
        page={page}
        actionButtonText={data.actionButtonText}
      />

      <Cloud text={data.cloudText} />
      <CenterPerson
        imageSrc={trumpImage}
        altText="Trump"
        size="trump-preset"
        position="trump-center"
      />

      <PeekingPerson imageSrc={putinPeekingImage} altText="Putin" />
    </>
  );
};

export default Page4;
