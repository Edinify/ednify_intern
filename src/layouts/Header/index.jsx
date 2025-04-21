import React from "react";
import "./header.scss";
import { useLocation } from "react-router-dom";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
useLocation;
import { useState } from "react";
import { Select, MenuItem, Box, Typography } from "@mui/material";
import Flag from "react-world-flags";
import { useTranslation } from "react-i18next";
import "./../../i18n.js";
const routeNames = {
  "/": "Dashboard",
  "/mainpanel": "Main Panel",
  "/classes": "Classes",
  "/teachers": "Teachers",
  "/students": "Students",
  "/table": "Table",
  "/salary": "Salary",
  "/finance": "Finance",
  "/stimulation": "Stimulation",
  "/feedbacks": "Feedbacks",
};
const languages = [
  { code: "en", label: "EN", flag: "us" },
  { code: "az", label: "AZ", flag: "az" },
  { code: "ru", label: "RU", flag: "ru" },
];

const Header = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  const handleChange = (event) => {
    const selectedLang = event.target.value;
    setLanguage(selectedLang);
    i18n.changeLanguage(selectedLang);
  };

  const renderValue = (selected) => {
    const lang = languages.find((l) => l.code === selected);
    return (
      <Box display="flex" alignItems="center" gap={1}>
        <Flag
          code={lang.flag.toUpperCase()}
          style={{ width: 24, height: 16 }}
        />
        <Typography variant="body2">{lang.label}</Typography>
      </Box>
    );
  };

  const location = useLocation();
  const pageTitle = t(routeNames[location.pathname]);

  return (
    <div className="header-container">
      <p className="page-title">{pageTitle}</p>
      <div className="header-icons">
        <Select
          value={language}
          onChange={handleChange}
          variant="standard"
          disableUnderline
          renderValue={renderValue}
          sx={{
            "& .MuiSelect-select": {
              display: "flex",
              alignItems: "center",
            },
          }}
        >
          {languages.map((lang) => (
            <MenuItem key={lang.code} value={lang.code}>
              <Box display="flex" alignItems="center" gap={1}>
                <span style={{ fontSize: "1.2rem" }}>{lang.flag}</span>
                {lang.label}
              </Box>
            </MenuItem>
          ))}
        </Select>
        <HelpOutlineIcon />
        <NotificationsNoneIcon />
        <PersonOutlineIcon />
      </div>
    </div>
  );
};

export default Header;
