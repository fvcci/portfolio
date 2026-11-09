"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const themes = ["light", "dark", "system"] as const;

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
                : "text-muted-foreground hover:text-foreground transition-colors"
            }
          >
            {t}
          </button>
        );
      })}
    </div>
  );
}
