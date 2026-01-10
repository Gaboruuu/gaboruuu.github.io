import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import Aurora from "../components/Aurora";
import AnimatedGradientText from "../components/AnimatedGradientText";
import { Avatar } from "@mui/material";
import theme from "../theme";
import me from "../assets/images/me_bg.png";
import "flag-icons/css/flag-icons.min.css";
import { useState, useEffect } from "react";
import { GitHub, LinkedIn, Instagram, Download } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ProjectsSection from "../components/ProjectsSection";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiJavascript,
  SiC,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiTypescript,
  SiDotnet,
  SiQt,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbSql, TbBrandCSharp } from "react-icons/tb";
import Footer from "../components/Footer";

const skillsData = [
  // Frontend
  { Icon: SiReact, name: "React", color: "#61DAFB", category: "Frontend" },
  { Icon: SiHtml5, name: "HTML5", color: "#E34F26", category: "Frontend" },
  { Icon: SiCss3, name: "CSS3", color: "#1572B6", category: "Frontend" },

  // Languages
  {
    Icon: SiJavascript,
    name: "JavaScript",
    color: "#F7DF1E",
    category: "Languages",
  },
  {
    Icon: SiTypescript,
    name: "TypeScript",
    color: "#3178C6",
    category: "Languages",
  },
  { Icon: SiPython, name: "Python", color: "#3776AB", category: "Languages" },
  { Icon: FaJava, name: "Java", color: "#007396", category: "Languages" },
  { Icon: TbBrandCSharp, name: "C#", color: "#239120", category: "Languages" },
  { Icon: SiCplusplus, name: "C++", color: "#00599C", category: "Languages" },
  { Icon: SiC, name: "C", color: "#A8B9CC", category: "Languages" },

  // Backend & Mobile
  { Icon: SiNodedotjs, name: "Node.js", color: "#339933", category: "Backend" },
  { Icon: SiReact, name: "React Native", color: "#61DAFB", category: "Mobile" },
  { Icon: SiDotnet, name: ".NET", color: "#512BD4", category: "Backend" },
  { Icon: SiQt, name: "Qt", color: "#41CD52", category: "Desktop" },

  // Databases
  { Icon: SiMysql, name: "MySQL", color: "#4479A1", category: "Database" },
  { Icon: TbSql, name: "SQL", color: "#CC2927", category: "Database" },
];

export default function Home() {
  const theme = useTheme();
  const { t } = useTranslation();
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

  const [introRef, introVisible] = useScrollAnimation();
  const [projectsRef, areProjectsVisible] = useScrollAnimation();
  const [educationRef, isEducationVisible] = useScrollAnimation();
  const [skillsRef, areSkillsVisible] = useScrollAnimation();

  return (
    <Box sx={{ overflowX: "hidden" }}>
      {/* Intro Section */}
      <Box
        ref={introRef}
        sx={{
          height: "100vh",
          position: "relative",
          overflow: "hidden",
          // bgcolor: theme.palette.background.default,
        }}
      >
        <Aurora
          colorStops={["#32006a", "#000000", "#32006a"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: introVisible
              ? "translate(-50%, -50%)"
              : "translate(-50%, -60%)",
            textAlign: "center",
            width: "100%",
            opacity: introVisible ? 1 : 0,
            transition: "all 1s ease",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              margin: "0 auto",
            }}
          >
            <Avatar
              src={me}
              sx={{
                width: { xs: 80, sm: 90, md: 100 },
                height: { xs: 80, sm: 90, md: 100 },
                borderRadius: "50%",
                border: `2px solid ${theme.palette.primary.main}`,
              }}
            ></Avatar>
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="h5"
                sx={{ color: theme.palette.text.primary }}
              >
                Gabor Gabriel
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.primary }}
              >
                <span className="fi fi-ro"></span> {t("home.location")}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ px: 2, mt: 2 }}>
            <Typography
              variant="h2"
              sx={{
                color: theme.palette.text.primary,
                textTransform: "uppercase",
                fontFamily: "Arial Black",
                fontSize: { xs: "40px", sm: "3.5rem", md: "72px" },
              }}
            >
              {t("home.title")}
            </Typography>
            <Box
              sx={{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: theme.palette.primary.main,
                  textTransform: "uppercase",
                  fontFamily: "Arial Black",
                  fontSize: { xs: "40px", sm: "56px", md: "72px" },
                }}
              >
                {t("home.subtitle")}
              </Typography>
            </Box>
          </Box>
          <Stack direction="row" spacing={2} justifyContent="center">
            <IconButton
              onClick={() =>
                window.open("https://github.com/gaboruuu", "_blank")
              }
              sx={{
                "&:hover": {
                  transform: "scale(1.2)",
                },
                transition: "all 0.3s ease",
              }}
            >
              <GitHub
                sx={{
                  color: theme.palette.text.primary,
                  width: 30,
                  height: 30,
                }}
              />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/gabriel-gabor-9864a6354/",
                  "_blank"
                )
              }
              sx={{
                "&:hover": {
                  transform: "scale(1.2)",
                },
                transition: "all 0.3s ease",
              }}
            >
              <LinkedIn
                sx={{
                  color: theme.palette.text.primary,
                  width: 30,
                  height: 30,
                }}
              />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open("https://www.instagram.com/gaboruul", "_blank")
              }
              sx={{
                "&:hover": {
                  transform: "scale(1.2)",
                },
                transition: "all 0.3s ease",
              }}
            >
              <Instagram
                sx={{
                  color: theme.palette.text.primary,
                  width: 30,
                  height: 30,
                }}
              />
            </IconButton>
          </Stack>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "center",
              mt: 3,
            }}
          >
            <Button
              component="a"
              href="mailto:gabriel.gabor2016@gmail.com"
              variant="outlined"
              sx={{
                color: theme.palette.text.primary,
                borderColor: theme.palette.primary.main,
                borderRadius: 3,
                px: 3,
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: `0 0 20px ${theme.palette.primary.main}`,
                  borderColor: theme.palette.primary.light,
                },
                transition: "all 0.3s ease",
              }}
            >
              {t("home.contactButton")}
            </Button>

            <Button
              variant="text"
              sx={{
                color: theme.palette.text.primary,
                "&:hover": {
                  color: theme.palette.text.secondary,
                },
                transition: "all 0.3s ease",
              }}
            >
              <Download sx={{ mr: 1 }} />
              {t("home.downloadCV")}
            </Button>
          </Box>
        </Box>
      </Box>
      {/* Projects Section */}
      <Box
        ref={projectsRef}
        sx={{
          margin: "0 auto",
          py: { xs: 8, md: 12 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <AnimatedGradientText
          variant="h3"
          colors={{ start: "#8800ffff", middle: "#7461b3ff", end: "#8800ffff" }}
          sx={{
            transform: areProjectsVisible
              ? "translateY(0)"
              : "translateY(20px)",
            opacity: areProjectsVisible ? 1 : 0,
            transition: "all 1s ease",
          }}
        >
          {t("home.featuredProjects")}
        </AnimatedGradientText>
        <Typography
          variant="body1"
          color={theme.palette.text.secondary}
          sx={{
            textAlign: "center",
            mb: 6,
            maxWidth: "700px",
            margin: "0 auto",
            marginBottom: 6,
            transform: areProjectsVisible
              ? "translateY(0)"
              : "translateY(20px)",
            opacity: areProjectsVisible ? 1 : 0,
            transition: "all 1s ease",
          }}
        >
          {t("home.featuredProjectsDesc")}
        </Typography>
        <ProjectsSection
          areProjectsVisible={areProjectsVisible}
          theme={theme}
          filter={true}
          sx={{ maxWidth: "1000px", margin: "0 auto" }}
          variant="featured"
        />
      </Box>

      {/* Education Section */}
      <Box></Box>
      {/* Skills Section */}
      <Box
        ref={skillsRef}
        sx={{
          py: { xs: 10, md: 14 },
          px: { xs: 2, sm: 3, md: 4 },
          mt: { xs: 4, md: 6 },
          position: "relative",
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(136,0,255,0.05) 50%, rgba(0,0,0,0) 100%)",
        }}
      >
        <AnimatedGradientText
          variant="h3"
          colors={{ start: "#8800ffff", middle: "#7461b3ff", end: "#8800ffff" }}
          sx={{
            textAlign: "center",
            transform: areSkillsVisible ? "translateY(0)" : "translateY(20px)",
            opacity: areSkillsVisible ? 1 : 0,
            transition: "all 1s ease",
            mb: 3,
            fontSize: { xs: "2.5rem", sm: "2.5rem", md: "3rem" },
          }}
        >
          {t("home.skillsTitle")}
        </AnimatedGradientText>
        <Typography
          variant="body1"
          color={theme.palette.text.secondary}
          sx={{
            textAlign: "center",
            mb: 8,
            maxWidth: "600px",
            margin: "0 auto",
            marginBottom: 8,
            transform: areSkillsVisible ? "translateY(0)" : "translateY(20px)",
            opacity: areSkillsVisible ? 1 : 0,
            transition: "all 1s ease 0.2s",
          }}
        >
          {t("home.skillsDesc")}
        </Typography>
        <Box
          sx={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(3, 1fr)",
              sm: "repeat(4, 1fr)",
              md: "repeat(5, 1fr)",
              lg: "repeat(6, 1fr)",
            },
            gap: { xs: 2.5, sm: 3, md: 4 },
            justifyItems: "center",
            py: 4,
          }}
        >
          {skillsData.map(({ Icon, name, color, category }, index) => (
            <Card
              key={index}
              sx={{
                width: { xs: 100, sm: 120, md: 140 },
                height: { xs: 120, sm: 140, md: 160 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: theme.palette.background.paper,
                backdropFilter: "blur(10px)",
                border: `1px solid ${theme.palette.primary.main}40`,
                borderRadius: 3,
                position: "relative",
                overflow: "hidden",
                transform: areSkillsVisible
                  ? "translateY(0) scale(1)"
                  : "translateY(20px) scale(0.9)",
                opacity: areSkillsVisible ? 1 : 0,
                transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${
                  index * 0.05 + 0.3
                }s`,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `radial-gradient(circle at 50% 0%, ${color}20 0%, transparent 70%)`,
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                },
                "&:hover": {
                  transform: "translateY(-10px) scale(1.05)",
                  borderColor: color,
                  boxShadow: `0 12px 30px ${color}40, 0 0 20px ${color}20`,
                  "&::before": {
                    opacity: 1,
                  },
                },
                "@media (max-width: 600px)": {
                  transition: `all 0.3s ease ${index * 0.05 + 0.3}s`,
                },
              }}
            >
              <CardContent
                sx={{
                  textAlign: "center",
                  p: 2,
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    fontSize: { xs: "40px", sm: "52px", md: "60px" },
                    mt: 1.5,
                    filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.3))",
                    transition: "all 0.3s ease",
                    ".MuiCard-root:hover &": {
                      transform: "scale(1.1)",
                      filter: `drop-shadow(0 4px 12px ${color}60)`,
                    },
                  }}
                >
                  <Icon color={color} style={{ width: "1em", height: "1em" }} />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: {
                      xs: "0.8rem",
                      sm: "0.9rem",
                      md: "1rem",
                    },
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                    textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                  }}
                >
                  {name}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: { xs: "0.6rem", sm: "0.65rem", md: "0.7rem" },
                    color: theme.palette.text.secondary,
                    opacity: 0.7,
                    display: "block",
                    mt: 0.5,
                  }}
                >
                  {t(`skills.categories.${category}`)}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
