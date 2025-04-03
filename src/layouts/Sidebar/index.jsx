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
import "./sidebar.scss";

const menuItems = [
  { text: "Dashboard", path: "/" },
  { text: "Main Panel", path: "/mainpanel" },
  { text: "Classes", path: "/classes" },
  { text: "Teachers", path: "/teachers" },
  { text: "Students", path: "/students" },
  { text: "Table", path: "/table" },
  { text: "Salary", path: "/salary" },
  { text: "Finance", path: "/finance" },
  { text: "Stimulation", path: "/stimulation" },
  { text: "Feedbacks", path: "/feedbacks" },
];

export default function Sidebar() {
  const location = useLocation();
  const DrawerList = (
    <Box sx={{ width: 200 }} role="presentation">
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              className={location.pathname === item.path ? "active" : ""}
            >
              <ListItemIcon>
                <DashboardIcon className="custom-icon" />
              </ListItemIcon>
              <ListItemText primary={item.text} />
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
            src="https://st3.depositphotos.com/12243166/15921/v/450/depositphotos_159213824-stock-illustration-mountain-icon-vector.jpg"
            alt=""
            width={"70px"}
          />
          <p>Lorem, ipsum.</p>
          <p>Lorem@gmail.com</p>
        </div>
        {DrawerList}
      </Drawer>
    </div>
  );
}
