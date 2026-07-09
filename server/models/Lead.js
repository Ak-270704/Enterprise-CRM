const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true
    },

    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true
    },

    company: {
      type: String,
      required: [true, "Company name is required"],
      trim: true
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true
    },

    source: {
      type: String,
      enum: [
        "Website",
        "LinkedIn",
        "Facebook",
        "Instagram",
        "Referral",
        "Email Campaign",
        "Cold Call",
        "Advertisement",
        "Other"
      ],
      default: "Website"
    },

    status: {
      type: String,
      enum: [
        "New",
        "Contacted",
        "Qualified",
        "Proposal Sent",
        "Negotiation",
        "Converted",
        "Lost"
      ],
      default: "New"
    },

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    notes: {
      type: String,
      trim: true,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

// Indexes
leadSchema.index({ email: 1 });
leadSchema.index({ company: 1 });
leadSchema.index({ status: 1 });

module.exports = mongoose.model("Lead", leadSchema);