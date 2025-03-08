import React from "react";
import { Link } from "react-router-dom";  // ✅ Import Link for navigation
import "../styles/styles.css";
import heroImage from "../assets/hero.webp"; // Ensure this image exists

const Home = () => {
  return (
    <>
      <div className="hero-container">
        <img src={heroImage} alt="Crowdfunding Hero" className="hero-image" />
        <div className="hero-content">
          <h1>Empower Ideas, Fund Dreams</h1>
          <p>Join our community and bring ideas to life.</p>
          
          {/* ✅ Navigate to Campaigns Page */}
          <Link to="/campaigns">
            <button className="button">Explore Campaigns</button>
          </Link>

          {/* ✅ Navigate to Payment Page (Donate) */}
          <Link to="/payment">
            <button className="button donate-button">Donate</button>
          </Link>
        </div>
      </div>

      <div className="content">
        <h1 className="h1-style">Why choose us?</h1>
        <div className="div-style">
          <h4> ✅ Secure & Trusted – We ensure safe and transparent transactions.</h4>
          <h4> ✅ Diverse Causes – Support startups, medical needs, education, and more.</h4>
          <h4> ✅ Global Reach – Fund or get funded from anywhere in the world.</h4>
          <h4> ✅ Quick & Easy – Start a campaign or donate in just a few clicks.</h4>
        </div>
      </div>

      <hr className="styled-hr" />
      <h1 className="h1-style">🚀 How It Works?</h1>
      <div className="div-style">
        <h4>1️⃣ Create a Campaign – Share your story and fundraising goal.</h4>
        <h4>2️⃣ Reach Supporters – Spread the word through social media.</h4>
        <h4>3️⃣ Receive Contributions – Secure funding directly to your cause.</h4>
      </div>

      <div>
        <h1 className="h1-style1">🎉 Ready to Make an Impact?</h1>
        
        {/* ✅ Navigate to Start Campaign Page */}
        <Link to="/create">
          <button className="button2">Start Campaign</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
