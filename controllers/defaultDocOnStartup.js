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
  // index for case insensitive unique
  stateSchema.index(
  { name: 1, countryid: 1 },
  {
    collation: { locale: "en", strength: 2 },
    unique: true,
  }
);
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
  // index for case insensitive unique
  plantypeSchema.index(
  { name: 1 },
  {
    collation: { locale: "en", strength: 2 },
    unique: true,
  }
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
  // index for case insensitive unique
  plan_actionSchema.index(
  { name: 1 },
  {
    collation: { locale: "en", strength: 2 },
    unique: true,
  }
);
  const plan_actionReff = connReff.model("planaction", plan_actionSchema);
  const plan_actionInst = connInst.model("planaction", plan_actionSchema);

  var Data = await plan_actionReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await plan_actionInst.updateOne(
      { id: indexData.id },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  // Content Type
  const contentTypeSchema = new Schema(
    {
      id: {
        type: String,
        trim: true,
      },
    },
    { timestamps: true, strict: false }
  );
  const contentTypeReff = connReff.model(
    "content_type",
    contentTypeSchema
  );
  const contentTypeInst = connInst.model(
    "content_type",
    contentTypeSchema
  );

  var Data = await contentTypeReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await contentTypeInst.updateOne(
      { id: indexData.id },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  const consult_speciesSchema = new Schema(
    {},
    { timestamps: true, strict: false }
  );  
  // index for case insensitive unique
  consult_speciesSchema.index(
  { name: 1 },
  {
    collation: { locale: "en", strength: 2 },
    unique: true,
  }
);
  const consult_speciesReff = connReff.model("species", consult_speciesSchema);
  const consult_speciesInst = connInst.model("species", consult_speciesSchema);

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
  // index for case insensitive unique
  breedSchema.index(
  { name: 1, speciesId: 1 },
  {
    collation: { locale: "en", strength: 2 },
    unique: true,
  }
);
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
  // index for case insensitive unique
  sexSchema.index(
  { name: 1, speciesId: 1 },
  {
    collation: { locale: "en", strength: 2 },
    unique: true,
  }
);
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
  // index for case insensitive unique
  colorSchema.index(
  { name: 1 },
  {
    collation: { locale: "en", strength: 2 },
    unique: true,
  }
);
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
  // index for case insensitive unique
  countrySchema.index(
  { name: 1 },
  {
    collation: { locale: "en", strength: 2 },
    unique: true,
  }
);
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
  // index for case insensitive unique
  phone_typeSchema.index(
  { name: 1 },
  {
    collation: { locale: "en", strength: 2 },
    unique: true,
  }
);
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
  // index for case insensitive unique
  staff_designationSchema.index(
  { name: 1 },
  {
    collation: { locale: "en", strength: 2 },
    unique: true,
  }
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
      { code: indexData.code },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  const specialistSchema = new Schema({}, { timestamps: true, strict: false });
  // index for case insensitive unique
  specialistSchema.index(
  { name: 1 },
  {
    collation: { locale: "en", strength: 2 },
    unique: true,
  }
);
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
    mrkt_categorySchema, "mrkt_category"
  );
  const mrkt_categoryInst = connInst.model(
    "mrkt_category",
    mrkt_categorySchema, "mrkt_category"
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
      { key: indexData.key },
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
  const soap_typeReff = connReff.model("soap_type", soap_typeSchema, "soap_type");
  const soap_typeInst = connInst.model("soap_type", soap_typeSchema, "soap_type");

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

  // Template masters
  const template_masterSchema = new Schema(
    {
      id: {
        type: String,
        trim: true,
      },
      name: {
        type: String,
        unique: true
      }
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
      { id: indexData.id },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  // Template types
  const template_typeSchema = new Schema(
    {
      id: {
        type: String,
        trim: true,
      },
    },
    { timestamps: true, strict: false }
  );
  // index for case insensitive unique
  template_typeSchema.index(
    { title: 1 },
    {
      collation: { locale: "en", strength: 2 },
      unique: true,
    }
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
      { id: indexData.id},
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  // Template keys
  const template_keySchema = new Schema(
    {tag: {type: String, unique: true}},
    { timestamps: true, strict: false }
  );
  const template_keyReff = connReff.model("template_key", template_keySchema);
  const template_keyInst = connInst.model("template_key", template_keySchema);

  var Data = await template_keyReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await template_keyInst.updateOne(
      { tag: indexData.tag },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  // Template keys map
  const template_keymapSchema = new Schema(
    {tempId: {type: Schema.Types.ObjectId, index:true}},
    { timestamps: true, strict: false }
  );
  const template_keymapReff = connReff.model("template_keymap", template_keymapSchema);
  const template_keymapInst = connInst.model("template_keymap", template_keymapSchema);

  var Data = await template_keymapReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await template_keymapInst.updateOne(
      { keyId: indexData.keyId, tempId: indexData.tempId, },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

    // Templates
    const templateSchema = new Schema(
      {name: {type: String, unique:true}},
      { timestamps: true, strict: false }
    );
    const templateReff = connReff.model("template", templateSchema);
    const templateInst = connInst.model("template", templateSchema);
  
    var Data = await templateReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();
  
    Data.forEach(async (indexData) => {
      const doc = await templateInst.updateOne(
        { name: indexData.name},
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
      { id: indexData.id },
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
      { id: indexData.id },
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
      { id: indexData.id },
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
      { id: indexData.id },
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
      { id: indexData.id },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  // Date format
  const dateFormatSchema = new Schema({}, { timestamps: true, strict: false });
  const dateFormatReff = connReff.model(
    "date_format",
    dateFormatSchema,
    "date_format"
  );
  const dateFormatInst = connInst.model(
    "date_format",
    dateFormatSchema,
    "date_format"
  );

  var Data = await dateFormatReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await dateFormatInst.updateOne(
      { format: indexData.format },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  // Time format
  const timeFormatSchema = new Schema({}, { timestamps: true, strict: false });
  const timeFormatReff = connReff.model(
    "time_format",
    timeFormatSchema,
    "time_format"
  );
  const timeFormatInst = connInst.model(
    "time_format",
    timeFormatSchema,
    "time_format"
  );

  var Data = await timeFormatReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await timeFormatInst.updateOne(
      { format: indexData.format },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  // Currencies
  const currencySchema = new Schema({}, { timestamps: true, strict: false });
  const currencyReff = connReff.model("currencies", currencySchema);
  const currencyInst = connInst.model("currencies", currencySchema);

  var Data = await currencyReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await currencyInst.updateOne(
      { code: indexData.code },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  // Appointment status
  const appStatusSchema = new Schema({}, { timestamps: true, strict: false });
  // index for case insensitive unique
  appStatusSchema.index(
  { name: 1 },
  {
    collation: { locale: "en", strength: 2 },
    unique: true,
  }
);
  const appStatusReff = connReff.model("app_status", appStatusSchema);
  const appStatusInst = connInst.model("app_status", appStatusSchema);

  var Data = await appStatusReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await appStatusInst.updateOne(
      { name: indexData.name },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  // Package types
  const pkgTypesSchema = new Schema({}, { timestamps: true, strict: false });
  const pkgTypesReff = connReff.model("pkg_type", pkgTypesSchema);
  const pkgTypesInst = connInst.model("pkg_type", pkgTypesSchema);

  var Data = await pkgTypesReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await pkgTypesInst.updateOne(
      { id: indexData.id },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  // Sequence
  const sequenceSchema = new Schema({}, { timestamps: true, strict: false });
  const sequenceReff = connReff.model("sequence", sequenceSchema, "sequence");
  const sequenceInst = connInst.model("sequence", sequenceSchema, "sequence");

  var Data = await sequenceReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await sequenceInst.updateOne(
      { id: indexData.id },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  // OTC Client
  const clientSchema = new Schema({}, { timestamps: true, strict: false });
  const clientReff = connReff.model("client", clientSchema);
  const clientInst = connInst.model("client", clientSchema);

  var Data = await clientReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await clientInst.updateOne(
      { otc: indexData.otc },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  // OTC Patient
  const patientSchema = new Schema({}, { timestamps: true, strict: false });
  const patientReff = connReff.model("patient", patientSchema);
  const patientInst = connInst.model("patient", patientSchema);

  var Data = await patientReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await patientInst.updateOne(
      { otc: indexData.otc },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

  // OTC Encounter
  const encounterSchema = new Schema({}, { timestamps: true, strict: false });
  const encounterReff = connReff.model("encounter", encounterSchema);
  const encounterInst = connInst.model("encounter", encounterSchema);

  var Data = await encounterReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await encounterInst.updateOne(
      { otc: indexData.otc },
      { $setOnInsert: indexData },
      { upsert: true, lean: true }
    );
  });

    // credit Types
    const creditTypeSchema = new Schema({      
      id: {
      type: String,
      trim: true,
    }
  }, { timestamps: true, strict: false });
    const creditTypeReff = connReff.model("credit_type", creditTypeSchema);
    const creditTypeInst = connInst.model("credit_type", creditTypeSchema);
  
    var Data = await creditTypeReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();
  
    Data.forEach(async (indexData) => {
      const doc = await creditTypeInst.updateOne(
        { id: indexData.id },
        { $setOnInsert: indexData },
        { upsert: true, lean: true }
      );
    });

  console.log("Completed");
  res.status(200).json({ msg: "Data imported successfully" });
};
