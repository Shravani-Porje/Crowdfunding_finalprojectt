import React from "react";
import "../styles/styles.css";

const Login = () => {
  return (
    <div className="container">
      <h1>Login</h1>
      <p>Access your account to back or create campaigns.</p>

      <div className="form-container">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" />

        <button className="primary-button">Login</button>

      </div>
    </div>
  );
};

export default Login;
