import React, { useEffect, useRef } from "react";
import { DrumPadInterface } from "./DrumPadContainer";

const DrumPad: React.FC<DrumPadInterface> = ({ name, audio }) => {
  const drumAudio = useRef<HTMLAudioElement>();

  return (
    <div className="drum-pad" onClick={() => drumAudio.current.play()}>
      {name}
      <audio ref={drumAudio} className="clip" id={name} src={audio}></audio>
    </div>
  );
};

export default DrumPad;
