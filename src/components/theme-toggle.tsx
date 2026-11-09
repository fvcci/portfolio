"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const themes = ["light", "dark", "system"] as const;

// Hovering an option previews the highlight colour it would have once picked:
// red for light, blue for dark, and whichever the OS currently prefers for
// system.
const hoverColour = {
  light: "hover:text-red",
  dark: "hover:text-blue",
  system: "hover:text-red os-dark:hover:text-blue",
} satisfies Record<(typeof themes)[number], string>;

const subscribe = () => () => {};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  // The saved theme is only known in the browser, so don't highlight one
  // until after hydration: false on the server, true on the client.
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  return (
    <div className="flex gap-8 text-sm">
      {themes.map((t) => {
        const active = mounted && theme === t;
        return (
          <button
            key={t}
            type="button"
            onClick={() => setTheme(t)}
            aria-pressed={active}
            className={
              active
                ? "text-brand"
                : `text-muted-foreground transition-colors ${hoverColour[t]}`
            }
          >
            {t}
          </button>
        );
      })}
    </div>
  );
}
