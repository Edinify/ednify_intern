import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SchoolIcon from "@mui/icons-material/School";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import TableChartIcon from "@mui/icons-material/TableChart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import FeedbackIcon from "@mui/icons-material/Feedback";
import "./sidebar.scss";
import { useTranslation } from "react-i18next";
import "./../../i18n.js";
const menuItems = [
  { text: "Dashboard", path: "/", icon: <DashboardIcon /> },
  { text: "Main Panel", path: "/mainpanel", icon: <LibraryBooksIcon /> },
  { text: "Classes", path: "/classes", icon: <SchoolIcon /> },
  { text: "Teachers", path: "/teachers", icon: <PeopleIcon /> },
  { text: "Students", path: "/students", icon: <PersonIcon /> },
  { text: "Table", path: "/table", icon: <TableChartIcon /> },
  { text: "Salary", path: "/salary", icon: <MonetizationOnIcon /> },
  { text: "Finance", path: "/finance", icon: <AccountBalanceIcon /> },
  { text: "Stimulation", path: "/stimulation", icon: <EmojiObjectsIcon /> },
  { text: "Feedbacks", path: "/feedbacks", icon: <FeedbackIcon /> },
];

export default function Sidebar() {
  const { t } = useTranslation();
  const location = useLocation();
  const DrawerList = (
    <Box sx={{ width: 210 }} role="presentation">
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={item.text} disablePadding className="list-item">
            <ListItemButton
              component={Link}
              to={item.path}
              className={location.pathname === item.path ? "active" : ""}
            >
              <ListItemIcon>
                {React.cloneElement(item.icon, { className: "custom-icon" })}
              </ListItemIcon>
              <ListItemText
                primary={t(item.text)}
                primaryTypographyProps={{
                  fontWeight: 700,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="mui-drawer">
      <Drawer open={true} variant="permanent">
        <div className="logo">LOGO</div>
        <div className="personal-info">
          <img
            src="https://i.pinimg.com/736x/f3/51/c7/f351c7d0a2e54acf12eba031d49bf783.jpg"
            alt=""
            height={"70px"}
            style={{ borderRadius: "8px" }}
          />
          <p className="profile-name">Nargiz Aliyeva</p>
          <p className="profile-email">nargiz@gmail.com</p>
        </div>
        {DrawerList}
      </Drawer>
    </div>
  );
}
