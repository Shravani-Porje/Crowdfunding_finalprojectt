import React from "react";
import "../styles/styles.css";

const CreateCampaign = () => {
  return (
    <div className="container">
      <h1>Start a New Campaign</h1>
      <p>Share your idea with the world.</p>

      <div className="form-container">
        <label>Campaign Title</label>
        <input type="text" placeholder="Enter campaign title" />

        <label>Description</label>
        <textarea placeholder="Describe your campaign"></textarea>

        <label>Funding Goal (USD)</label>
        <input type="number" placeholder="Enter funding amount" />

        <button className="primary-button">Submit Campaign</button>

      </div>
    </div>
  );
};

export default CreateCampaign;
