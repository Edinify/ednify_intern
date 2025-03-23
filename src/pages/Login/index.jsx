import React from "react";
import "./login.scss";
import AuthLayout from "../../components/AuthLayout";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <AuthLayout>
      <div className="login-container">
        <Logo />
        <h2>Login</h2>
        <InputField type="email" placeholder={"Email"} />
        <InputField type="password" placeholder={"Password"} />
        <div className="forgot-link-wrapper">
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
        <Button text="Login" />
      </div>
    </AuthLayout>
  );
};

export default Login;
