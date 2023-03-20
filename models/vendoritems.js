const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const _vendoritems = new Schema(
  {
    id: {
      type: String,
      trim: true,
    },
    recordID: {
      type: String,
      trim: true,
    },
    package_size: {
      type: Number,
    },
    price: {
      type: Number,
    },
    threshold_qty: {
      type: Number,
    },
    reorder_qty: {
      type: Number,
    },
    itemCode: {
      type: Number,
    },
    upcCode: {
      type: Number,
    },
    din: {
      type: Number,
    },
    sku: {
      type: Number,
    },
    hsnCode: {
      type: Number,
    },
    isMfg: {
      type: Number,
    },
    serial_lotno: {
      type: Number,
    },
    manufactureDate: {
      type: Date,
    },
    expiryDate: {
      type: Date,
    },
    isVetcove: {
      type: Number,
    },
    status: {
      type: Number,
    },
  },
  { timestamps: true, strict: false }
);

module.exports = mongoose.model("vendoritems", _vendoritems);
