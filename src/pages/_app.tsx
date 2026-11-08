import { type AppType } from "next/app";
import Head from "next/head";
import { JetBrains_Mono } from "next/font/google";

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
        <meta name="description" content="Felix Fong's Portfolio" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <div className={`${jetbrainsMono.className} min-h-screen bg-[#FAFAFA]`}>
        <main className="px-5 py-20 sm:px-20">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
};

export default MyApp;
