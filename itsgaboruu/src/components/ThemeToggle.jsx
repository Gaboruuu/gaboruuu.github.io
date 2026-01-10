import React from "react";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useThemeMode } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { mode, toggleMode } = useThemeMode();

  return (
    <IconButton
      onClick={toggleMode}
      color="inherit"
      title={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
    >
      {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default ThemeToggle;
