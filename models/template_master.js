const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const template_master = new Schema(
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
    status: {
      type: Boolean,
    },
  },
  { timestamps: true, strict: false }
);

module.exports = mongoose.model("template_master", template_master);
