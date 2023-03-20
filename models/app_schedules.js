const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const app_schedules = new Schema(
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

module.exports = mongoose.model("app_schedules", app_schedules);
