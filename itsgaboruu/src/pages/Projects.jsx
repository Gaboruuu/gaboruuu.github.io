import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import projectsData from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";
import theme from "../theme";
import ProjectsSection from "../components/ProjectsSection";

function Projects() {
  const [areProjectsVisible, setAreProjectsVisible] = useState(false);
  useEffect(() => {
    setAreProjectsVisible(true);
  }, []);
  return (
    <Box sx={{ py: 8, px: 1, minHeight: "100vh", pt: 23 }}>
      <Typography
        variant="h2"
        align="center"
        sx={{
          color: theme.palette.text.primary,
          fontWeight: "bold",
          fontFamily: "Arial Black",
          transform: areProjectsVisible ? "translateY(0)" : "translateY(-20px)",
          opacity: areProjectsVisible ? 1 : 0,
          transition: "all 0.5s ease",
          color: theme.palette.primary.main,
        }}
      >
        My Projects
      </Typography>
      <Typography
        variant="h6"
        align="center"
        sx={{
          mb: 6,
          color: theme.palette.text.secondary,
          transform: areProjectsVisible ? "translateY(0)" : "translateY(-20px)",
          opacity: areProjectsVisible ? 1 : 0,
          transition: "all 0.5s ease 0.2s",
        }}
      >
        A list of all my projects, from web development to mobile apps and more.
      </Typography>
      <Box sx={{ maxWidth: 1200, margin: "0 auto" }}>
        <ProjectsSection
          areProjectsVisible={areProjectsVisible}
          theme={theme}
          filter={false}
        />
      </Box>
    </Box>
  );
}

export default Projects;
