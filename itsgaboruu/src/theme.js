import { createTheme } from "@mui/material/styles";

// Option 1: "Cyberpunk Dev" - High Contrast & Modern
const cyberpunkPalette = {
  dark: {
    mode: "dark",
    primary: {
      main: "#8A2BE2", // BlueViolet
      light: "#D946EF", // Magenta-purple for hover
      dark: "#6B1FB0",
    },
    secondary: {
      main: "#D946EF", // Secondary accent
      light: "#F059FF",
      dark: "#B835D0",
    },
    background: {
      default: "#050505", // Almost pure black
      paper: "#121212", // Cards/sections
      header: "#050505",
    },
    text: {
      primary: "#F3F4F6", // Off-white
      secondary: "#9CA3AF", // Cool grey
      disabled: "#6B7280",
    },
  },
  light: {
    mode: "light",
    primary: {
      main: "#7C3AED", // Adjusted for light mode
      light: "#A78BFA",
      dark: "#5B21B6",
    },
    secondary: {
      main: "#D946EF",
      light: "#F0ABFC",
      dark: "#A21CAF",
    },
    background: {
      default: "#F9FAFB", // Light grey
      paper: "#FFFFFF", // White cards
      header: "#FFFFFF",
    },
    text: {
      primary: "#111827", // Dark text
      secondary: "#4B5563", // Medium grey
      disabled: "#9CA3AF",
    },
  },
};

// Option 2: "Royal Obsidian" - Elegant & Professional
const royalObsidianPalette = {
  dark: {
    mode: "dark",
    primary: {
      main: "#8B5CF6", // Brighter violet for better visibility
      light: "#A78BFA", // Soft purple
      dark: "#7C3AED",
    },
    secondary: {
      main: "#A78BFA", // Highlight/borders
      light: "#C4B5FD",
      dark: "#8B5CF6",
    },
    background: {
      default: "#0F172A", // Very dark slate
      paper: "#1E293B", // Dark slate grey for cards
      header: "#0F172A",
    },
    text: {
      primary: "#F1F5F9", // Brighter white for better readability
      secondary: "#94A3B8", // Lighter muted text
      disabled: "#64748B",
    },
    divider: "rgba(148, 163, 184, 0.12)", // Subtle divider
    action: {
      active: "#A78BFA",
      hover: "rgba(139, 92, 246, 0.08)",
      selected: "rgba(139, 92, 246, 0.16)",
      disabled: "#475569",
      disabledBackground: "#1E293B",
    },
  },
  light: {
    mode: "light",
    primary: {
      main: "#7C3AED",
      light: "#A78BFA",
      dark: "#5B21B6",
    },
    secondary: {
      main: "#8B5CF6",
      light: "#C4B5FD",
      dark: "#6D28D9",
    },
    background: {
      default: "#F8FAFC", // Very light slate
      paper: "#FFFFFF", // White cards
      header: "#FFFFFF",
    },
    text: {
      primary: "#0F172A", // Dark slate
      secondary: "#475569", // Medium slate
      disabled: "#94A3B8",
    },
  },
};

const palettes = {
  cyberpunk: cyberpunkPalette,
  royal: royalObsidianPalette,
};

export const createAppTheme = (mode = "dark", paletteType = "cyberpunk") => {
  // For light mode, use Royal Obsidian's dark palette
  // For dark mode, use Cyberpunk's dark palette
  const selectedPalette =
    mode === "dark" ? palettes.cyberpunk.dark : palettes.royal.dark;

  return createTheme({
    palette: selectedPalette,
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: `${selectedPalette.primary.main} ${selectedPalette.background.default}`,
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              width: "8px",
              height: "8px",
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              borderRadius: "8px",
              backgroundColor: selectedPalette.primary.main,
            },
            "&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track": {
              backgroundColor: selectedPalette.background.default,
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
            backgroundColor: selectedPalette.background.paper,
            border: `1px solid ${
              selectedPalette.divider || "rgba(255, 255, 255, 0.12)"
            }`,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: 500,
          },
          contained: {
            boxShadow: "none",
            "&:hover": {
              boxShadow: `0 0 20px ${selectedPalette.primary.main}40`,
            },
          },
          outlined: {
            borderColor: selectedPalette.primary.main,
            "&:hover": {
              borderColor: selectedPalette.primary.light,
              backgroundColor:
                selectedPalette.action?.hover || "rgba(139, 92, 246, 0.08)",
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderColor: selectedPalette.primary.main,
          },
        },
      },
    },
  });
};

// Default export for backward compatibility
export default createAppTheme("dark", "cyberpunk");
