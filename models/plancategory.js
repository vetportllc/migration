const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plancategory = new Schema(
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

module.exports = mongoose.model("plancategory", plancategory);
