const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const antech_planitem = new Schema(
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

module.exports = mongoose.model("antech_planitem", antech_planitem);
