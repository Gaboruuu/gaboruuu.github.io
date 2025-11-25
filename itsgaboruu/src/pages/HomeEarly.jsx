import React, { use, useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Paper,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";

import MeImage from "../assets/images/me.png";
import MeImage2 from "../assets/images/me2.png";

const educationData = [
  {
    degree: "High School Diploma",
    field: "Mathematics and Computer Science Profile.",
    institution: 'National College "Liviu Rebreanu"',
    location: "Bistrita, Romania",
    gpa: "Graduated with Honors (GPA: 9.50/10)",
    duration: "2020 - 2024",
  },
  {
    degree: "Bachelor's Degree",
    field: "Computer Science Major.",
    institution: 'University "Babes-Bolyai"',
    location: "Cluj-Napoca, Romania",
    gpa: "Completed first 2 semesters with GPA: 8/10",
    duration: "2024 - Present",
  },
];

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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

  const [projectsRef, isProjectsVisible] = useScrollAnimation();
  const [aboutRef, isAboutVisible] = useScrollAnimation();
  const [educationRef, isEducationVisible] = useScrollAnimation();
  const [skillsRef, isSkillsVisible] = useScrollAnimation();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: { xs: "flex-end", md: "center" },
          justifyContent: { xs: "center", md: "flex-start" },
          position: "relative",
          backgroundImage: `url(${isMobile ? MeImage2 : MeImage})`,
          backgroundSize: {
            xs: "cover",
            md: "cover",
          },
          backgroundPosition: {
            xs: "center 20%",
            md: "center center",
            lg: "right center",
          },
          backgroundRepeat: "no-repeat",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: {
              xs: "linear-gradient(180deg, transparent 0%, transparent 60%, rgba(0,0,0,0.8) 100%)",
              md: "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
            },
            zIndex: 1,
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            pl: { xs: 0, md: 8, lg: 12 },
            pb: { xs: 6, sm: 10, md: 0 },
            textAlign: { xs: "center", md: "left" },
            width: { xs: "100%", md: "auto" },
            animation: "slideInLeft 1s ease-out",
            "@keyframes slideInLeft": {
              "0%": {
                opacity: 0,
                transform: "translateX(-100px)",
              },
              "100%": {
                opacity: 1,
                transform: "translateX(0)",
              },
            },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "5rem", lg: "6rem" },
              color: "#fff",
              mb: { xs: 0.5, md: 1 },
              lineHeight: 1.2,
              textShadow: "3px 3px 6px rgba(0,0,0,0.8)",
            }}
          >
            Hi,
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "5rem", lg: "6rem" },
              color: "#fff",
              mb: { xs: 2, md: 3 },
              lineHeight: 1.2,
              textShadow: "3px 3px 6px rgba(0,0,0,0.8)",
            }}
          >
            I'm Gaboruu
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 500,
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.8rem", lg: "2rem" },
              maxWidth: { xs: "90%", md: "600px" },
              mx: { xs: "auto", md: 0 },
              lineHeight: 1.5,
              fontFamily: "'Courier New', monospace",
            }}
          >
            <Box component="span" sx={{ color: "#7C3AED" }}>
              const
            </Box>{" "}
            <Box component="span" sx={{ color: "#10B981" }}>
              user
            </Box>{" "}
            <Box component="span" sx={{ color: "#fff" }}>
              =
            </Box>{" "}
            <Box component="span" sx={{ color: "#F59E0B" }}>
              "programmer"
            </Box>
            <Box component="span" sx={{ color: "#fff" }}>
              ;
            </Box>
          </Typography>
        </Box>
      </Box>

      {/* About me Section*/}
      <Box ref={aboutRef} sx={{ py: 10, px: { xs: 2, md: 6 } }}>
        <Typography
          variant="h2"
          sx={{
            color: theme.palette.text.primary,
            mb: 1,
            textAlign: "center",
            opacity: isAboutVisible ? 1 : 0,
            transform: isAboutVisible ? "translateY(0)" : "translateY(-30px)",
            transition: "all 0.8s ease-out",
          }}
        >
          About Me
        </Typography>
        <Box
          sx={{
            mt: 5,
            maxWidth: "800px",
            mx: "auto",
            display: "flex",
            gap: 3,
            flexDirection: "column",
            transform: isAboutVisible ? "translateY(0)" : "translateY(-30px)",
            opacity: isAboutVisible ? 1 : 0,
            transition: "all 0.8s ease-out 0.2s",
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            I'm Gaboruu, a Computer Science student at Babes-Bolyai University
            who believes the best solution to "I wish this app existed" is
            building it myself.
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            Since a young age, I've been captivated by video games and the
            technologies that power them. That curiosity led me down the rabbit
            hole of programming, eventually pushing me to pursue formal
            education in computer science to turn my passion into a career. Now
            I'm especially focused on web and mobile development, creating tools
            that solve real problems—usually starting with my own.
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            When I'm not coding, you'll find me gaming, exploring the latest
            tech trends, or deep into anime and manga. After all, the best
            developers know when to step away from the screen (even if it's just
            to stare at a different one).
          </Typography>
        </Box>
      </Box>

      {/* Projects Section */}
      <Box
        ref={projectsRef}
        sx={{
          py: 8,
          px: { xs: 2, md: 6 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            color: theme.palette.text.primary,
            mb: 1,
            textAlign: "center",
            opacity: isProjectsVisible ? 1 : 0,
            transform: isProjectsVisible
              ? "translateY(0)"
              : "translateY(-30px)",
            transition: "all 0.8s ease-out",
          }}
        >
          Check Out My Projects
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.secondary,
            textAlign: "center",
            mb: 6,
            maxWidth: "600px",
            mx: "auto",
            opacity: isProjectsVisible ? 1 : 0,
            transform: isProjectsVisible
              ? "translateY(0)"
              : "translateY(-30px)",
            transition: "all 0.8s ease-out 0.2s",
          }}
        >
          Explore my latest work and creative solutions
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 4,
            maxWidth: "1200px",
            mx: "auto",
          }}
        >
          {[...Array(3)].map((_, index) => (
            <Card
              key={index}
              sx={{
                background: theme.palette.projects.card.background,
                backdropFilter: "blur(10px)",
                border: `1px solid ${theme.palette.projects.card.border}`,
                borderRadius: 3,
                overflow: "hidden",
                opacity: isProjectsVisible ? 1 : 0,
                transform: isProjectsVisible
                  ? "translateY(0)"
                  : "translateY(40px)",
                transition: `all 0.6s ease-out ${0.3 + index * 0.2}s`,
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: theme.palette.projects.card.shadowHover,
                  border: `1px solid ${theme.palette.projects.card.borderHover}`,
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={MeImage}
                alt="Project Image"
                sx={{
                  objectFit: "cover",
                }}
              />
              <CardContent sx={{ p: 3 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                    mb: 1.5,
                  }}
                >
                  Project {index + 1}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6,
                  }}
                >
                  A brief description of this amazing project and the
                  technologies used.
                </Typography>
                <Box sx={{ mt: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
                  {["React", "Node.js", "MongoDB"].map((tech) => (
                    <Box
                      key={tech}
                      component="span"
                      sx={{
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 1,
                        background: theme.palette.projects.badge.background,
                        color: theme.palette.projects.badge.color,
                        fontSize: "0.75rem",
                        fontWeight: 500,
                      }}
                    >
                      {tech}
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Box
          sx={{
            mt: 6,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            sx={{
              background: theme.palette.projects.button.gradient,
              color: theme.palette.text.primary,
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              fontWeight: 600,
              borderRadius: 2,
              textTransform: "none",
              boxShadow: theme.palette.projects.button.shadow,
              "&:hover": {
                background: theme.palette.projects.button.gradientHover,
                boxShadow: theme.palette.projects.button.shadowHover,
                transform: "translateY(-2px)",
              },
              transition: "all 0.3s ease",
            }}
          >
            View All Projects →
          </Button>
        </Box>
      </Box>

      {/* Education Section */}
      <Box ref={educationRef} sx={{ py: 8, px: { xs: 2, md: 6 } }}>
        <Typography
          variant="h2"
          sx={{
            color: theme.palette.text.primary,
            fontWeight: 700,
            mb: 1,
            textAlign: "center",
            transform: isEducationVisible
              ? "translateY(0)"
              : "translateY(-30px)",
            transition: "all 0.8s ease-out",
            opacity: isEducationVisible ? 1 : 0,
          }}
        >
          Education Background
        </Typography>
        <Timeline
          position={isMobile ? "right" : "alternate"}
          sx={{
            py: 5,

            // Conditionally add mobile-specific styles
            ...(isMobile && {
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }),
          }}
        >
          {educationData.map((edu, index) => {
            const baseDelay = index * 1.2; // Each item starts 1.2s after previous
            return (
              <TimelineItem
                key={index}
                sx={{
                  opacity: isEducationVisible ? 1 : 0,
                  transform: isEducationVisible
                    ? "translateY(0)"
                    : "translateY(30px)",
                  transition: `all 1s ease-out ${baseDelay}s`,
                }}
              >
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      opacity: isEducationVisible ? 1 : 0,
                      transition: `all 0.5s ease-out ${baseDelay}s`,
                      backgroundColor: theme.palette.projects.education.dot,
                    }}
                  />
                  {index < educationData.length - 1 && (
                    <TimelineConnector
                      sx={{
                        backgroundColor:
                          theme.palette.projects.education.connector,
                      }}
                    />
                  )}
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    mt: "-16px",
                    pb: 4,
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.text.accent,
                      opacity: isEducationVisible ? 1 : 0,
                      transition: `all 0.5s ease-out ${baseDelay + 0.2}s`,
                      mt: 0,
                    }}
                  >
                    {edu.degree}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: theme.palette.text.primary,
                      mb: 0.5,
                      opacity: isEducationVisible ? 1 : 0,
                      transition: `all 0.5s ease-out ${baseDelay + 0.4}s`,
                    }}
                  >
                    {edu.field}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.text.secondary}
                    sx={{
                      opacity: isEducationVisible ? 1 : 0,
                      transition: `all 0.5s ease-out ${baseDelay + 0.6}s`,
                    }}
                  >
                    {edu.institution} - {edu.duration}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.text.secondary}
                    sx={{
                      opacity: isEducationVisible ? 1 : 0,
                      transition: `all 0.5s ease-out ${baseDelay + 0.8}s`,
                    }}
                  >
                    {edu.location}
                  </Typography>
                  {/* <Typography
                    variant="body2"
                    color={theme.palette.text.secondary}
                    sx={{
                      opacity: isEducationVisible ? 1 : 0,
                      transition: `all 0.5s ease-out ${baseDelay + 1.0}s`,
                    }}
                  >
                    {edu.gpa}
                  </Typography> */}
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Box>

      {/* Skills Section (soft + language)*/}
      <Box>Skills</Box>

      {/* Footer Section */}
      <Box>Footer</Box>
    </Box>
  );
}

export default Home;
