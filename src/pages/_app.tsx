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
        <meta name="description" content="Felix Fong's Porfolio" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <body className={`${jetbrainsMono.className} bg-[#FAFAFA]`}>
        <nav className="h-20 w-full"></nav>
        <main className="px-5 sm:px-20">
          <Component {...pageProps} />
        </main>
      </body>
    </>
  );
};

export default MyApp;
