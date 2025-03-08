const express = require("express");
const { register, login } = require("../controllers/authController"); // ✅ Ensure this path is correct!

const router = express.Router();

router.post("/register", register); // ✅ Function should exist in authController.js
router.post("/login", login);

module.exports = router;
