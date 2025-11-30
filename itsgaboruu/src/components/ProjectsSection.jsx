import React from "react";
import { Box } from "@mui/material";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projectsData";

export default function ProjectsSection({
  areProjectsVisible,
  theme,
  filter,
  variant,
  sx,
}) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 2,
        padding: 4,
        margin: "0 auto",
        justifyItems: "center",
        ...sx,
      }}
    >
      {projectsData
        .filter((project) => (filter ? project.featured === true : true))
        .map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            variant={variant || "default"}
            sx={{
              transform: areProjectsVisible
                ? "translateY(0)"
                : "translateY(20px)",
              opacity: areProjectsVisible ? 1 : 0,
              transition: `all 0.5s ease ${index * 0.2}s`,
            }}
          />
        ))}
    </Box>
  );
}
