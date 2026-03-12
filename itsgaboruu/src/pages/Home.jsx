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
import cvPdf from "../assets/Gabor-Gabriel-CV.pdf";
import "flag-icons/css/flag-icons.min.css";
import { useState, useEffect } from "react";
import { GitHub, LinkedIn, Download } from "@mui/icons-material";
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
  SiGit,
  SiExpress,
  SiExpo,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbSql, TbBrandCSharp } from "react-icons/tb";
import Footer from "../components/Footer";

const skillsData = {
  languages: {
    title: "Languages",
    subtitle: "Syntax & Structure",
    skills: [
      { Icon: SiCplusplus, name: "C++", color: "#00599C" },
      { Icon: TbBrandCSharp, name: "C#", color: "#239120" },
      { Icon: SiC, name: "C", color: "#A8B9CC" },
      { Icon: FaJava, name: "Java", color: "#007396" },
      { Icon: SiPython, name: "Python", color: "#3776AB" },
      { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
      { Icon: SiHtml5, name: "HTML5", color: "#E34F26" },
      { Icon: SiCss3, name: "CSS3", color: "#1572B6" },
    ],
  },
  frameworks: {
    title: "Frameworks & Technologies",
    subtitle: "Tools & Environments",
    skills: [
      { Icon: SiReact, name: "React", color: "#61DAFB" },
      { Icon: SiReact, name: "React Native", color: "#61DAFB" },
      { Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
      { Icon: SiExpress, name: "Express.js", color: "#d9ff00" },
      { Icon: SiExpo, name: "Expo", color: "#ffffff" },
      { Icon: SiDotnet, name: ".NET", color: "#512BD4" },
      { Icon: SiQt, name: "Qt", color: "#41CD52" },
    ],
  },
  databases: {
    title: "Databases & Tools",
    subtitle: "Data Storage & Version Control",
    skills: [
      { Icon: SiMysql, name: "MySQL", color: "#4479A1" },
      { Icon: TbSql, name: "SQL", color: "#CC2927" },
      { Icon: SiGit, name: "Git", color: "#F05032" },
    ],
  },
};

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
        { threshold: 0.1 },
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
          colorStops={[
            theme.palette.primary.main,
            theme.palette.background.default,
            theme.palette.primary.main,
          ]}
          blend={0.5}
          amplitude={1}
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
            width: "90%",
            maxWidth: "1000px",
            opacity: introVisible ? 1 : 0,
            transition: "all 1s ease",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: 3, md: 5 },
              margin: "0 auto",
            }}
          >
            {/* Left Side - Image & Social */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                flexShrink: 0,
              }}
            >
              <Avatar
                src={me}
                sx={{
                  width: { xs: 150, sm: 180, md: 200 },
                  height: { xs: 150, sm: 180, md: 200 },
                  borderRadius: "50%",
                  border: `3px solid ${theme.palette.primary.main}`,
                  boxShadow: `0 0 30px ${theme.palette.primary.main}50`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: `0 0 40px ${theme.palette.primary.main}80`,
                  },
                }}
              />
              {/* Social Icons */}
              <Stack direction="row" spacing={2}>
                <IconButton
                  onClick={() =>
                    window.open("https://github.com/gaboruuu", "_blank")
                  }
                  sx={{
                    "&:hover": {
                      transform: "scale(1.2)",
                      color: theme.palette.primary.main,
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <GitHub
                    sx={{
                      color: theme.palette.text.primary,
                      width: 28,
                      height: 28,
                    }}
                  />
                </IconButton>
                <IconButton
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/gabriel-gabor-9864a6354/",
                      "_blank",
                    )
                  }
                  sx={{
                    "&:hover": {
                      transform: "scale(1.2)",
                      color: theme.palette.primary.main,
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <LinkedIn
                    sx={{
                      color: theme.palette.text.primary,
                      width: 28,
                      height: 28,
                    }}
                  />
                </IconButton>
              </Stack>
            </Box>

            {/* Right Side - Content */}
            <Box
              sx={{
                textAlign: { xs: "center", md: "left" },
                maxWidth: { md: "550px" },
              }}
            >
              {/* Name and Role */}
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="h1"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 800,
                    fontSize: { xs: "36px", sm: "48px", md: "56px" },
                    mb: 2,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Gabor Gabriel
                </Typography>
                <Box
                  sx={{
                    display: "inline-flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: "center",
                    justifyContent: { xs: "center", md: "flex-start" },
                    gap: { xs: 0.5, sm: 1.5 },
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: theme.palette.primary.main,
                      fontWeight: 400,
                      fontSize: { xs: "16px", sm: "18px", md: "20px" },
                      letterSpacing: "0.05em",
                    }}
                  >
                    Software Engineer
                  </Typography>
                  <Box
                    sx={{
                      display: { xs: "none", sm: "block" },
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      bgcolor: theme.palette.primary.main,
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      color: theme.palette.primary.main,
                      fontWeight: 400,
                      fontSize: { xs: "16px", sm: "18px", md: "20px" },
                      letterSpacing: "0.05em",
                    }}
                  >
                    Computer Science Student
                  </Typography>
                </Box>
              </Box>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: { xs: "15px", sm: "16px", md: "17px" },
                  lineHeight: 1.7,
                  maxWidth: "500px",
                  textAlign: { xs: "center", md: "left" },
                  mb: 3,
                }}
              >
                {t("home.description")}
              </Typography>

              {/* Action Buttons */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Button
                  component="a"
                  href="mailto:gabriel.gabor2016@gmail.com"
                  variant="contained"
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    color: theme.palette.text.primary,
                    borderRadius: 3,
                    px: 3,
                    py: 1,
                    fontSize: { xs: "14px", sm: "15px" },
                    fontWeight: 600,
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: `0 0 20px ${theme.palette.primary.main}`,
                      bgcolor: theme.palette.primary.light,
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  {t("home.contactButton")}
                </Button>

                <Button
                  component="a"
                  href={cvPdf}
                  download="Gabriel-Gabor-CV.pdf"
                  variant="outlined"
                  sx={{
                    color: theme.palette.text.primary,
                    borderColor: theme.palette.primary.main,
                    borderRadius: 3,
                    px: 3,
                    py: 1,
                    fontSize: { xs: "14px", sm: "15px" },
                    fontWeight: 600,
                    "&:hover": {
                      transform: "scale(1.05)",
                      borderColor: theme.palette.primary.light,
                      bgcolor: `${theme.palette.primary.main}20`,
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
            maxWidth: "900px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: { xs: 3, md: 2.5 },
            py: 4,
            pt: 6,
            px: { xs: 6, md: 0 },
          }}
        >
          {Object.entries(skillsData).map(([key, category], categoryIndex) => (
            <Card
              key={key}
              sx={{
                background: `${theme.palette.background.paper}ee`,
                backdropFilter: "blur(10px)",
                border: `1px solid ${theme.palette.primary.main}25`,
                borderRadius: 2.5,
                p: { xs: 2.5, md: 3 },
                height: "100%",
                display: "flex",
                flexDirection: "column",
                overflow: "visible",
                transform: areSkillsVisible
                  ? "translateY(0)"
                  : "translateY(30px)",
                opacity: areSkillsVisible ? 1 : 0,
                transition: `all 0.6s ease ${categoryIndex * 0.15 + 0.3}s`,
              }}
            >
              {/* Category Header */}
              <Box sx={{ mb: 2.5, minHeight: "75px" }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 700,
                    fontSize: { xs: "0.9rem", md: "0.95rem" },
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    mb: 0.5,
                  }}
                >
                  {category.title}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: { xs: "0.7rem", md: "0.75rem" },
                    fontStyle: "italic",
                  }}
                >
                  {category.subtitle}
                </Typography>
              </Box>

              {/* Skills Grid */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: { xs: 1.5, md: 2 },
                  justifyItems: "center",
                  alignItems: "start",
                  overflow: "visible",
                }}
              >
                {category.skills.map(({ Icon, name, color }, index) => (
                  <Box
                    key={index}
                    sx={{
                      position: "relative",
                      width: { xs: 55, sm: 65, md: 70 },
                      height: { xs: 55, sm: 65, md: 70 },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: `${theme.palette.background.default}cc`,
                      border: `1px solid ${theme.palette.primary.main}18`,
                      borderRadius: 1.5,
                      cursor: "pointer",
                      transform: areSkillsVisible ? "scale(1)" : "scale(0.8)",
                      opacity: areSkillsVisible ? 1 : 0,
                      transition: `all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${
                        categoryIndex * 0.15 + index * 0.05 + 0.5
                      }s`,
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `radial-gradient(circle at 50% 50%, ${color}12 0%, transparent 70%)`,
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                        borderRadius: 1.5,
                      },
                      "&:hover": {
                        transform: "translateY(-6px) scale(1.05)",
                        borderColor: color,
                        "&::before": {
                          opacity: 1,
                        },
                        "& .skill-name": {
                          opacity: 1,
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: { xs: "30px", sm: "36px", md: "40px" },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <Icon
                        color={color}
                        style={{ width: "1em", height: "1em" }}
                      />
                    </Box>
                    <Box
                      className="skill-name"
                      sx={{
                        position: "absolute",
                        top: -32,
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: `${theme.palette.background.paper}f5`,
                        border: `1px solid ${theme.palette.primary.main}40`,
                        borderRadius: 1,
                        px: 1.2,
                        py: 0.5,
                        whiteSpace: "nowrap",
                        opacity: 0,
                        transition: "all 0.3s ease",
                        zIndex: 100,
                        boxShadow: `0 2px 8px rgba(0,0,0,0.3)`,
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          color: theme.palette.text.primary,
                        }}
                      >
                        {name}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
