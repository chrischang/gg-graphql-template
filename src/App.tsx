import React, { useMemo } from "react";
import { createTheme, CssBaseline, Paper, ThemeProvider } from "@mui/material";
import PNLLeaderboard from "./components/PNLLeaderboard";
const App = () => {
  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: "dark",
      },
      typography: {
        fontFamily: '"Chakra Petch", sans-serif',
      },
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper sx={{ minHeight: "100vh", background: "#120012" }}>
        <PNLLeaderboard />
      </Paper>
    </ThemeProvider>
  );
};
export default App;
