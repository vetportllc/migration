const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const antech_results = new Schema(
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

module.exports = mongoose.model("antech_results", antech_results);
