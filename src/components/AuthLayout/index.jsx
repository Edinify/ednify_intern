import React from "react";
import "./authLayout.scss";
import Dashboard1 from "../../assets/images/Dashboard 1.png";

const AuthLayout = ({ children }) => {
  return (
    <main className="auth-layout">
      <div className="auth-container ">
        <div className="row">
          <div className="left-side  col-md-12 col-sm-12 col-lg-6">
            <h2 className="login-title">
              The simplest way to manage your educational center...
            </h2>
            <div className="img-wrapper">
              <img src={Dashboard1} alt="Dashboard Preview" />
            </div>
          </div>

          {/* Right Side - Dynamic Content (Login/Forgot Password) */}
          <div className="right-side col-md-12 col-sm-12 col-lg-6">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
