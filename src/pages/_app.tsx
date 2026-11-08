import { GeistPixelCircle } from "geist/font/pixel/circle";
import type { AppType } from "next/app";
import { Courier_Prime, Instrument_Sans } from "next/font/google";
import Head from "next/head";

import "~/styles/globals.css";

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-courier-prime",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

const fontVariables = [
  GeistPixelCircle.variable,
  courierPrime.variable,
  instrumentSans.variable,
].join(" ");

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Felix Fong</title>
        <meta name="description" content="Felix Fong's Portfolio" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </Head>
      <div className={`${fontVariables} min-h-screen font-mono`}>
        <main className="px-5 py-20 sm:px-20">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
};

export default MyApp;
