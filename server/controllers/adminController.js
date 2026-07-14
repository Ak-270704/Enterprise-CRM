const User = require("../models/User");
const Lead = require("../models/Lead");
const Customer = require("../models/Customer");
const Deal = require("../models/Deal");
const Activity = require("../models/Activity");
// ========================================
// Admin Dashboard Statistics
// ========================================

exports.getDashboardStats = async (req, res) => {

  try {

    const totalUsers =
      await User.countDocuments();
    
    const adminUsers =
  await User.countDocuments({

    role: "Admin",

  });

const managerUsers =
  await User.countDocuments({

    role: "Manager",

  });

const salesUsers =
  await User.countDocuments({

    role: "Sales",

  });
  const recentUsers = await User.find()

  .select("-password")

  .sort({

    createdAt: -1,

  })

  .limit(5);

    const totalLeads =
      await Lead.countDocuments();

    const totalCustomers =
      await Customer.countDocuments();

    const totalDeals =
      await Deal.countDocuments();

    const totalActivities =
      await Activity.countDocuments();
    
    const recentActivities = await Activity.find()

  .populate("assignedTo", "name")

  .sort({

    createdAt: -1,

  })

  .limit(5);

    const wonDeals =
      await Deal.countDocuments({
        status: "Won",
      });

    const openDeals =
      await Deal.countDocuments({
        status: "Open",
      });

    const lostDeals =
      await Deal.countDocuments({
        status: "Lost",
      });

    res.status(200).json({

      success: true,

      data: {

  totalUsers,

  adminUsers,

  managerUsers,

  salesUsers,

  recentUsers,

  totalLeads,

  totalCustomers,

  totalDeals,

  totalActivities,

  recentActivities,

  wonDeals,

  openDeals,

  lostDeals,

},
    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};
// ========================================
// Get All Users
// ========================================

exports.getAllUsers = async (req, res) => {

  try {

    const users = await User.find()

      .select("-password")

      .sort({
        createdAt: -1,
      });

    res.status(200).json({

      success: true,

      count: users.length,

      data: users,

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};
// ========================================
// Update User Role & Status
// ========================================

exports.updateUserRole = async (req, res) => {

  try {

    const {

      role,

      isActive,

    } = req.body;

    const user = await User.findByIdAndUpdate(

      req.params.id,

      {

        role,

        isActive,

      },

      {

        new: true,

        runValidators: true,

      }

    ).select("-password");

    if (!user) {

      return res.status(404).json({

        success: false,

        message: "User not found",

      });

    }

    res.status(200).json({

      success: true,

      message: "User updated successfully",

      data: user,

    });

  }

  catch (error) {

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};
// ========================================
// Delete User
// ========================================

exports.deleteUser = async (req, res) => {

  try {

    const user =
      await User.findByIdAndDelete(
        req.params.id
      );

    if (!user) {

      return res.status(404).json({

        success: false,

        message: "User not found",

      });

    }

    res.status(200).json({

      success: true,

      message:
        "User deleted successfully",

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};
