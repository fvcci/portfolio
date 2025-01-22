import { type AppType } from "next/app";
import Head from "next/head";
import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import * as DimensionsContext from "~/contexts/DimensionsContext";
import Grid from "~/components/Grid";

import "~/styles/globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Felix Fong</title>
        <meta name="description" content="Felix Fong's Porfolio" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <div
        className={`${jetbrainsMono.className} relative min-h-screen bg-[#FAFAFA]`}
      >
        <DimensionsContext.Provider numNodes={50} addend={0}>
          <Grid />
        </DimensionsContext.Provider>
        <nav className="flex h-20 w-full justify-end bg-transparent px-4 pt-4">
          <div className="aspect-square h-full">
            <Image
              className="w-full"
              src="/icons/sun.svg"
              alt="resume.svg"
              width="0"
              height="0"
            />
          </div>
        </nav>
        <main className="px-5 sm:px-20">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
};

export default MyApp;
