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
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename={process.env.PUBLIC_URL}>
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
          <Box
            sx={{
              maxWidth: "1000px",
              margin: "0 auto",
              px: 2,
              mt: 8,
              mb: 2,
            }}
          >
            <Footer />
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
