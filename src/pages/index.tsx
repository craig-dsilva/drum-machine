import Head from "next/head";
import { useState } from "react";
import DrumPadContainer from "../components/DrumPadContainer";
import DrumPadData from "../data/drumPadData.json";
import Controls from "@/components/Controls";

const Home = () => {
  const [currentDrum, setCurrentDrum] = useState("");

  const updateDrum = (name: string) => setCurrentDrum(name);

  return (
    <>
      <Head>
        <title>Drum Machine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <DrumPadContainer data={DrumPadData} updateDrum={updateDrum} />
        <Controls drumName={currentDrum} />
      </main>
    </>
  );
};

export default Home;
