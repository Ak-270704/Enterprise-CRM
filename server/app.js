const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const dashboardRoutes = require("./routes/dashboardRoutes");
const authRoutes = require("./routes/authRoutes");
const leadRoutes = require("./routes/leadRoutes");
const customerRoutes = require("./routes/customerRoutes");
const dealRoutes = require("./routes/dealRoutes");
const activityRoutes = require("./routes/activityRoutes");
const adminRoutes = require("./routes/adminRoutes");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(morgan("dev"));
app.use("/api/leads", leadRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/deals", dealRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/admin", adminRoutes);
// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Enterprise CRM API Running Successfully"
  });
});

// Authentication Routes
app.use("/api/auth", authRoutes);

module.exports = app;