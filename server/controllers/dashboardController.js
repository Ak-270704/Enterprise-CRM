const Lead = require("../models/Lead");
const Customer = require("../models/Customer");
const Deal = require("../models/Deal");
const Activity = require("../models/Activity");

exports.getDashboardStats = async (req, res) => {

  try {

    const totalLeads =
      await Lead.countDocuments();

    const totalCustomers =
      await Customer.countDocuments();

    const totalDeals =
      await Deal.countDocuments();

    const totalActivities =
      await Activity.countDocuments();

    // Live Lead Status Counts

    const leadStatusCounts = {

      New:
        await Lead.countDocuments({
          status: "New",
        }),

      Contacted:
        await Lead.countDocuments({
          status: "Contacted",
        }),

      Qualified:
        await Lead.countDocuments({
          status: "Qualified",
        }),

      Proposal:
        await Lead.countDocuments({
          status: "Proposal",
        }),

      Negotiation:
        await Lead.countDocuments({
          status: "Negotiation",
        }),

      Won:
        await Lead.countDocuments({
          status: "Won",
        }),

      Lost:
        await Lead.countDocuments({
          status: "Lost",
        }),

    };

    res.status(200).json({

      success: true,

      data: {

        totalLeads,

        totalCustomers,

        totalDeals,

        totalActivities,

        leadStatusCounts,

      },

    });

  }

  catch (error) {

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};