const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patient = new Schema(
  {
    id: {
      type: String,
      trim: true,
    },
    recordID: {
      type: String,
      trim: true,
    },
    clientid: {
      type: String,
      trim: true,
    },

    name: {
      type: String,
      trim: true,
    },

    dob: {
      type: Date,
      trim: true,
    },

    dayofyear: {
      type: String,
      trim: true,
    },

    speciesid: {
      type: String,
      trim: true,
    },

    f_speciesid: {
      type: String,
      trim: true,
    },

    breedid: {
      type: String,
      trim: true,
    },

    f_breedid: {
      type: String,
      trim: true,
    },

    colorid: {
      type: String,
      trim: true,
    },

    f_colorid: {
      type: String,
      trim: true,
    },

    sexid: {
      type: String,
      trim: true,
    },

    f_sexid: {
      type: String,
      trim: true,
    },

    defaultprovider: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      trim: true,
    },

    microchipid: {
      type: String,
      trim: true,
    },

    rabiestagid: {
      type: String,
      trim: true,
    },

    tattooid: {
      type: String,
      trim: true,
    },

    identification: {
      type: String,
      trim: true,
    },

    currentweight: {
      type: String,
      trim: true,
    },

    patientinfo: {
      type: String,
      trim: true,
    },

    statelicense: {
      type: String,
      trim: true,
    },

    deceaseddate: {
      type: Date,
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

    createdby: {
      type: String,
      trim: true,
    },

    modifiedby: {
      type: String,
      trim: true,
    },

    alert: {
      type: String,
      trim: true,
    },

    remark: {
      type: String,
      trim: true,
    },

    f_patientid: {
      type: String,
      trim: true,
    },

    p_taxable: {
      type: String,
      trim: true,
    },

    m_date: {
      type: Date,
      trim: true,
    },

    patientid: {
      type: String,
      trim: true,
    },

    headimage: {
      type: String,
      trim: true,
    },

    headimage_thump: {
      type: String,
      trim: true,
    },

    leftimage: {
      type: String,
      trim: true,
    },

    leftimage_thump: {
      type: String,
      trim: true,
    },

    rightimage: {
      type: String,
      trim: true,
    },

    rightimage_thump: {
      type: String,
      trim: true,
    },

    originID_: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true, strict: false }
);

module.exports = mongoose.model("patient", patient);
