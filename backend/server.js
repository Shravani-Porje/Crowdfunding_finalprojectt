const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const app = express(); // ✅ Initialize 'app' first!

connectDB(); // ✅ Connect to MongoDB

// Middleware
app.use(cors());
app.use(express.json()); // ✅ Now it's saafe to use app.use()

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/campaigns", require("./routes/campaignRoutes"));
app.use("/api/payments", require("./routes/paymentRoutes"));

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to the Crowdfunding API!!!!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
