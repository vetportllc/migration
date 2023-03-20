const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const keyword = new Schema(
  {
    id: {
      type: String,
      trim: true,
    },
    recordID: {
      type: String,
      trim: true,
    },
    tag: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    defaultvalue: {
      type: String,
      trim: true,
    },
    action: {
      type: String,
      trim: true,
    },
    status: {
      type: Number,
    },
    createdAt: {
      type: Date,
    },
    updatedAt: {
      type: Date,
    },
  },
  { timestamps: true, strict: false }
);

module.exports = mongoose.model("keyword", keyword);
