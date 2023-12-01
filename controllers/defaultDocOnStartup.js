/*

const Edition = require("../models/edition.js");
const path = require("path");
const fs = require("fs-extra");
const moment = require("moment");
const readJsonSync = require("read-json-sync");
const PublishedPages = require("../models/published_page.js");

// Retrieve all Docs from the database.
exports.migrate = async (req, res) => {
  try {
    console.log(req.query.id);
    //var files = [];
    //var readyfile = {};
    let editionDoc = await Edition.findById(req.query.id); //TOIM

    //console.log(req.query);
    //return;
    //const folderPath = "/mnt/Repository/" + req.query.path;
    const folderPath = req.query.path;
    //const folderPath = "/Users/abhi07/Desktop/VETPORT";
    let start = moment(new Date("2018-01-01"));
    let end = moment(new Date("2018-01-03"));
    let diff = end.diff(start, "days");
    for (let index = 0; index < diff; index++) {
      start = start.add(1, "days");
      console.log("start: ", start);

      var pagefolder;
      pagefolder = folderPath + "/" + start.format("YYYYMMDD");

      if (fs.existsSync(pagefolder)) {
        var pjson = {};
        pjson.edition_id = editionDoc._id; //'604f140850b78c3257c19d4c'
        pjson.publication_id = editionDoc.publication_id;
        pjson.issue_date = start.format("YYYY-MM-DD"); //"T00:00:00.000+00:00"
        let finaljson = await readjson(
          pagefolder + "/toc.json",
          pagefolder,
          pjson
        );
        pjson.pages = finaljson;
        pjson.total_pages = finaljson.length;
        let upsertdoc = await upsert(pjson);
      }
    }
    res.status(200).send("ok");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const readjson = async (subpath, dir) => {
  let toc = readJsonSync(subpath);
  var pages = [];
  for (var i = 0; i < toc.toc.length; i++) {
    var item;
    item = {};
    item = toc.toc[i];
    var final;
    final = {};
    var pagefolder;
    pagefolder = dir + "/" + item.page_folder;
    if (fs.existsSync(pagefolder + "/page.json")) {
      let pdf = await readJsonSync(pagefolder + "/page.json");
      final.cropped_pdf = pagefolder + "/" + pdf.pdf;
    }
    final.page = item.page_folder;
    final.rs_content = item.page_title;
    final.mapped_rs_content = item.page_title;
    final.order = item.page;
    final.thumbnail_image = pagefolder + "/page_thumbnail.jpg";
    final.original_image = pagefolder + "/big_page.jpg";
    //final.cropped_pdf = pagefolder+"/"+pdf.pdf
    pages.push(final);
  }
  console.log("pages: ", pages);
  return pages;
};

const upsert = async (req, res) => {
  try {
    const body = req;
    console.log("body: ", body);
    let doc = await PublishedPages.updateOne(
      { edition_id: body.edition_id, issue_date: new Date(body.issue_date) },
      { $set: body },
      { upsert: true }
    );
    return doc;
  } catch (error) {
    console.log(error);
  }
};

*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

exports.pushData = async (req, res) => {
  const connReff = mongoose.createConnection(
    "mongodb://vetflow:vetflow%232023@65.1.93.205:27017/reference?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
  );
  // const connInst = mongoose.createConnection(
  //   "mongodb+srv://abhi07:abhiyadav07@cluster0.vn1ptrs.mongodb.net/?retryWrites=true&w=majority"
  // );

  const connInst = mongoose.createConnection(req.body.mongoInstUrl);

  const stateSchema = new Schema(
    {
      id: {
        type: String,
        trim: true,
      },
    },
    { timestamps: true, strict: false }
  );
  const stateReff = connReff.model("state", stateSchema);
  const stateInst = connInst.model("state", stateSchema);

  var Data = await stateReff
    .find({}, { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    //const Doc = new stateInst(indexData);
    //const doc = await Doc.save();
    const doc = await stateInst.updateOne(
      { id: indexData.id, recordID: indexData.recordID },
      { $set: indexData },
      { upsert: true, lean: true }
    );
  });

  const plantypeSchema = new Schema(
    {
      id: {
        type: String,
        trim: true,
      },
    },
    { timestamps: true, strict: false }
  );
  const plantypeReff = connReff.model("plantype", plantypeSchema);
  const plantypeInst = connInst.model("plantype", plantypeSchema);

  var Data = await plantypeReff
    .find({}, { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await plantypeInst.updateOne(
      { id: indexData.id, recordID: indexData.recordID },
      { $set: indexData },
      { upsert: true, lean: true }
    );
  });

  const plan_actionSchema = new Schema(
    {
      id: {
        type: String,
        trim: true,
      },
    },
    { timestamps: true, strict: false }
  );
  const plan_actionReff = connReff.model("plan_action", plan_actionSchema);
  const plan_actionInst = connInst.model("plan_action", plan_actionSchema);

  var Data = await plan_actionReff
    .find({}, { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await plan_actionInst.updateOne(
      { id: indexData.id, recordID: indexData.recordID },
      { $set: indexData },
      { upsert: true, lean: true }
    );
  });

  const packagecontentSchema = new Schema(
    {
      id: {
        type: String,
        trim: true,
      },
    },
    { timestamps: true, strict: false }
  );
  const packagecontentReff = connReff.model(
    "packagecontent",
    packagecontentSchema
  );
  const packagecontentInst = connInst.model(
    "packagecontent",
    packagecontentSchema
  );

  var Data = await packagecontentReff
    .find({}, { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await packagecontentInst.updateOne(
      { id: indexData.id, recordID: indexData.recordID },
      { $set: indexData },
      { upsert: true, lean: true }
    );
  });

  const consult_speciesSchema = new Schema(
    {
      id: {
        type: String,
        trim: true,
      },
    },
    { timestamps: true, strict: false }
  );
  const consult_speciesReff = connReff.model(
    "consult_species",
    consult_speciesSchema
  );
  const consult_speciesInst = connInst.model(
    "consult_species",
    consult_speciesSchema
  );

  var Data = await consult_speciesReff
    .find({}, { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await consult_speciesInst.updateOne(
      { id: indexData.id, recordID: indexData.recordID },
      { $set: indexData },
      { upsert: true, lean: true }
    );
  });

  const breedSchema = new Schema(
    {
      id: {
        type: String,
        trim: true,
      },
    },
    { timestamps: true, strict: false }
  );
  const breedReff = connReff.model("breed", breedSchema);
  const breedInst = connInst.model("breed", breedSchema);

  var Data = await breedReff
    .find({}, { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await breedInst.updateOne(
      { id: indexData.id, recordID: indexData.recordID },
      { $set: indexData },
      { upsert: true, lean: true }
    );
  });

  const sexSchema = new Schema(
    {
      id: {
        type: String,
        trim: true,
      },
    },
    { timestamps: true, strict: false }
  );
  const sexReff = connReff.model("sex", sexSchema);
  const sexInst = connInst.model("sex", sexSchema);

  var Data = await sexReff
    .find({}, { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await sexInst.updateOne(
      { id: indexData.id, recordID: indexData.recordID },
      { $set: indexData },
      { upsert: true, lean: true }
    );
  });

  const colorSchema = new Schema(
    {
      id: {
        type: String,
        trim: true,
      },
    },
    { timestamps: true, strict: false }
  );
  const colorReff = connReff.model("color", colorSchema);
  const colorInst = connInst.model("color", colorSchema);

  var Data = await colorReff
    .find({}, { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await colorInst.updateOne(
      { id: indexData.id, recordID: indexData.recordID },
      { $set: indexData },
      { upsert: true, lean: true }
    );
  });

  const countrySchema = new Schema(
    {
      id: {
        type: String,
        trim: true,
      },
    },
    { timestamps: true, strict: false }
  );
  const countryReff = connReff.model("country", countrySchema);
  const countryInst = connInst.model("country", countrySchema);

  var Data = await countryReff
    .find({}, { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await countryInst.updateOne(
      { id: indexData.id, recordID: indexData.recordID },
      { $set: indexData },
      { upsert: true, lean: true }
    );
  });

  const instanceSchema = new Schema(
    {
      id: {
        type: String,
        trim: true,
      },
    },
    { timestamps: true, strict: false }
  );
  const instanceReff = connReff.model("instance", instanceSchema);
  const instanceInst = connInst.model("instance", instanceSchema);

  var Data = await instanceReff
    .find({}, { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await instanceInst.updateOne(
      { id: indexData.id, recordID: indexData.recordID },
      { $set: indexData },
      { upsert: true, lean: true }
    );
  });

  const timezoneSchema = new Schema(
    {
      id: {
        type: String,
        trim: true,
      },
    },
    { timestamps: true, strict: false }
  );
  const timezoneReff = connReff.model("instance", timezoneSchema);
  const timezoneInst = connInst.model("instance", timezoneSchema);

  var Data = await timezoneReff
    .find({}, { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await timezoneInst.updateOne(
      { name: indexData.name, abbr: indexData.abbr },
      { $set: indexData },
      { upsert: true, lean: true }
    );
  });

  res.json("ok");
};
