import React from "react";
import "./header.scss";
import { useLocation } from "react-router-dom";
useLocation;
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
const Header = () => {
  const location = useLocation();
  const pageTitle = routeNames[location.pathname];
  return (
    <div className="header">
      <p>{pageTitle}</p>
      <div className="header-icons">
        <p>EN</p>
        <p>icon</p>
        <p>icon</p>
        <p>icon</p>
      </div>
    </div>
  );
};

export default Header;
