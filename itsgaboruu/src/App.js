import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            minHeight: "100vh",
            m: 0,
            p: 0,
            backgroundColor: theme.palette.background.default,
            position: "relative",
          }}
        >
          <ParticleBackground />
          <Box sx={{ position: "relative", zIndex: 10 }}>
            <Header />
            <Box sx={{ m: 0, p: 0 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetails />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
