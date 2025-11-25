import { keyframes } from "@emotion/react";
import placeholderImg from "../assets/images/placeholder.png";

const projectsData = [
  {
    id: 1,
    link: "/projects/portfolio-website",
    title: "Portfolio Website",
    descriptionShort:
      "A personal portfolio website to showcase my projects and skills.",
    descriptionLong:
      "This portfolio website is built using React and Material-UI. It features a dark theme, responsive design, and smooth animations to provide an engaging user experience. The site includes sections for my projects, skills, and contact information.",
    technologies: ["React", "Material-UI", "JavaScript", "CSS"],
    thumbnail: placeholderImg,
    keyFeatures: [
      "Responsive design for all devices",
      "Dark and light theme toggle",
    ],
    images: [placeholderImg, placeholderImg, placeholderImg, placeholderImg],
    githubUrl: "https://github.com/Gaboruuu/Project-Vault-Redesign",
    liveUrl: "",
    featured: true,
    category: "web",
  },
  {
    id: 2,
    link: "/projects/hourglass",
    title: "Hourglass",
    descriptionShort:
      "An advanced time-tracking application designed for gatcha games events.",
    descriptionLong: "",
    technologies: ["React Native", "JavaScript"],
    thumbnail: placeholderImg,
    images: ["/images/portfolio1.png", "/images/portfolio2.png"],
    githubUrl: "https://github.com/Gaboruuu/Hourglass",
    liveUrl: "",
    featured: true,
    category: "mobile",
    keyFeatures: [],
  },
  {
    id: 3,
    link: "/projects/battle-ship",
    title: "Battle Ship",
    descriptionShort: "A classic Battleship game implemented in Python.",
    descriptionLong: "",
    technologies: ["Python", "Pygame"],
    thumbnail: placeholderImg,
    images: ["/images/portfolio1.png", "/images/portfolio2.png"],
    githubUrl: "https://github.com/Gaboruuu/Battle-Ship",
    liveUrl: "",
    featured: false,
    category: "python",
    keyFeatures: [],
  },
  {
    id: 4,
    link: "/projects/local-movie-qt",
    title: "Local Movie QT",
    descriptionShort:
      "An C++/Qt application for managing a local movie collection.",
    descriptionLong: "",
    technologies: ["C++", "Qt"],
    thumbnail: placeholderImg,
    images: ["/images/portfolio1.png", "/images/portfolio2.png"],
    githubUrl: "https://github.com/Gaboruuu/LocalMovieQT",
    liveUrl: "",
    featured: true,
    category: "QT",
    keyFeatures: [],
  },
];

export default projectsData;
