const Campaign = require("../models/Campaign");

exports.createCampaign = async (req, res) => {
  try {
    const { title, description, fundingGoal } = req.body;
    const campaign = new Campaign({ title, description, fundingGoal, createdBy: req.user.id });

    await campaign.save();
    res.json(campaign);
  } catch (err) {
    res.status(500).send("❌ Server Error");
  }
};

exports.getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find().populate("createdBy", "name");
    res.json(campaigns);
  } catch (err) {
    res.status(500).send("❌ Server Error");
  }
};
