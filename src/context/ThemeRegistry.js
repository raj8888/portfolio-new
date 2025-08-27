"use client";

import { createContext, useState, useMemo, useContext, useEffect } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const ThemeModeContext = createContext();

export function useThemeMode() {
  return useContext(ThemeModeContext);
}

export default function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState(null); // null until loaded

  // Load saved theme mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode");
    setMode(savedMode || "light");
  }, []);

  const toggleTheme = () => {
    setMode(prev => {
      const newMode = prev === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", newMode);
      return newMode;
    });
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode: mode || "light", primary: { main: "#1976d2" } },
      }),
    [mode]
  );

  // Avoid rendering until mode is loaded
  if (!mode) return null;

  return (
    <ThemeModeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
