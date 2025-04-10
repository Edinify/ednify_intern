import React from "react";
import "./button.scss";
const Button = ({ text, onClick, bgColor="#462aff", color="#ffffff" }) => {

  return (
    <>
      <button className="login-btn" onClick={onClick} style={{backgroundColor:bgColor, color: color}}>{text}</button>
    </>
  );
};

export default Button;
