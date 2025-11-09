// src/theme/index.ts
import { createTheme } from "@mui/material/styles";

const PRIMARY = "#5170ff";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: { main: PRIMARY },
      background: {
        default: mode === "dark" ? "#000000" : "#fafafa",
        paper: mode === "dark" ? "#000000" : "#ffffff",
      },
      text: {
        primary: mode === "dark" ? "#ffffff" : "#111111",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            color: mode === "dark" ? "#ffffff" : "#111111",
            backgroundColor: "transparent",
            transition: "color 150ms ease, background-color 150ms ease",
            "&:hover": {
              color: PRIMARY,
              backgroundColor: "transparent",
            },
          },
        },
        defaultProps: {
          disableRipple: false,
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: mode === "dark" ? "#ffffff" : "#111111",
            transition: "color 150ms ease",
            "&:hover": {
              color: PRIMARY,
              backgroundColor: "transparent",
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === "dark" ? "#000000" : "#ffffff",
            backdropFilter: "blur(6px)",
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: "inherit",
            textDecoration: "none",
            "&:hover": {
              color: PRIMARY,
            },
          },
        },
      },
    },
    typography: {
      fontFamily: "'Roboto', sans-serif",
    },
  });

export const PRIMARY_COLOR = PRIMARY;
