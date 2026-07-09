const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Deal title is required"],
      trim: true
    },

    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true
    },

    lead: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lead"
    },

    value: {
      type: Number,
      required: [true, "Deal value is required"],
      min: 0
    },

    currency: {
      type: String,
      enum: ["INR", "USD", "EUR"],
      default: "INR"
    },

    stage: {
      type: String,
      enum: [
        "Lead",
        "Qualified",
        "Proposal",
        "Negotiation",
        "Won",
        "Lost"
      ],
      default: "Lead"
    },

    probability: {
      type: Number,
      min: 0,
      max: 100,
      default: 10
    },

    expectedCloseDate: {
      type: Date
    },

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    description: {
      type: String,
      default: ""
    },

    status: {
      type: String,
      enum: ["Open", "Won", "Lost"],
      default: "Open"
    }
  },
  {
    timestamps: true
  }
);

// Indexes
dealSchema.index({ stage: 1 });
dealSchema.index({ status: 1 });
dealSchema.index({ value: -1 });

module.exports = mongoose.model("Deal", dealSchema);