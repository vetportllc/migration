const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reminderplan = new Schema(
  {
    id: {
      type: String,
      trim: true,
    },
    recordID: {
      type: String,
      trim: true,
    },
    dueBefore: {
      type: Number,
    },
    dueIn: {
      type: Number,
    },
    expiry: {
      type: Number,
    },
    interval: {
      type: Number,
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

module.exports = mongoose.model("reminderplan", reminderplan);
