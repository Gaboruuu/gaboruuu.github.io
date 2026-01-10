import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
} from "react";

const ThemeContext = createContext();

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeMode must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeContextProvider = ({ children }) => {
  // Get initial mode from localStorage or use default
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("themeMode") || "dark";
  });

  // Automatically select palette based on mode
  // Dark mode = cyberpunk, Light mode = royal
  const palette = useMemo(() => {
    return mode === "dark" ? "cyberpunk" : "royal";
  }, [mode]);

  // Save to localStorage whenever theme changes
  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider
      value={{
        mode,
        palette,
        toggleMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
