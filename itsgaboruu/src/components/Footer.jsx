import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "../theme";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 16,
        py: 4,
        border: `1px solid rgba(48, 48, 48, 0.8)`,
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
          © {new Date().getFullYear()} | All rights reserved.
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
            Navigation
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
            Home
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
            Projects
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
            Contact
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              cursor: "pointer",
              mb: 1,
              "&:hover": { color: theme.palette.text.primary },
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
          >
            Email
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
