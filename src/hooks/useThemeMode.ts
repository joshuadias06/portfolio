import { useEffect, useState } from "react";

export function useThemeMode() {
  const [mode, setMode] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = localStorage.getItem("themeMode") as "dark" | "light" | null;
    if (stored) setMode(stored);
  }, []);

  const toggleMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    localStorage.setItem("themeMode", newMode);
  };

  return { mode, toggleMode };
}
