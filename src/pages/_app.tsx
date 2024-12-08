import { type AppType } from "next/app";
import { JetBrains_Mono } from "next/font/google";

import "~/styles/globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={`${jetbrainsMono.className} bg-[#FAFAFA]`}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
