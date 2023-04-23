import Head from "next/head";
import { Inter } from "next/font/google";
import Main from "./Home";
import Cohere from "./Cohere";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Versee</title>
        <meta name="description" content="camera scanning travel app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cohere />
      {/* <Main /> */}
    </div>
  );
}
