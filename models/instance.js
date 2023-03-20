const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const instance = new Schema(
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

    url: {
      type: String,
      trim: true,
    },

    port: {
      type: String,
      trim: true,
    },

    setuptype: {
      type: String,
      trim: true,
    },

    clinic_referral: {
      type: String,
      trim: true,
    },

    bricknmortar: {
      type: String,
      trim: true,
    },

    equineclinic: {
      type: String,
      trim: true,
    },

    mobileclinic: {
      type: String,
      trim: true,
    },

    maxclients: {
      type: String,
      trim: true,
    },

    maxdoctors: {
      type: String,
      trim: true,
    },

    a_instanceid: {
      type: String,
      trim: true,
    },

    subscriptionid: {
      type: String,
      trim: true,
    },

    maxstaff: {
      type: String,
      trim: true,
    },

    due_by: {
      type: Date,
      trim: true,
    },

    amount_balance: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      trim: true,
    },

    // all_param: {
    //   type: String,
    //   trim: true,
    // },

    // setting_log: {
    //   type: String,
    //   trim: true,
    // },

    // clinic_logo: {
    //   type: String,
    //   trim: true,
    // },

    // clinic_url: {
    //   type: String,
    //   trim: true,
    // },
    originID_: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true, strict: false }
);

module.exports = mongoose.model("instance", instance);
