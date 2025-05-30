import React from "react";
import Background from "../components/Background1";
import Mainimage from "../components/Mainimage";
import PeekingPerson from "../components/PeekingPerson";
import TitleSubtitleContainer from "../components/TitleSubtitleContainer";
import Cloud from "../components/Cloud";
import BottomRightText from "../components/BottomRightText";
import modiPeekingImage from "../assets/modi-s.svg";
import { pageData } from "../data/pageData";

const Page5: React.FC = () => {
  const page = 5;
  const data = pageData[page];

  return (
    <>
      <Background />

      <BottomRightText text={data.bottomRightText} centerOnMobile={true} />      <TitleSubtitleContainer
        title={data.title}
        subtitle={data.subtitle}
        page={page}
        actionButtonText={data.actionButtonText}
      />

      <Cloud text={data.cloudText} />

      <Mainimage page={page} />

      <PeekingPerson imageSrc={modiPeekingImage} altText="Modi" />
    </>
  );
};

export default Page5;
