"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// The tab icon follows the site's light / dark / system switcher. The theme is
// only known in the browser, so nothing renders on the server; until then the
// browser falls back to /favicon.ico. React hoists this <link> into <head>.
export function ThemeFavicon() {
  const { resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  if (!mounted || (resolvedTheme !== "light" && resolvedTheme !== "dark")) {
    return null;
  }

  return (
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={`/favicon-32-${resolvedTheme}.png`}
    />
  );
}
