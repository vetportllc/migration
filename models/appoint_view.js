const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appoint_view = new Schema(
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

module.exports = mongoose.model("appoint_view", appoint_view);
