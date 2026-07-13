const express = require("express");
const router = express.Router();

const {
  createCustomer,
  getCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customerController");

const protect = require("../middleware/authMiddleware");

// Protect all customer routes
router.use(protect);

// Create Customer
router.post("/", createCustomer);

// Get All Customers
router.get("/", getCustomers);

// Get Single Customer
router.get("/:id", getCustomer);

// Update Customer
router.put("/:id", updateCustomer);

// Delete Customer
router.delete("/:id", deleteCustomer);

module.exports = router;