import React from "react";
import "./inputField.scss";

const InputField = ({ type, placeholder }) => {
  return (
    <>
      <input type={type} placeholder={placeholder} className="inputField" />
    </>
  );
};

export default InputField;
