import React from "react";
import DrumPad from "../components/DrumPad";

export interface DrumPadInterface {
  name: string;
  displayName: string;
  audio: string;
}

interface DrumPadContainerInterface {
  data: DrumPadInterface[];
  updateDrum: (name: string) => void;
}

const DrumPadContainer: React.FC<DrumPadContainerInterface> = ({
  data,
  updateDrum,
}) => {
  return (
    <div>
      {data.map((drumKey: DrumPadInterface) => {
        return (
          <DrumPad
            key={drumKey.name}
            name={drumKey.name}
            audio={drumKey.audio}
            displayName={drumKey.displayName}
            updateDrum={updateDrum}
          />
        );
      })}
    </div>
  );
};

export default DrumPadContainer;
