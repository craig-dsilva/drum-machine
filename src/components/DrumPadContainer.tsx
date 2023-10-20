import React from "react";
import DrumPad from "../components/DrumPad";
import DrumPadData from "../data/drumPadData.json";

export interface DrumPadInterface {
  name: string;
  audio: string;
}

const DrumPadContainer = () => {
  return (
    <div>
      {DrumPadData.map((drumKey: DrumPadInterface) => {
        return (
          <DrumPad
            key={drumKey.name}
            name={drumKey.name}
            audio={drumKey.audio}
          />
        );
      })}
    </div>
  );
};

export default DrumPadContainer;
