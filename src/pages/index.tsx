import Head from "next/head";
import DrumPadContainer from "../components/DrumPadContainer";
import styles from "@/styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>Drum Machine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <DrumPadContainer />
      </main>
    </>
  );
};

export default Home;
