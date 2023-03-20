const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const heform = new Schema(
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

module.exports = mongoose.model("heform", heform);
