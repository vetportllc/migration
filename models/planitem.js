const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planitem = new Schema(
  {
    id: {
      type: String,
      trim: true,
    },
    recordID: {
      type: String,
      trim: true,
    },
    pricingStrategy: {
      type: Number,
    },
    planItem: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      trim: true,
    },
    subCategory: {
      type: String,
      trim: true,
    },
    unit: {
      type: String,
      trim: true,
    },
    lower: {
      type: Number,
      trim: true,
    },
    upper: {
      type: Number,
      trim: true,
    },
    species: {
      type: String,
      trim: true,
    },
    breed: {
      type: String,
      trim: true,
    },
    status: {
      type: Number,
      trim: true,
    },
    remGrpId: {
      type: String,
      trim: true,
    },
    createdAt: {
      type: Date,
      trim: true,
    },
    updatedAt: {
      type: Date,
      trim: true,
    },
    displayName: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true, strict: false }
);

module.exports = mongoose.model("planitem", planitem);
