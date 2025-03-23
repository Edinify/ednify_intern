import React from "react";
import "./button.scss";
const Button = ({ text }) => {
  return (
    <>
      <button className="login-btn">{text}</button>
    </>
  );
};

export default Button;
