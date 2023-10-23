import React from "react";
import DrumNameDisplay from "./DrumNameDisplay";

const Controls: React.FC<any> = ({ drumName }) => {
  return (
    <div className="controls">
      <DrumNameDisplay display={drumName} />
    </div>
  );
};

export default Controls;
