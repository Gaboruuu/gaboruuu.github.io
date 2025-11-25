import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import theme from "../theme";

const Header = () => {
  const pages = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <AppBar
      position="fixed"
      variant="outlined"
      elevation={0}
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        display: "flex",
        justifyContent: "center",
        boxShadow: "none",
        borderBottom: `1px solid ${theme.palette.divider}`,
        maxWidth: "320px",
        maxHeight: "40px",
        alignItems: "center",
        left: 0,
        right: 0,
        top: 20,
        margin: "0 auto",
        borderRadius: 3,
        border: `1px solid grey`,
        "&:hover": {
          transform: "scale(1.1)",
          boxShadow: `0 1px 10px ${theme.palette.primary.main}`,
        },
        transition: "all 0.3s ease",
      }}
    >
      <Toolbar sx={{ justifyContent: "center" }}>
        <Box sx={{ display: "flex", gap: 3 }}>
          {pages.map((page) => (
            <Button
              key={page.name}
              component={Link}
              to={page.path}
              sx={{
                color: "#fff",
                fontSize: "1rem",
                textTransform: "none",
                backgroundColor: "transparent",
                "&:hover": {
                  color: theme.palette.primary.main,
                },
                transition: "all 0.3s ease",
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {page.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
