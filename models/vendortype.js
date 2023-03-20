const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const _vendortype = new Schema(
  {
    id: {
      type: String,
      trim: true,
    },
    recordID: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true, strict: false }
);

module.exports = mongoose.model("vendortype", _vendortype);
