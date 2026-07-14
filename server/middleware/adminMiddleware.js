const admin = (req, res, next) => {

  if (!req.user) {

    return res.status(401).json({

      success: false,

      message: "Unauthorized access",

    });

  }

  if (req.user.role !== "Admin") {

    return res.status(403).json({

      success: false,

      message: "Admin access only",

    });

  }

  next();

};

module.exports = admin;