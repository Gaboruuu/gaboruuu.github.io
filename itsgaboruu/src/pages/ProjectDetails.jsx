import React from "react";
import {
  Box,
  Typography,
  Dialog,
  IconButton,
  Button,
  Paper,
} from "@mui/material";
import { useParams } from "react-router-dom";
import projectsData from "../data/projectsData";
import theme from "../theme";
import { useState, useEffect, useRef } from "react";
import { Close, CheckCircle } from "@mui/icons-material";

function ProjectDetails() {
  const params = useParams();
  const project = projectsData.find((p) => p.link === `/projects/${params.id}`);
  const [selectedImage, setSelectedImage] = useState(null);

  // Scroll animation hook
  const useScrollAnimation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);
    return [ref, isVisible];
  };

  const [titleRef, isTitleVisible] = useScrollAnimation();
  const [descriptionRef, isDescriptionVisible] = useScrollAnimation();
  const [techRef, isTechVisible] = useScrollAnimation();
  const [featuresRef, areFeaturesVisible] = useScrollAnimation();
  const [galleryRef, isGalleryVisible] = useScrollAnimation();
  const [linksRef, areLinksVisible] = useScrollAnimation();

  return (
    <Box sx={{ p: 4 }}>
      {project ? (
        <Box sx={{ maxWidth: 800, margin: "0 auto" }}>
          {/* Project Title */}
          <Box ref={titleRef} sx={{ mb: 4, textAlign: "center", pt: 15 }}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                color: theme.palette.text.primary,
                fontWeight: "bold",
                fontFamily: "Arial Black",
                transform: isTitleVisible
                  ? "translateY(0)"
                  : "translateY(-20px)",
                opacity: isTitleVisible ? 1 : 0,
                transition: "all 0.8s ease",
              }}
            >
              {project.title}
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{
                transform: isTitleVisible
                  ? "translateY(0)"
                  : "translateY(20px)",
                opacity: isTitleVisible ? 1 : 0,
                transition: "all 0.8s ease 0.2s",
              }}
            >
              {project.descriptionShort}
            </Typography>
          </Box>

          {/* Project Description + thumbnail (right)*/}
          <Box ref={descriptionRef} sx={{ px: 2, py: 8 }}>
            <Typography
              variant="h6"
              color="textSecondary"
              sx={{
                textAlign: "start",
                transform: isDescriptionVisible
                  ? "translateY(0)"
                  : "translateY(20px)",
                opacity: isDescriptionVisible ? 1 : 0,
                transition: "all 0.8s ease",
              }}
            >
              What is this project about?
            </Typography>
            <Box
              sx={{
                textAlign: "start",
                mt: 2,
                gap: 3,
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                transform: isDescriptionVisible
                  ? "translateY(0)"
                  : "translateY(20px)",
                opacity: isDescriptionVisible ? 1 : 0,
                transition: "all 0.8s ease 0.2s",
              }}
            >
              <Box sx={{ flex: 1 }}>
                {project.descriptionLong.map((para, index) => (
                  <Typography key={index} variant="body2" sx={{ mt: 2 }}>
                    {para}
                  </Typography>
                ))}
              </Box>

              <Box
                component="img"
                src={project.thumbnail}
                alt={`${project.title} thumbnail`}
                sx={{
                  maxWidth: { xs: "100%", md: "400px" },
                  height: "auto",
                  borderRadius: 1,
                  mt: 2,
                  objectFit: "cover",
                  border: `2px solid ${theme.palette.primary.main}`,
                }}
              />
            </Box>
          </Box>

          {/* Technologies used */}
          <Box ref={techRef} sx={{ py: 8, px: 2 }}>
            <Typography
              variant="h6"
              gutterBottom
              color="textSecondary"
              sx={{
                textAlign: "start",
                mb: 2,
                transform: isTechVisible ? "translateY(0)" : "translateY(20px)",
                opacity: isTechVisible ? 1 : 0,
                transition: "all 0.8s ease",
              }}
            >
              Technologies Used
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                transform: isTechVisible ? "translateY(0)" : "translateY(20px)",
                opacity: isTechVisible ? 1 : 0,
                transition: "all 0.8s ease 0.2s",
              }}
            >
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
          <Box ref={featuresRef} sx={{ py: 8, px: 2 }}>
            <Typography
              variant="h6"
              gutterBottom
              color="textSecondary"
              sx={{
                textAlign: "start",
                mb: 2,
                mt: 4,
                transform: areFeaturesVisible
                  ? "translateY(0)"
                  : "translateY(20px)",
                opacity: areFeaturesVisible ? 1 : 0,
                transition: "all 0.8s ease",
              }}
            >
              Key Features
            </Typography>
            <Box
              sx={{
                mt: 2,
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(auto-fill, minmax(250px, 1fr))",
                },
                gap: 2,
              }}
            >
              {project.keyFeatures.map((feature, index) => (
                <Paper
                  key={index}
                  elevation={2}
                  sx={{
                    p: 2,
                    display: "flex",
                    alignItems: "flex-start",
                    bgcolor: "rgba(0, 0, 0, 0.05)",
                    gap: 1.5,
                    transform: areFeaturesVisible
                      ? "translateY(0) scale(1)"
                      : "translateY(20px) scale(0.9)",
                    opacity: areFeaturesVisible ? 1 : 0,
                    transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${
                      index * 0.1 + 0.2
                    }s`,
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 4,
                    },
                  }}
                >
                  <CheckCircle
                    sx={{
                      color: theme.palette.primary.main,
                      fontSize: 20,
                      mt: 0.25,
                      flexShrink: 0,
                    }}
                  />
                  <Typography variant="body2" sx={{ flex: 1 }}>
                    {feature}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Box>

          {/* Gallery / Screenshots */}
          <Box ref={galleryRef} sx={{ py: 8, px: 2 }}>
            <Typography
              variant="h6"
              gutterBottom
              color="textSecondary"
              sx={{
                textAlign: "start",
                mb: 2,
                transform: isGalleryVisible
                  ? "translateY(0)"
                  : "translateY(20px)",
                opacity: isGalleryVisible ? 1 : 0,
                transition: "all 0.8s ease",
              }}
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
                    transform: isGalleryVisible ? "scale(1)" : "scale(0.9)",
                    opacity: isGalleryVisible ? 1 : 0,
                    transition: `all 0.5s ease ${index * 0.1 + 0.2}s`,
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
          <Box ref={linksRef} sx={{ py: 8, px: 2 }}>
            <Typography
              variant="h6"
              gutterBottom
              color="textSecondary"
              sx={{
                transform: areLinksVisible
                  ? "translateY(0)"
                  : "translateY(20px)",
                opacity: areLinksVisible ? 1 : 0,
                transition: "all 0.8s ease",
              }}
            >
              Links
            </Typography>
            <Box
              sx={{
                transform: areLinksVisible
                  ? "translateY(0)"
                  : "translateY(20px)",
                opacity: areLinksVisible ? 1 : 0,
                transition: "all 0.8s ease 0.2s",
              }}
            >
              {project.githubUrl && (
                <Button
                  variant="outlined"
                  sx={{
                    mr: 2,
                    mb: 2,
                    "&:hover": {
                      scale: 1.05,
                    },
                    transition: "all 0.3s ease",
                  }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      ) : (
        <Typography variant="h6">
          Project not found or not available.
        </Typography>
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
