import React from "react";
import DrumNameDisplay from "./DrumNameDisplay";

const Controls: React.FC<any> = ({ drumName }) => {
  return (
    <div>
      <DrumNameDisplay display={drumName} />
    </div>
  );
};

export default Controls;
