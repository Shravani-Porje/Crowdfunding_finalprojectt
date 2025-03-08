import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Crowdfunding</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/campaigns">Campaigns</Link>
        <Link to="/create">Start a Campaign</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
