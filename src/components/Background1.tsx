import React from "react";
import Button from "./TranslateButton";
import SpeakerButton from "./SpeakerButton";
import GroupImage from "./GroupImage";
import FrameImageLeft from "./FrameImageleft";
import FrameImageRight from "./FrameImageRight";
import Cloud from "./Cloud";
import Copy from "./Copy";
import Menu from "./Menu";
import "./Background.css";

const Background: React.FC = () => {
  const backgroundImage = new URL("../assets/BG.svg", import.meta.url).href;
  return (
    <>
      <div
        className="bg-responsive fixed inset-0 h-screen w-screen overflow-hidden bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div className="fixed inset-0 h-screen w-screen">
        <FrameImageLeft />
        <FrameImageRight />
        <Cloud className="z-10" />
        <GroupImage className="z-20" />
        <div className="fixed top-4 right-4 z-[9999]">
          <Menu onClick={() => console.log("Menu clicked")} />
        </div>

        <Copy codeText="DPTP4fUfEsrsasWuwVTgCmttqBu6Sy5B9TeCTBjc2YKgpDpump" />
        <div className="absolute bottom-4 z-[200] flex w-full flex-col justify-between px-4 sm:flex-row sm:px-8 md:px-12">
          <div className="pointer-events-auto mb-2 flex items-center sm:mb-0">
            <Button text="Translate to English" />
            <div className="ml-1 sm:ml-2 md:ml-3 lg:ml-4">
              <SpeakerButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Background;
