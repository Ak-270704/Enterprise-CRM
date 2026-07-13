const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createDeal,
  getDeals,
  getDeal,
  updateDeal,
  deleteDeal,
} = require("../controllers/dealController");

// Create Deal
router.post("/", protect, createDeal);

// Get All Deals
router.get("/", protect, getDeals);

// Get Single Deal
router.get("/:id", protect, getDeal);

// Update Deal
router.put("/:id", protect, updateDeal);

// Delete Deal
router.delete("/:id", protect, deleteDeal);

module.exports = router;