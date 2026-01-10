import React from "react";
import { IconButton, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import "flag-icons/css/flag-icons.min.css";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ro" : "en";
    i18n.changeLanguage(newLang);
  };

  const currentFlag = i18n.language === "en" ? "fi-gb" : "fi-ro";
  const nextLang = i18n.language === "en" ? "Română" : "English";

  return (
    <IconButton
      onClick={toggleLanguage}
      color="inherit"
      title={`Switch to ${nextLang}`}
      sx={{
        padding: "8px",
      }}
    >
      <Box
        component="span"
        className={`fi ${currentFlag}`}
        sx={{
          fontSize: "1.3rem",
          display: "flex",
          alignItems: "center",
          borderRadius: "5px",
        }}
      />
    </IconButton>
  );
};

export default LanguageToggle;
