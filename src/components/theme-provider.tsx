import { createContext, use, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

/**
 * Provides theme context to its children, managing and persisting the current theme selection.
 *
 * Initializes the theme from local storage or a default value, updates the document's class list to reflect the selected theme, and allows consumers to change the theme. The theme can be "light", "dark", or "system", with "system" following the user's OS preference.
 *
 * @param children - React nodes to be rendered within the provider.
 * @param defaultTheme - The initial theme if none is stored; defaults to "system".
 * @param storageKey - The key used for storing the theme in local storage; defaults to "vite-ui-theme".
 *
 * @remark Theme changes and persistence only occur in browser environments.
 */
export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () =>
      (typeof localStorage !== "undefined"
        && (localStorage?.getItem(storageKey) as Theme))
      || defaultTheme,
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      if (typeof window !== "undefined") {
        localStorage?.setItem(storageKey, theme);
        setTheme(theme);
      }
    },
  };

  return (
    <ThemeProviderContext {...props} value={value}>
      {children}
    </ThemeProviderContext>
  );
}

/**
 * Provides access to the current theme and a function to update it from the ThemeProvider context.
 *
 * @returns An object containing the current theme and a setter function.
 *
 * @throws {Error} If called outside of a ThemeProvider.
 */
export function useTheme() {
  const context = use(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
}
