const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const admin = require("../middleware/adminMiddleware");

const {

  getDashboardStats,

  getAllUsers,

  updateUserRole,

  deleteUser,

} = require("../controllers/adminController");

// ==============================
// Dashboard Statistics
// ==============================

router.get(
  "/dashboard",
  protect,
  admin,
  getDashboardStats
);

// ==============================
// Get All Users
// ==============================

router.get(
  "/users",
  protect,
  admin,
  getAllUsers
);

// ==============================
// Update User Role
// ==============================

router.put(
  "/users/:id/role",
  protect,
  admin,
  updateUserRole
);

// ==============================
// Delete User
// ==============================

router.delete(
  "/users/:id",
  protect,
  admin,
  deleteUser
);

module.exports = router;