const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const _vitem_clinic = new Schema(
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

module.exports = mongoose.model("vitem_clinic", _vitem_clinic);
