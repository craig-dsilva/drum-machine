import React, { useEffect, useRef } from "react";

interface DrumPadInterface {
  name: string;
  audio: string;
  displayName: string;
  updateDrum: (name: string) => void;
}

const DrumPad: React.FC<DrumPadInterface> = ({
  name,
  audio,
  displayName,
  updateDrum,
}) => {
  const drumAudio = useRef<HTMLAudioElement>();

  const playAudio = () => {
    if (drumAudio.current) drumAudio.current.play();
    updateDrum(displayName);
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === name || e.key === name.toLowerCase()) playAudio();
    });
  }, []);

  return (
    <div className="drum-pad" onClick={playAudio}>
      {name}
      <audio
        ref={drumAudio as React.RefObject<HTMLAudioElement>}
        className="clip"
        id={name}
        src={audio}
      ></audio>
    </div>
  );
};

export default DrumPad;
