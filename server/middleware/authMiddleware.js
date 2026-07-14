const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {

  try {

    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {

      token = req.headers.authorization.split(" ")[1];

    }

    if (!token) {

      return res.status(401).json({
        success: false,
        message: "Token Missing",
      });

    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );
    console.log("Decoded Token:", decoded);
    const user = await User.findById(decoded.id).select("-password");
    console.log("User:", user);
    if (!user) {

      return res.status(401).json({
        success: false,
        message: "User not found",
      });

    }

    req.user = user;

    next();

  } catch (error) {

    console.log("JWT Error:", error);

    return res.status(401).json({
      success: false,
      message: "Unauthorized access",
      error: error.message,
    });

  }

};

module.exports = protect;