const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const client = new Schema(
  {
    id: {
      type: String,
      trim: true,
    },
    recordID: {
      type: String,
      trim: true,
    },
    clinicid: {
      type: String,
      trim: true,
    },
    clinic_loc_id: {
      type: String,
      trim: true,
    },
    titleid: {
      type: String,
      trim: true,
    },
    firstname: {
      type: String,
      trim: true,
    },
    lastname: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    address1: {
      type: String,
      trim: true,
    },
    address2: {
      type: String,
      trim: true,
    },
    country: {
      type: String,
      trim: true,
    },
    state: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    zipcode: {
      type: String,
      trim: true,
    },
    locationid: {
      type: String,
      trim: true,
    },
    createdon: {
      type: Date,
      trim: true,
    },
    modifiedon: {
      type: Date,
      trim: true,
    },
    status: {
      type: String,
      trim: true,
    },
    createdby: {
      type: String,
      trim: true,
    },
    modifiedby: {
      type: String,
      trim: true,
    },
    isemployee: {
      type: String,
      trim: true,
    },
    defaultprovider: {
      type: String,
      trim: true,
    },
    smsdecline: {
      type: String,
      trim: true,
    },
    isreminders: {
      type: String,
      trim: true,
    },
    isstatements: {
      type: String,
      trim: true,
    },
    ismarketing: {
      type: String,
      trim: true,
    },
    decline: {
      type: String,
      trim: true,
    },
    refferedby: {
      type: String,
      trim: true,
    },
    isblockedz: {
      type: String,
      trim: true,
    },
    f_clientid: {
      type: String,
      trim: true,
    },
    clientid: {
      type: String,
      trim: true,
    },
    phonetypeid: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    isdefault: {
      type: String,
      trim: true,
    },
    notes: {
      type: String,
      trim: true,
    },
    alert: {
      type: String,
      trim: true,
    },
    isloyalty: {
      type: String,
      trim: true,
    },
    loyalty_ref_no: {
      type: String,
      trim: true,
    },
    email_copy: {
      type: String,
      trim: true,
    },
    uid: {
      type: String,
      trim: true,
    },
    allow_interest: {
      type: String,
      trim: true,
    },
    is_discount: {
      type: String,
      trim: true,
    },
    discount: {
      type: String,
      trim: true,
    },
    dob: {
      type: Date,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("client", client);
