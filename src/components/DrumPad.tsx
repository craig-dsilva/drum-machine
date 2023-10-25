import React, { useState, useEffect, useRef } from "react";

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
  const [isClicked, setIsClicked] = useState(false);
  const drumAudio = useRef<HTMLAudioElement>();

  const playAudio = () => {
    if (drumAudio.current) drumAudio.current.play();
    setIsClicked(true)
    updateDrum(displayName);
    setTimeout(() => setIsClicked(false), 200)
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === name || e.key === name.toLowerCase()) playAudio();
    });
  }, []);

  return (
    <div
      className={isClicked ? "drum-pad clicked" : "drum-pad"}
      onClick={playAudio}
    >
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
