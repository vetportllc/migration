const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const admit_patient = new Schema(
  {
    data: {
      type: Object,
    },
    id: {
      type: String,
      trim: true,
    },
    recordID: {
      type: Number,
      trim: true,
    },
    cageid: {
      type: String,
      trim: true,
    },
    patientid: {
      type: String,
      trim: true,
    },
    fromtime: {
      type: Date,
      trim: true,
    },
    totime: {
      type: Date,
      trim: true,
    },
    status: {
      type: String,
      trim: true,
    },
    discharged_by: {
      type: String,
      trim: true,
    },
    admitted_on: {
      type: Date,
      trim: true,
    },
    admitted_by: {
      type: String,
      trim: true,
    },
    discharged_on: {
      type: Date,
      trim: true,
    },
    reserved_on: {
      type: Date,
      trim: true,
    },
    reserved_by: {
      type: String,
      trim: true,
    },
    cancelled_by: {
      type: String,
      trim: true,
    },
    cartid: {
      type: String,
      trim: true,
    },
    salesid: {
      type: String,
      trim: true,
    },
    d_encid: {
      type: String,
      trim: true,
    },
    is_hospital: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true, strict: false }
);

module.exports = mongoose.model("admit_patient", admit_patient);
