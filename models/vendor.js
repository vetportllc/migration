const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const _vendor = new Schema(
  {
    id: {
      type: String,
      trim: true,
    },
    recordID: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
    },
    pnumber: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    fax: {
      type: String,
      trim: true,
    },
    accountNo: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    zipcode: {
      type: String,
      trim: true,
    },
    status: {
      type: Number,
    },
    address: {
      type: String,
      trim: true,
    },
    website: {
      type: String,
      trim: true,
    },
    note: {
      type: String,
      trim: true,
    },
    createdAt: {
      type: Date,
    },
    updatedAt: {
      type: Date,
    },
  },
  { timestamps: true, strict: false }
);

module.exports = mongoose.model("vendor", _vendor);
