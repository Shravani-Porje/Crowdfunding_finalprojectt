import React from "react";
import "../styles/styles.css";
import campaign1 from "../assets/campaign1.jpg";
import campaign2 from "../assets/campaign2.avif";

const Campaigns = () => {
  return (
    <div className="container">
      <h1>Explore Campaigns</h1>
      <p>Discover trending and new campaigns.</p>
      
      <div className="campaign-grid">
        <div className="card">
          <img src={campaign1} alt="Campaign 1" className="campaign-image"/>
          <h2>Innovative Smart Watch</h2>
          <p>Revolutionizing the wearable tech industry.</p>
          <button className="button">View Details</button>
        </div>

        <div className="card">
          <img src={campaign2} alt="Campaign 2" className="campaign-image"/>
          <h2>Eco-friendly Travel Gear</h2>
          <p>Sustainable backpacks for adventurers.</p>
          <button className="button">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
