const express = require("express");
const router = express.Router();

const {
  createDeal,
  getDeals,
  getDeal,
  updateDeal,
  deleteDeal,
} = require("../controllers/dealController");

// Create Deal
router.post("/", createDeal);

// Get All Deals
router.get("/", getDeals);

// Get Single Deal
router.get("/:id", getDeal);

// Update Deal
router.put("/:id", updateDeal);

// Delete Deal
router.delete("/:id", deleteDeal);

module.exports = router;