const express = require("express");
const router = express.Router();

const {
  createActivity,
  getActivities,
  getActivity,
  updateActivity,
  deleteActivity,
} = require("../controllers/activityController");

// Create Activity
router.post("/", createActivity);

// Get All Activities
router.get("/", getActivities);

// Get Single Activity
router.get("/:id", getActivity);

// Update Activity
router.put("/:id", updateActivity);

// Delete Activity
router.delete("/:id", deleteActivity);

module.exports = router;