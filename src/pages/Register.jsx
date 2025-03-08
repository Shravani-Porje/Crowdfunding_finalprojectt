import React from "react";
import "../styles/styles.css";

const Register = () => {
  return (
    <div className="container">
      <div className="card">
        <h1>Register</h1>
        <p>Create an account to start funding campaigns.</p>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="button">Sign Up</button>
      </div>
    </div>
  );
};

export default Register;
