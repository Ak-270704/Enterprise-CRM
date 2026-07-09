const express = require("express");
const router = express.Router();

const {
  createCustomer,
  getCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customerController");

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