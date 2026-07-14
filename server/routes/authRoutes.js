const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser,
  getProfile,
  getUsers
} = require("../controllers/authController");

const protect = require("../middleware/authMiddleware");

const {
  registerValidation,
  loginValidation
} = require("../validations/authValidation");

// Register
router.post("/register", registerValidation, registerUser);

// Login
router.post("/login", loginValidation, loginUser);

// Profile
router.get("/profile", protect, getProfile);

// Get All Users
router.get("/users", protect, getUsers);

module.exports = router;