import React from "react";
import AuthLayout from "../../components/AuthLayout";
import Logo from "../../components/Logo";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

const ForgotPassword = () => {
  return (
    <AuthLayout>
      <div className="login-container">
        <Logo />
        <h2>Forgot password</h2>
        <InputField type="email" placeholder={"Email"} />
        <Button text="Reset Password" />
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
