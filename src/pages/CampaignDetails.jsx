import React from "react";
import { useParams } from "react-router-dom";
import "../styles/styles.css";

const CampaignDetails = () => {
  const { id } = useParams();
  return (
    <div className="container">
      <h1>Campaign Details</h1>
      <p>Details for campaign ID: {id}</p>
    </div>
  );
};

export default CampaignDetails;
