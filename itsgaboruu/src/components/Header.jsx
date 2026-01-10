import {
  AppBar,
  Toolbar,
  Box,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useTranslation } from "react-i18next";

const Header = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width:600px)");
  const pages = [
    { name: t("nav.home"), path: "/", icon: <HomeIcon /> },
    { name: t("nav.projects"), path: "/projects", icon: <WorkIcon /> },
    {
      name: t("nav.contact"),
      path: "mailto:gabriel.gabor2016@gmail.com",
      isExternal: true,
      icon: <EmailIcon />,
    },
  ];

  return (
    <AppBar
      position="fixed"
      variant="outlined"
      elevation={0}
      sx={{
        backgroundColor:
          theme.palette.mode === "dark"
            ? "rgba(0, 0, 0, 0.9)"
            : "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(10px)",
        display: "flex",
        justifyContent: "center",
        boxShadow: "none",
        borderBottom: `1px solid ${theme.palette.divider}`,
        maxWidth: { xs: 280, sm: 450, md: 450, lg: 450 },
        maxHeight: "40px",
        alignItems: "center",
        left: 0,
        right: 0,
        top: 20,
        margin: "0 auto",
        borderRadius: 3,
        border: `1px solid ${
          theme.palette.mode === "dark" ? "grey" : theme.palette.divider
        }`,
        "&:hover": {
          transform: "scale(1.1)",
          boxShadow: `0 1px 10px ${theme.palette.primary.main}`,
        },
        transition: "all 0.3s ease",
      }}
    >
      <Toolbar
        sx={{ justifyContent: "center", minHeight: "40px !important", py: 0 }}
      >
        <Box
          sx={{ display: "flex", gap: { xs: 0, sm: 1 }, alignItems: "center" }}
        >
          {pages.map((page) => (
            <Button
              key={page.name}
              component={page.isExternal ? "a" : Link}
              to={page.isExternal ? undefined : page.path}
              href={page.isExternal ? page.path : undefined}
              sx={{
                color: theme.palette.text.primary,
                fontSize: "1rem",
                textTransform: "none",
                backgroundColor: "transparent",
                "&:hover": {
                  color: theme.palette.primary.main,
                },
                transition: "all 0.3s ease",
              }}
              onClick={() =>
                !page.isExternal &&
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            >
              {isMobile ? page.icon : page.name}
            </Button>
          ))}
          <Box
            sx={{
              borderLeft: `1px solid ${theme.palette.divider}`,
              height: 24,
              mx: 1,
            }}
          />
          <ThemeToggle />
          <LanguageToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
