const mongoose = require("mongoose");
const Schema = mongoose.Schema;

exports.pushData = async (req, res) => {
  const instanceURL = req.body?.mongoInstUrl ?? null;
  if (!instanceURL) {
    throw new Error("Instance url is required");
  }
  const connReff = mongoose.createConnection(process.env.MONGO);
  const connInst = mongoose.createConnection(instanceURL);

  const stateSchema = new Schema({}, { timestamps: true, strict: false });
  const stateReff = connReff.model("state", stateSchema);
  const stateInst = connInst.model("state", stateSchema);

  var Data = await stateReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await stateInst.updateOne(
      { recordID: indexData.recordID },
      { $setOnInsert: indexData },
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
  const plantypeReff = connReff.model("plan_type", plantypeSchema);
  const plantypeInst = connInst.model("plan_type", plantypeSchema);

  var Data = await plantypeReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await plantypeInst.updateOne(
      { id: indexData.id, recordID: indexData.recordID },
      { $setOnInsert: indexData },
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
  const plan_actionReff = connReff.model("planaction", plan_actionSchema);
  const plan_actionInst = connInst.model("planaction", plan_actionSchema);

  var Data = await plan_actionReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await plan_actionInst.updateOne(
      { id: indexData.id, recordID: indexData.recordID },
      { $setOnInsert: indexData },
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
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await packagecontentInst.updateOne(
      { id: indexData.id, recordID: indexData.recordID },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  const consult_speciesSchema = new Schema(
    {},
    { timestamps: true, strict: false }
  );
  const consult_speciesReff = connReff.model("specie", consult_speciesSchema);
  const consult_speciesInst = connInst.model("specie", consult_speciesSchema);

  var Data = await consult_speciesReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await consult_speciesInst.updateOne(
      { recordID: indexData.recordID },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  const breedSchema = new Schema({}, { timestamps: true, strict: false });
  const breedReff = connReff.model("breed", breedSchema);
  const breedInst = connInst.model("breed", breedSchema);

  var Data = await breedReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await breedInst.updateOne(
      { recordID: indexData.recordID },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  const sexSchema = new Schema({}, { timestamps: true, strict: false });
  const sexReff = connReff.model("sex", sexSchema);
  const sexInst = connInst.model("sex", sexSchema);

  var Data = await sexReff
    .find(
      {},
      {
        __v: 0,
        createdAt: 0,
        updatedAt: 0,
        createdon: 0,
        modifiedon: 0,
        createdby: 0,
        modifiedby: 0,
      }
    )
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await sexInst.updateOne(
      { recordID: indexData.recordID },
      //{ $setOnInsert: databody },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  const colorSchema = new Schema({}, { timestamps: true, strict: false });
  const colorReff = connReff.model("color", colorSchema);
  const colorInst = connInst.model("color", colorSchema);

  var Data = await colorReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await colorInst.updateOne(
      { recordID: indexData.recordID },
      //{ $setOnInsert: databody },
      { $setOnInsert: indexData },

      { upsert: true, lean: true }
    );
  });

  const countrySchema = new Schema({}, { timestamps: true, strict: false });
  const countryReff = connReff.model("country", countrySchema);
  const countryInst = connInst.model("country", countrySchema);

  var Data = await countryReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await countryInst.updateOne(
      { recordID: indexData.recordID },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  const instanceSchema = new Schema({}, { timestamps: true, strict: false });
  const instanceReff = connReff.model("instance", instanceSchema);
  const instanceInst = connInst.model("instance", instanceSchema);

  var Data = await instanceReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await instanceInst.updateOne(
      { recordID: indexData.recordID },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  const timezoneSchema = new Schema({}, { timestamps: true, strict: false });
  const timezoneReff = connReff.model("timezone", timezoneSchema);
  const timezoneInst = connInst.model("timezone", timezoneSchema);

  var Data = await timezoneReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await timezoneInst.updateOne(
      { name: indexData.name, abbr: indexData.abbr },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  const phone_typeSchema = new Schema({}, { timestamps: true, strict: false });
  const phone_typeReff = connReff.model("phone_type", phone_typeSchema);
  const phone_typeInst = connInst.model("phone_type", phone_typeSchema);

  var Data = await phone_typeReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await phone_typeInst.updateOne(
      { recordID: indexData.recordID },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  const species_colorSchema = new Schema(
    {},
    { timestamps: true, strict: false }
  );
  const species_colorReff = connReff.model(
    "species_color",
    species_colorSchema
  );
  const species_colorInst = connInst.model(
    "species_color",
    species_colorSchema
  );

  var Data = await species_colorReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await species_colorInst.updateOne(
      { recordID: indexData.recordID },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  const staff_designationSchema = new Schema(
    {},
    { timestamps: true, strict: false }
  );
  const staff_designationReff = connReff.model(
    "staff_designation",
    staff_designationSchema
  );
  const staff_designationInst = connInst.model(
    "staff_designation",
    staff_designationSchema
  );

  var Data = await staff_designationReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await staff_designationInst.updateOne(
      { recordID: indexData.recordID },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  const specialistSchema = new Schema({}, { timestamps: true, strict: false });
  const specialistReff = connReff.model("specialist", specialistSchema);
  const specialistInst = connInst.model("specialist", specialistSchema);

  var Data = await specialistReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await specialistInst.updateOne(
      { recordID: indexData.recordID },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  const s3_configSchema = new Schema({}, { timestamps: true, strict: false });
  const s3_configReff = connReff.model("s3_config", s3_configSchema);
  const s3_configInst = connInst.model("s3_config", s3_configSchema);

  var Data = await s3_configReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await s3_configInst.updateOne(
      { recordID: indexData.recordID },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  const referenceSchema = new Schema({}, { timestamps: true, strict: false });
  const referenceReff = connReff.model("reference", referenceSchema);
  const referenceInst = connInst.model("reference", referenceSchema);

  var Data = await referenceReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await referenceInst.updateOne(
      { recordID: indexData.recordID },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  const mrkt_categorySchema = new Schema(
    {},
    { timestamps: true, strict: false }
  );
  const mrkt_categoryReff = connReff.model(
    "mrkt_category",
    mrkt_categorySchema
  );
  const mrkt_categoryInst = connInst.model(
    "mrkt_category",
    mrkt_categorySchema
  );

  var Data = await mrkt_categoryReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await mrkt_categoryInst.updateOne(
      { recordID: indexData.recordID },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  const mrkt_itemSchema = new Schema({}, { timestamps: true, strict: false });
  const mrkt_itemReff = connReff.model("mrkt_item", mrkt_itemSchema);
  const mrkt_itemInst = connInst.model("mrkt_item", mrkt_itemSchema);

  var Data = await mrkt_itemReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await mrkt_itemInst.updateOne(
      { recordID: indexData.recordID },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  const diagnosisSchema = new Schema({}, { timestamps: true, strict: false });
  const diagnosisReff = connReff.model("diagnosis", diagnosisSchema);
  const diagnosisInst = connInst.model("diagnosis", diagnosisSchema);

  var Data = await diagnosisReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await diagnosisInst.updateOne(
      { recordID: indexData.recordID },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  const soap_typeSchema = new Schema(
    {
      id: {
        type: String,
        trim: true,
      },
    },
    { timestamps: true, strict: false }
  );
  const soap_typeReff = connReff.model("soap_type", soap_typeSchema);
  const soap_typeInst = connInst.model("soap_type", soap_typeSchema);

  var Data = await soap_typeReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await soap_typeInst.updateOne(
      { id: indexData.id, recordID: indexData.recordID },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  const template_masterSchema = new Schema(
    {
      id: {
        type: String,
        trim: true,
      },
    },
    { timestamps: true, strict: false }
  );
  const template_masterReff = connReff.model(
    "template_master",
    template_masterSchema
  );
  const template_masterInst = connInst.model(
    "template_master",
    template_masterSchema
  );

  var Data = await template_masterReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await template_masterInst.updateOne(
      { id: indexData.id, recordID: indexData.recordID },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  const template_typeSchema = new Schema(
    {
      id: {
        type: String,
        trim: true,
      },
    },
    { timestamps: true, strict: false }
  );
  const template_typeReff = connReff.model(
    "template_type",
    template_typeSchema
  );
  const template_typeInst = connInst.model(
    "template_type",
    template_typeSchema
  );

  var Data = await template_typeReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await template_typeInst.updateOne(
      { id: indexData.id, recordID: indexData.recordID },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  const template_keySchema = new Schema(
    {},
    { timestamps: true, strict: false }
  );
  const template_keyReff = connReff.model("template_key", template_keySchema);
  const template_keyInst = connInst.model("template_key", template_keySchema);

  var Data = await template_keyReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await template_keyInst.updateOne(
      { recordID: indexData.recordID },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  // usergroup
  const usergroupSchema = new Schema({}, { timestamps: true, strict: false });
  const usergrp_keyReff = connReff.model(
    "usergroups",
    usergroupSchema,
    "usergroups"
  );
  const usergrp_keyInst = connInst.model(
    "usergroups",
    usergroupSchema,
    "usergroups"
  );

  var Data = await usergrp_keyReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await usergrp_keyInst.updateOne(
      { name: indexData.name },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });
  //usergroup

  // language_config
  const langCfgSchema = new Schema({}, { timestamps: true, strict: false });
  const langCfg_keyReff = connReff.model(
    "language_config",
    langCfgSchema,
    "language_config"
  );
  const langCfg_keyInst = connInst.model(
    "language_config",
    langCfgSchema,
    "language_config"
  );

  var Data = await langCfg_keyReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await langCfg_keyInst.updateOne(
      { id: indexData.id },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });
  //language_config

  // Modules
  const modulesSchema = new Schema(
    {
      id: {
        type: String,
        trim: true,
      },
    },
    { timestamps: true, strict: false }
  );
  const modulesReff = connReff.model("modules", modulesSchema);
  const modulesInst = connInst.model("modules", modulesSchema);

  var Data = await modulesReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await modulesInst.updateOne(
      { recordID: indexData.id },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  // Sub modules
  const subModulesSchema = new Schema(
    {
      id: {
        type: String,
        trim: true,
      },
    },
    { timestamps: true, strict: false }
  );
  const subModulesReff = connReff.model("sub_module", subModulesSchema);
  const subModulesInst = connInst.model("sub_module", subModulesSchema);

  var Data = await subModulesReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await subModulesInst.updateOne(
      { recordID: indexData.id },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  // Menu
  const menuSchema = new Schema(
    {
      id: {
        type: String,
        trim: true,
      },
    },
    { timestamps: true, strict: false }
  );
  const menuReff = connReff.model("menu", menuSchema, "menu");
  const menuInst = connInst.model("menu", menuSchema, "menu");

  var Data = await menuReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await menuInst.updateOne(
      { recordID: indexData.id },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  // Actions
  const actionsSchema = new Schema(
    {
      id: {
        type: String,
        trim: true,
      },
    },
    { timestamps: true, strict: false }
  );
  const actionsReff = connReff.model("actions", actionsSchema);
  const actionsInst = connInst.model("actions", actionsSchema);

  var Data = await actionsReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await actionsInst.updateOne(
      { recordID: indexData.id },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  // Pages
  const pagesSchema = new Schema(
    {
      id: {
        type: String,
        trim: true,
      },
    },
    { timestamps: true, strict: false }
  );
  const pagesReff = connReff.model("pages", pagesSchema);
  const pagesInst = connInst.model("pages", pagesSchema);

  var Data = await pagesReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await pagesInst.updateOne(
      { recordID: indexData.id },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  console.log("Completed");
  res.status(200).json({ msg: "Data imported successfully" });
};
