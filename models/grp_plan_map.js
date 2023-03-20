const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const grp_plan_map = new Schema(
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

module.exports = mongoose.model("grp_plan_map", grp_plan_map);
