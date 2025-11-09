import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import { ThemeModeProvider, useThemeMode } from "./context/ThemeModeContext";
import { getTheme } from "./theme";
import { Home } from "./sections/Home";
import { Carrer } from "./sections/Carrer";
import { Certifications } from "./sections/Certifications";

function AppContent() {
  const { mode } = useThemeMode();
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Box
        component="main"
        sx={{
          pt: 6,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
          bgcolor: "background.default",
          minHeight: "100vh",
        }}
      >
        <Home />
        <Carrer />
        <Certifications />
      </Box>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <ThemeModeProvider>
      <AppContent />
    </ThemeModeProvider>
  );
}
