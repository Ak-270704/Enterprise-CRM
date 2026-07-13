const Deal = require("../models/Deal");

// Create Deal
exports.createDeal = async (req, res) => {
  try {
    req.body.createdBy = req.user._id;

req.body.assignedTo = req.body.assignedTo || req.user._id;

const deal = await Deal.create(req.body);

    res.status(201).json({
      success: true,
      message: "Deal created successfully",
      data: deal,
    });
  } catch (error) {
    console.error(error);

res.status(500).json({
    success:false,
    message:"Internal Server Error"
});
  }
};

// Get All Deals
exports.getDeals = async (req, res) => {
  try {
    const deals = await Deal.find()
  .populate("customer", "companyName contactPerson email")
  .populate("assignedTo", "name email")
  .populate("createdBy", "name email");

    res.status(200).json({
      success: true,
      count: deals.length,
      data: deals,
    });
  } catch (error) {
    console.error(error);

res.status(500).json({
    success:false,
    message:"Internal Server Error"
});
  }
};

// Get Single Deal
exports.getDeal = async (req, res) => {
  try {
    const deal = await Deal.findById(req.params.id)
  .populate("customer")
  .populate("lead")
  .populate("assignedTo", "name email")
  .populate("createdBy", "name email");

    if (!deal) {
      return res.status(404).json({
        success: false,
        message: "Deal not found",
      });
    }

    res.status(200).json({
      success: true,
      data: deal,
    });
  } catch (error) {
    console.error(error);

res.status(500).json({
    success:false,
    message:"Internal Server Error"
});
  }
};

// Update Deal
exports.updateDeal = async (req, res) => {
  try {
    const deal = await Deal.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!deal) {
      return res.status(404).json({
        success: false,
        message: "Deal not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Deal updated successfully",
      data: deal,
    });
  } catch (error) {
    console.error(error);

res.status(500).json({
    success:false,
    message:"Internal Server Error"
});
  }
};

// Delete Deal
exports.deleteDeal = async (req, res) => {
  try {
    const deal = await Deal.findByIdAndDelete(req.params.id);

    if (!deal) {
      return res.status(404).json({
        success: false,
        message: "Deal not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Deal deleted successfully",
    });
  } catch (error) {
   console.error(error);

res.status(500).json({
    success:false,
    message:"Internal Server Error"
});
  }
};