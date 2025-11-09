// src/context/ThemeModeContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeMode = "dark" | "light";
type ContextType = {
  mode: ThemeMode;
  toggleMode: () => void;
};

const ThemeModeContext = createContext<ContextType | undefined>(undefined);

export const ThemeModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>("dark");

  useEffect(() => {
    const stored = localStorage.getItem("themeMode") as ThemeMode | null;
    if (stored) setMode(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const toggleMode = () => setMode((m) => (m === "dark" ? "light" : "dark"));

  return <ThemeModeContext.Provider value={{ mode, toggleMode }}>{children}</ThemeModeContext.Provider>;
};

export function useThemeMode() {
  const ctx = useContext(ThemeModeContext);
  if (!ctx) throw new Error("useThemeMode must be used within ThemeModeProvider");
  return ctx;
}
