import React from "react";
import Button from "./TranslateButton";
import SpeakerButton from "./SpeakerButton";
import GroupImage from "./GroupImage";
import Menu from "./Menu";
import TranslateIconButton from "./Translateiconbutton";
import Copy from "./Copy";

const Background2Clean: React.FC = () => {
  const backgroundImage = new URL("../assets/BG.svg", import.meta.url).href;

  return (
    <>
      <div
        className="fixed inset-0 h-screen w-screen
                   max-lg:bg-[length:auto_100%] max-lg:bg-[position:89.3%_center]
                   lg:max-xl:bg-cover lg:max-xl:bg-[position:89.3%_center]
                   xl:bg-cover xl:bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <Copy codeText="DPTP4fUfEsrsasWuwVTgCmttqBu6Sy5B9TeCTBjc2YKgpDpump" />
      <div className="pointer-events-none fixed inset-0 z-[110] h-screen w-screen">
        <GroupImage />{" "}
        <div className="absolute bottom-4 z-[200] flex w-full justify-between px-12">
          <div className="pointer-events-auto flex items-center">
            <Button text="Translate to English" />
            <div className="ml-1 sm:ml-2 md:ml-3 lg:ml-4">
              <SpeakerButton />
            </div>
          </div>
        </div>
        <div className="pointer-events-auto fixed top-4 right-4 z-[9999]">
          <Menu onClick={() => console.log("Menu clicked")} />
        </div>
        <TranslateIconButton onClick={() => console.log("Translate clicked")} />
      </div>
    </>
  );
};

export default Background2Clean;
