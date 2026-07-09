const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    lead: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lead",
      required: true
    },

    companyName: {
      type: String,
      required: [true, "Company name is required"],
      trim: true
    },

    contactPerson: {
      type: String,
      required: [true, "Contact person is required"],
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

    industry: {
      type: String,
      enum: [
        "IT",
        "Healthcare",
        "Finance",
        "Education",
        "Retail",
        "Manufacturing",
        "Real Estate",
        "Other"
      ],
      default: "Other"
    },

    address: {
      type: String,
      default: ""
    },

    city: {
      type: String,
      default: ""
    },

    state: {
      type: String,
      default: ""
    },

    country: {
      type: String,
      default: ""
    },

    postalCode: {
      type: String,
      default: ""
    },

    assignedManager: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

// Indexes
customerSchema.index({ companyName: 1 });
customerSchema.index({ email: 1 });
customerSchema.index({ industry: 1 });

module.exports = mongoose.model("Customer", customerSchema);