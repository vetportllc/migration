const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const remindergrp = new Schema(
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

module.exports = mongoose.model("remindergrp", remindergrp);
