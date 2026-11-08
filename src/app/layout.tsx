import { GeistPixelCircle } from "geist/font/pixel/circle";
import type { Metadata } from "next";
import { Courier_Prime, Instrument_Sans } from "next/font/google";

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

export const metadata: Metadata = {
  title: "Felix Fong",
  description: "Felix Fong's Portfolio",
  icons: {
    icon: [
      {
        url: "/logo-light.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo-dark.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistPixelCircle.variable} ${courierPrime.variable} ${instrumentSans.variable}`}
    >
      <body>
        <main className="min-h-screen px-5 py-20 sm:px-20">{children}</main>
      </body>
    </html>
  );
}
