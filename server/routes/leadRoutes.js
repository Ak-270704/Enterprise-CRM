const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createLead,
  getLeads,
  getLead,
  updateLead,
  deleteLead,
} = require("../controllers/leadController");

// Create Lead
router.post("/", protect, createLead);

// Get All Leads
router.get("/", protect, getLeads);

// Get Single Lead
router.get("/:id", protect, getLead);

// Update Lead
router.put("/:id", protect, updateLead);

// Delete Lead
router.delete("/:id", protect, deleteLead);

module.exports = router;