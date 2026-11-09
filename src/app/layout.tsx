import { GeistPixelCircle } from "geist/font/pixel/circle";
import type { Metadata } from "next";
import { Courier_Prime, Instrument_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { ThemeFavicon } from "~/components/theme-favicon";
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
  // The tab icon is rendered by <ThemeFavicon /> so it can follow the site's
  // theme. Browsers fall back to /favicon.ico until it loads.
  icons: {
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
          <ThemeFavicon />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
