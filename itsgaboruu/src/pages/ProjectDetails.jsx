import React from "react";
import { Box, Typography, Dialog, IconButton } from "@mui/material";
import { useParams } from "react-router-dom";
import projectsData from "../data/projectsData";
import theme from "../theme";
import { useState } from "react";
import { Close } from "@mui/icons-material";

function ProjectDetails() {
  const params = useParams();
  const project = projectsData.find((p) => p.link === `/projects/${params.id}`);
  const [selectedImage, setSelectedImage] = useState(null);
  const [areProjectsVisible, setAreProjectsVisible] = useState(false);
  React.useEffect(() => {
    setAreProjectsVisible(true);
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      {project ? (
        <Box sx={{ maxWidth: 800, margin: "0 auto" }}>
          {/* Project Title */}
          <Box sx={{ mb: 4, textAlign: "center", pt: 15 }}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                color: theme.palette.text.primary,
                fontWeight: "bold",
                fontFamily: "Arial Black",
                transform: areProjectsVisible
                  ? "translateY(0)"
                  : "translateY(-20px)",
                opacity: areProjectsVisible ? 1 : 0,
                transition: "all 0.5s ease",
                color: theme.palette.text.primary,
              }}
            >
              {project.title}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {project.descriptionShort}
            </Typography>
          </Box>

          {/* Project Description + thumbnail (right)*/}
          <Box sx={{ px: 2, py: 8 }}>
            <Typography
              variant="h6"
              color="textSecondary"
              sx={{ textAlign: "start" }}
            >
              What is this project about?
            </Typography>
            <Box
              sx={{
                textAlign: "start",
                mt: 2,
                gap: 3,
                display: "flex",
              }}
            >
              <Typography variant="body2" sx={{ mt: 2 }}>
                {project.descriptionLong}
              </Typography>
              <img
                src={project.thumbnail}
                alt={`${project.title} thumbnail`}
                style={{
                  maxWidth: "45%",
                  height: "auto",
                  borderRadius: 8,
                  marginTop: 16,
                }}
              />
            </Box>
          </Box>

          {/* Technologies used */}
          <Box sx={{ py: 8, px: 2 }}>
            <Typography
              variant="h6"
              gutterBottom
              color="textSecondary"
              sx={{ textAlign: "start", mb: 2 }}
            >
              Technologies Used
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {project.technologies.map((tech, index) => (
                <Box
                  key={index}
                  sx={{
                    px: 2,
                    py: 1,
                    borderRadius: 1,
                    backgroundColor: theme.palette.primary.main,
                    color: "#fff",
                    fontSize: "0.875rem",
                    fontWeight: "bold",
                  }}
                >
                  {tech}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Key Features */}
          <Box sx={{ py: 8, px: 2 }}>
            <Typography
              variant="h6"
              gutterBottom
              color="textSecondary"
              sx={{ textAlign: "start", mb: 2, mt: 4 }}
            >
              Key Features
            </Typography>
            <Box sx={{ textAlign: "start", mt: 2 }}>
              {project.keyFeatures.map((feature, index) => (
                <Typography key={index} variant="body2" sx={{ mb: 1 }}>
                  • {feature}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Gallery / Screenshots */}
          <Box sx={{ py: 8, px: 2 }}>
            <Typography
              variant="h6"
              gutterBottom
              color="textSecondary"
              sx={{ textAlign: "start", mb: 2 }}
            >
              Gallery / Screenshots
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                justifyContent: "center",
              }}
            >
              {project.images.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  alt={`${project.title} screenshot ${index + 1}`}
                  onClick={() => setSelectedImage(imgSrc)}
                  style={{
                    width: "calc(50% - 16px)",
                    borderRadius: 8,
                    cursor: "pointer",
                    transition: "transform 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.02)")
                  }
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                />
              ))}
            </Box>
          </Box>

          {/* Links */}
          <Box></Box>
        </Box>
      ) : (
        <Typography variant="h6">Project not found.</Typography>
      )}

      {/* Fullscreen Image Dialog */}
      <Dialog
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        maxWidth={false}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.95)",
            boxShadow: "none",
            margin: 2,
          },
        }}
      >
        <IconButton
          onClick={() => setSelectedImage(null)}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
            zIndex: 1,
          }}
        >
          <Close />
        </IconButton>
        <Box
          onClick={() => setSelectedImage(null)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "80vh",
            cursor: "pointer",
          }}
        >
          <img
            src={selectedImage}
            alt="Fullscreen view"
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
            }}
          />
        </Box>
      </Dialog>
    </Box>
  );
}

export default ProjectDetails;
