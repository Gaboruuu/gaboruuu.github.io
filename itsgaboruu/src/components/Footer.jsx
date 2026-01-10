import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Box
      component="footer"
      sx={{
        mt: 16,
        py: 4,
        border: `1px solid ${
          theme.palette.divider || "rgba(255, 255, 255, 0.12)"
        }`,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 2, sm: 0 },
      }}
    >
      {/* Name + copyright */}
      <Box sx={{ textAlign: { xs: "center", sm: "left" }, mb: 2 }}>
        <Typography
          variant="h4"
          color={theme.palette.text.primary}
          sx={{ px: 2 }}
        >
          Gaboruu
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          sx={{ px: 2 }}
        >
          © {new Date().getFullYear()} | {t("footer.rights")}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          px: 2,
        }}
      >
        {/* Navigation Links */}
        <Box
          sx={{
            textAlign: { xs: "center", sm: "left" },
            display: "block",
            mx: 4,
          }}
        >
          <Typography variant="body1" color="textPrimary" sx={{ mb: 2 }}>
            {t("footer.navigation")}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              mb: 1,
              cursor: "pointer",
              "&:hover": { color: theme.palette.text.primary },
            }}
            onClick={() => {
              window.location.href = "/";
            }}
          >
            {t("nav.home")}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              mb: 1,
              cursor: "pointer",
              "&:hover": { color: theme.palette.text.primary },
            }}
            onClick={() => {
              window.location.href = "/projects";
            }}
          >
            {t("nav.projects")}
          </Typography>
        </Box>

        {/* Contact Information */}
        <Box
          sx={{
            textAlign: { xs: "center", sm: "left" },
            display: "block",
            mx: 4,
          }}
        >
          <Typography variant="body1" color="textPrimary" sx={{ mb: 2 }}>
            {t("footer.contact")}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              cursor: "pointer",
              mb: 1,
              "&:hover": { color: theme.palette.text.primary },
            }}
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/gabriel-gabor-123456789/",
                "_blank"
              );
            }}
          >
            Linkedin
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              cursor: "pointer",
              mb: 1,
              "&:hover": { color: theme.palette.text.primary },
            }}
            onClick={() => {
              window.open("https://github.com/gaboruuu", "_blank");
            }}
          >
            GitHub
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              cursor: "pointer",
              mb: 1,
              "&:hover": { color: theme.palette.text.primary },
            }}
            onClick={() => {
              window.location.href = "mailto:gabriel.gabor2016@gmail.com";
            }}
          >
            {t("footer.email")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
