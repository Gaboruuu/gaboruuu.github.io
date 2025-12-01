import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useRef } from "react";
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
  // Programming Languages
  { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { Icon: SiPython, name: "Python", color: "#3776AB" },
  { Icon: FaJava, name: "Java", color: "#007396" },
  { Icon: TbBrandCSharp, name: "C#", color: "#239120" },
  { Icon: SiCplusplus, name: "C++", color: "#00599C" },
  { Icon: SiC, name: "C lang", color: "#A8B9CC" },

  // Frontend
  { Icon: SiReact, name: "React", color: "#61DAFB" },
  { Icon: SiHtml5, name: "HTML5", color: "#E34F26" },
  { Icon: SiCss3, name: "CSS3", color: "#1572B6" },

  // Backend & Frameworks
  { Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { Icon: SiDotnet, name: ".NET", color: "#512BD4" },
  { Icon: SiReact, name: "React Native", color: "#61DAFB" },
  { Icon: SiQt, name: "Qt", color: "#41CD52" },

  // Databases
  { Icon: SiMysql, name: "MySQL", color: "#4479A1" },
  { Icon: TbSql, name: "SQL", color: "#CC2927" },
];

export default function Home() {
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
          height: "95vh",
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
                border: `2px solid white`,
              }}
            ></Avatar>
            <Box sx={{ textAlign: "left" }}>
              <Typography variant="h5" sx={{ color: "#fff" }}>
                Gabor Gabriel
              </Typography>
              <Typography variant="body2" sx={{ color: "#fff" }}>
                <span className="fi fi-ro"></span> Based in Romania
              </Typography>
            </Box>
          </Box>
          <Box sx={{ px: 2, mt: 2 }}>
            <Typography
              variant="h2"
              sx={{
                color: "#fff",
                textTransform: "uppercase",
                fontFamily: "Arial Black",
                fontSize: { xs: "40px", sm: "3.5rem", md: "72px" },
              }}
            >
              Software developer
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
                Student
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
                color: "#fff",
                borderColor: "#fff",
                borderRadius: 3,
                px: 3,
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: `0 0 20px ${theme.palette.primary.main}`,
                },
                transition: "all 0.3s ease",
              }}
            >
              Contact Me
            </Button>

            <Button
              variant="text"
              sx={{
                color: "#fff",
                "&:hover": {
                  color: theme.palette.text.disabled,
                },
                transition: "all 0.3s ease",
              }}
            >
              <Download sx={{ mr: 1 }} />
              Download CV
            </Button>
          </Box>
        </Box>
      </Box>
      {/* Projects Section */}
      <Box ref={projectsRef} sx={{ margin: "0 auto", py: 8, px: 2 }}>
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
          Featured Projects
        </AnimatedGradientText>
        <Typography
          variant="body1"
          color={theme.palette.text.secondary}
          sx={{
            textAlign: "center",
            mb: 4,
            transform: areProjectsVisible
              ? "translateY(0)"
              : "translateY(20px)",
            opacity: areProjectsVisible ? 1 : 0,
            transition: "all 1s ease",
          }}
        >
          A selection of my recent work showcasing my skills and experience.
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
      <Box ref={skillsRef} sx={{ py: 8, px: 4 }}>
        <AnimatedGradientText
          variant="h3"
          colors={{ start: "#8800ffff", middle: "#7461b3ff", end: "#8800ffff" }}
          sx={{
            textAlign: "center",
            transform: areSkillsVisible ? "translateY(0)" : "translateY(20px)",
            opacity: areSkillsVisible ? 1 : 0,
            transition: "all 1s ease",
            mb: 10,
            fontSize: { xs: "2.5rem", sm: "2.5rem", md: "3rem" },
          }}
        >
          My Skills & Technologies
        </AnimatedGradientText>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            flexWrap: "wrap",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {skillsData.map(({ Icon, name, color }, index) => (
            <Card
              variant="outlined"
              key={index}
              sx={{
                width: { xs: 100, sm: 120, md: 140 },
                height: { xs: 120, sm: 140, md: 160 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "rgba(0, 0, 0, 0.5)",
                transform: areSkillsVisible
                  ? "translateY(0)"
                  : "translateY(20px)",
                opacity: areSkillsVisible ? 1 : 0,
                transition: `all 0.5s ease ${index * 0.1}s`,
                "@media (max-width: 600px)": {
                  transition: `all 0.1s ease ${index * 0.1}s`,
                },
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <Box sx={{ fontSize: { xs: "40px", sm: "50px", md: "64px" } }}>
                  <Icon color={color} style={{ width: "1em", height: "1em" }} />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem" },
                  }}
                >
                  {name}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
