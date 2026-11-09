import { GeistPixelCircle } from "geist/font/pixel/circle";
import type { Metadata } from "next";
import { Courier_Prime, Instrument_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";

import "~/global-styles.css";

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
    // When several icons fit, browsers use the last one, so the themed PNGs
    // win over the .ico fallback.
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      {
        url: "/favicon-32-light.png",
        type: "image/png",
        sizes: "32x32",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-32-dark.png",
        type: "image/png",
        sizes: "32x32",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // next-themes sets the theme class on <html> before React hydrates.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistPixelCircle.variable} ${courierPrime.variable} ${instrumentSans.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
