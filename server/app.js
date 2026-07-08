const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(morgan("dev"));

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