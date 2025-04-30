import React from "react";
import "./header.scss";
import { useLocation } from "react-router-dom";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
useLocation;
import { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import Flag from "react-world-flags";
import Popover from "@mui/material/Popover";
import { Box, Typography, Avatar } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import CakeIcon from "@mui/icons-material/Cake";
import LogoutIcon from "@mui/icons-material/Logout";
import PasswordIcon from "@mui/icons-material/Password";
import { useTranslation } from "react-i18next";
import ChangePasswordModal from "../../components/ChangePasswordModal";
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
const notifications = [
  {
    type: "classFinished",
    name: "Agababa Bagirov",
    description: "Finished student class.",
    notificationDate: "10.02.2023",
    isNew: true,
  },
  {
    type: "birthday",
    name: "Xayyam Mammadov",
    description: "Student birthday.",
    birthDate: "27 nov",
    notificationDate: "13.02.2023",
    isNew: true,
  },
  {
    type: "classFinished",
    name: "Cavad Sayadov",
    description: "Finished student class.",
    notificationDate: "22.01.2023",
    isNew: false,
  },
  {
    type: "birthday",
    name: "Nargiz Aliyeva",
    description: "Student birthday.",
    birthDate: "27 nov",
    notificationDate: "27.11.2023",
    isNew: false,
  },
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
  const [anchorEl, setAnchorEl] = useState(null);

  const handleBellClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const [anchorElPerson, setAnchorElPerson] = useState(null);

  const handlePersonClick = (event) => {
    setAnchorElPerson(event.currentTarget);
  };

  const handleClosePerson = () => {
    setAnchorElPerson(null);
  };

  const openPerson = Boolean(anchorElPerson);
  const [openPassword, setOpenPassword] = useState(false);
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
        <NotificationsNoneIcon
          onClick={handleBellClick}
          style={{
            cursor: "pointer",
            color: open ? "#6c63ff" : "inherit",
            backgroundColor: open ? "#eeeaff" : "inherit",
            borderRadius: "50%",
            padding: "1px",
          }}
        />
        <PersonOutlineIcon
          onClick={handlePersonClick}
          style={{
            cursor: "pointer",
            color: openPerson ? "#6c63ff" : "inherit",
            backgroundColor: openPerson ? "#eeeaff" : "inherit",
            borderRadius: "50%",
            padding: "1px",
          }}
        />
      </div>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{ sx: { width: 320, borderRadius: 2, p: 2 } }}
      >
        <Typography fontWeight="bold" fontSize="14px" mb={1}>
          {t("New")}
        </Typography>
        {notifications
          .filter((n) => n.isNew)
          .map((item, idx) => (
            <Box key={idx} display="flex" alignItems="center" mb={1}>
              <Avatar
                sx={{
                  bgcolor: item.type === "birthday" ? "#6c63ff" : "#f44336",
                  width: 32,
                  height: 32,
                  mr: 1,
                }}
              >
                {item.type === "birthday" ? (
                  <CakeIcon fontSize="small" />
                ) : (
                  <SchoolIcon fontSize="small" />
                )}
              </Avatar>
              <Box flex={1}>
                <Typography variant="body2" fontWeight="medium">
                  {item.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {item.description}{" "}
                  {item.type === "birthday" && `• ${item.birthDate}`}
                </Typography>
              </Box>
              <Typography
                variant="caption"
                color="text.secondary"
                whiteSpace="nowrap"
              >
                {item.notificationDate}
              </Typography>
            </Box>
          ))}
        <Typography fontWeight="bold" fontSize="14px" mb={1}>
          {t("Previous ones")}
        </Typography>
        {notifications
          .filter((n) => n.isNew)
          .map((item, idx) => (
            <Box key={idx} display="flex" alignItems="center" mb={1}>
              <Avatar
                sx={{
                  bgcolor: item.type === "birthday" ? "#6c63ff" : "#f44336",
                  width: 32,
                  height: 32,
                  mr: 1,
                }}
              >
                {item.type === "birthday" ? (
                  <CakeIcon fontSize="small" />
                ) : (
                  <SchoolIcon fontSize="small" />
                )}
              </Avatar>
              <Box flex={1}>
                <Typography variant="body2" fontWeight="medium">
                  {item.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {item.description}{" "}
                  {item.type === "birthday" && `• ${item.birthDate}`}
                </Typography>
              </Box>
              <Typography
                variant="caption"
                color="text.secondary"
                whiteSpace="nowrap"
              >
                {item.notificationDate}
              </Typography>
            </Box>
          ))}
      </Popover>
      <Popover
        open={openPerson}
        anchorEl={anchorElPerson}
        onClose={handleClosePerson}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          sx: {
            width: 200,
            borderRadius: 2,
            p: 1,
          },
        }}
      >
        <Box display="flex" flexDirection="column" gap={1}>
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            px={0.5}
            py={0.5}
            sx={{
              cursor: "pointer",
            }}
          >
            <PersonOutlineIcon fontSize="small" />
            <Typography fontSize="14px">{t("Profile picture")}</Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            px={0.5}
            py={0.5}
            sx={{
              cursor: "pointer",
            }}
            onClick={() => setOpenPassword(true)}
          >
            <PasswordIcon fontSize="small" />
            <Typography fontSize="14px">{t("Change password")}</Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            px={0.5}
            py={0.5}
            sx={{
              cursor: "pointer",
              color: "#f44336",
            }}
          >
            <LogoutIcon fontSize="small" />
            <Typography fontSize="14px">{t("Logout")}</Typography>
          </Box>
        </Box>
      </Popover>
      <ChangePasswordModal
        open={openPassword}
        onClose={() => setOpenPassword(false)}
      />
    </div>
  );
};

export default Header;
