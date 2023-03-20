const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const template_key_map = new Schema(
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

module.exports = mongoose.model("template_key_map", template_key_map);
