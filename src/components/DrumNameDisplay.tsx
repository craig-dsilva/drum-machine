import React from "react";

const DrumNameDisplay: React.FC<{ display: string }> = ({ display }) => {
  return <p id="display">{display}</p>;
};

export default DrumNameDisplay;
