import { GeistPixelCircle } from "geist/font/pixel/circle";
import type { AppType } from "next/app";
import { Courier_Prime, Instrument_Sans } from "next/font/google";
import Head from "next/head";

import "~/styles/globals.css";

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      {/* Define the font variables on :root so portalled shadcn content
          (dialogs, popovers) gets them too. */}
      <style jsx global>{`
        :root {
          --font-geist-pixel-circle: ${GeistPixelCircle.style.fontFamily};
          --font-courier-prime: ${courierPrime.style.fontFamily};
          --font-instrument-sans: ${instrumentSans.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>Felix Fong</title>
        <meta name="description" content="Felix Fong's Portfolio" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </Head>
      <main className="min-h-screen px-5 py-20 sm:px-20">
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default MyApp;
