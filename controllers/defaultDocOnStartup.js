const mongoose = require("mongoose");
const Schema = mongoose.Schema;

exports.pushData = async (req, res) => {
  try {
    const instanceURL = req.body?.mongoInstUrl ?? null;
    if (!instanceURL) {
      throw new Error("Instance url is required");
    }
    const connReff = mongoose.createConnection(process.env.MONGO);
    const connInst = mongoose.createConnection(instanceURL);

    // States
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
    await stateInst.syncIndexes();

    var Data = await stateReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return stateInst.updateOne(
          { recordID: indexData.recordID },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Plan Type
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
    await plantypeInst.syncIndexes();

    var Data = await plantypeReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return plantypeInst.updateOne(
          { id: indexData.id, recordID: indexData.recordID },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Plan Action
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
    await plan_actionInst.syncIndexes();

    var Data = await plan_actionReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return plan_actionInst.updateOne(
          { id: indexData.id },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

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

    const contentTypeReff = connReff.model("content_type", contentTypeSchema);
    const contentTypeInst = connInst.model("content_type", contentTypeSchema);

    var Data = await contentTypeReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return contentTypeInst.updateOne(
          { id: indexData.id },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Species
    const speciesSchema = new Schema({}, { timestamps: true, strict: false });
    // index for case insensitive unique
    speciesSchema.index(
      { name: 1 },
      {
        collation: { locale: "en", strength: 2 },
        unique: true,
      }
    );

    const speciesReff = connReff.model("species", speciesSchema);
    const speciesInst = connInst.model("species", speciesSchema);
    await speciesInst.syncIndexes();

    var Data = await speciesReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return speciesInst.updateOne(
          { recordID: indexData.recordID },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Breed
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
    await breedInst.syncIndexes();

    var Data = await breedReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return breedInst.updateOne(
          { recordID: indexData.recordID },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Sex
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
    await sexInst.syncIndexes();

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

    await Promise.allSettled(
      Data.map((indexData) => {
        return sexInst.updateOne(
          { recordID: indexData.recordID },
          //{ $setOnInsert: databody },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Color
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
    await colorInst.syncIndexes();

    var Data = await colorReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return colorInst.updateOne(
          { recordID: indexData.recordID },
          //{ $setOnInsert: databody },
          { $setOnInsert: indexData },

          { upsert: true, lean: true }
        );
      })
    );

    // Country
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
    await countryInst.syncIndexes();

    var Data = await countryReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return countryInst.updateOne(
          { recordID: indexData.recordID },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Instance
    const instanceSchema = new Schema({}, { timestamps: true, strict: false });
    const instanceReff = connReff.model("instance", instanceSchema);
    const instanceInst = connInst.model("instance", instanceSchema);

    var Data = await instanceReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return instanceInst.updateOne(
          { recordID: indexData.recordID },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Timezone
    const timezoneSchema = new Schema({}, { timestamps: true, strict: false });
    const timezoneReff = connReff.model("timezone", timezoneSchema);
    const timezoneInst = connInst.model("timezone", timezoneSchema);

    var Data = await timezoneReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return timezoneInst.updateOne(
          { name: indexData.name, abbr: indexData.abbr },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Phone Type
    const phone_typeSchema = new Schema(
      {},
      { timestamps: true, strict: false }
    );
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
    await phone_typeInst.syncIndexes();

    var Data = await phone_typeReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return phone_typeInst.updateOne(
          { recordID: indexData.recordID },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Species Color
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

    await Promise.allSettled(
      Data.map((indexData) => {
        return species_colorInst.updateOne(
          { recordID: indexData.recordID },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Staff Designation
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
    await staff_designationInst.syncIndexes();

    var Data = await staff_designationReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return staff_designationInst.updateOne(
          { code: indexData.code },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Specialisation
    const specialistSchema = new Schema(
      {},
      { timestamps: true, strict: false }
    );
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
    await specialistInst.syncIndexes();

    var Data = await specialistReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return specialistInst.updateOne(
          { recordID: indexData.recordID },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // S3 config
    const s3_configSchema = new Schema({}, { timestamps: true, strict: false });
    const s3_configReff = connReff.model("s3_config", s3_configSchema);
    const s3_configInst = connInst.model("s3_config", s3_configSchema);

    var Data = await s3_configReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return s3_configInst.updateOne(
          { recordID: indexData.recordID },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Reference
    const referenceSchema = new Schema({}, { timestamps: true, strict: false });
    const referenceReff = connReff.model("reference", referenceSchema);
    const referenceInst = connInst.model("reference", referenceSchema);

    var Data = await referenceReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return referenceInst.updateOne(
          { recordID: indexData.recordID },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Market category
    const mrkt_categorySchema = new Schema(
      {},
      { timestamps: true, strict: false }
    );
    const mrkt_categoryReff = connReff.model(
      "mrkt_category",
      mrkt_categorySchema,
      "mrkt_category"
    );
    const mrkt_categoryInst = connInst.model(
      "mrkt_category",
      mrkt_categorySchema,
      "mrkt_category"
    );

    var Data = await mrkt_categoryReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return mrkt_categoryInst.updateOne(
          { recordID: indexData.recordID },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Market ITEMS
    const mrkt_itemSchema = new Schema(
      {
        key: {
          type: String,
          unique: true,
          required: true,
          trim: true,
        },
        name: {
          type: String,
          required: true,
          trim: true,
        },
      },
      { timestamps: true, strict: false }
    );
    // index for case insensitive unique
    mrkt_itemSchema.index(
      { name: 1 },
      {
        collation: { locale: "en", strength: 2 },
        unique: true,
      }
    );
    const mrkt_itemReff = connReff.model("mrkt_item", mrkt_itemSchema);
    const mrkt_itemInst = connInst.model("mrkt_item", mrkt_itemSchema);
    await mrkt_itemInst.syncIndexes();

    var Data = await mrkt_itemReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return mrkt_itemInst.updateOne(
          { key: indexData.key },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Market configuration
    const mrktConfigSchema = new Schema(
      {},
      { timestamps: true, strict: false }
    );
    const mrktConfigReff = connReff.model(
      "mrkt_config",
      mrktConfigSchema,
      "mrkt_config"
    );
    const mmrktConfigInst = connInst.model(
      "mrkt_config",
      mrktConfigSchema,
      "mrkt_config"
    );

    var Data = await mrktConfigReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return mmrktConfigInst.updateOne(
          { app_no: indexData.app_no },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Diagnisus
    const diagnosisSchema = new Schema({}, { timestamps: true, strict: false });
    const diagnosisReff = connReff.model("diagnosis", diagnosisSchema);
    const diagnosisInst = connInst.model("diagnosis", diagnosisSchema);

    var Data = await diagnosisReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return diagnosisInst.updateOne(
          { recordID: indexData.recordID },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Soap Types
    const soap_typeSchema = new Schema(
      {
        id: {
          type: String,
          trim: true,
        },
      },
      { timestamps: true, strict: false }
    );
    const soap_typeReff = connReff.model(
      "soap_type",
      soap_typeSchema,
      "soap_type"
    );
    const soap_typeInst = connInst.model(
      "soap_type",
      soap_typeSchema,
      "soap_type"
    );

    var Data = await soap_typeReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return soap_typeInst.updateOne(
          { id: indexData.id, recordID: indexData.recordID },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Template masters
    const template_masterSchema = new Schema(
      {
        id: {
          type: String,
          trim: true,
        },
        name: {
          type: String,
          unique: true,
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

    await Promise.allSettled(
      Data.map((indexData) => {
        return template_masterInst.updateOne(
          { id: indexData.id },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

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
    await template_typeInst.syncIndexes();

    var Data = await template_typeReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return template_typeInst.updateOne(
          { id: indexData.id },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Template keys
    const template_keySchema = new Schema(
      { tag: { type: String, unique: true } },
      { timestamps: true, strict: false }
    );
    const template_keyReff = connReff.model("template_key", template_keySchema);
    const template_keyInst = connInst.model("template_key", template_keySchema);
    await template_keyInst.syncIndexes();

    var Data = await template_keyReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return template_keyInst.updateOne(
          { tag: indexData.tag },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Template keys map
    const template_keymapSchema = new Schema(
      { tempId: { type: Schema.Types.ObjectId, index: true } },
      { timestamps: true, strict: false }
    );
    const template_keymapReff = connReff.model(
      "template_keymap",
      template_keymapSchema
    );
    const template_keymapInst = connInst.model(
      "template_keymap",
      template_keymapSchema
    );
    await template_keymapInst.syncIndexes();

    var Data = await template_keymapReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return template_keymapInst.updateOne(
          { keyId: indexData.keyId, tempId: indexData.tempId },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Templates
    const templateSchema = new Schema(
      { name: { type: String, unique: true } },
      { timestamps: true, strict: false }
    );
    const templateReff = connReff.model("template", templateSchema);
    const templateInst = connInst.model("template", templateSchema);
    await templateInst.syncIndexes();

    var Data = await templateReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return templateInst.updateOne(
          { name: indexData.name },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

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

    await Promise.allSettled(
      Data.map((indexData) => {
        return usergrp_keyInst.updateOne(
          { name: indexData.name },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );
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

    await Promise.allSettled(
      Data.map((indexData) => {
        return langCfg_keyInst.updateOne(
          { id: indexData.id },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );
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

    await Promise.allSettled(
      Data.map((indexData) => {
        return modulesInst.updateOne(
          { id: indexData.id },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

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

    await Promise.allSettled(
      Data.map((indexData) => {
        return subModulesInst.updateOne(
          { id: indexData.id },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

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

    await Promise.allSettled(
      Data.map((indexData) => {
        return menuInst.updateOne(
          { id: indexData.id },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

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

    await Promise.allSettled(
      Data.map((indexData) => {
        return actionsInst.updateOne(
          { id: indexData.id },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

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

    await Promise.allSettled(
      Data.map((indexData) => {
        return pagesInst.updateOne(
          { id: indexData.id },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Date format
    const dateFormatSchema = new Schema(
      {},
      { timestamps: true, strict: false }
    );
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

    await Promise.allSettled(
      Data.map((indexData) => {
        return dateFormatInst.updateOne(
          { format: indexData.format },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Time format
    const timeFormatSchema = new Schema(
      {},
      { timestamps: true, strict: false }
    );
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

    await Promise.allSettled(
      Data.map((indexData) => {
        return timeFormatInst.updateOne(
          { format: indexData.format },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Currencies
    const currencySchema = new Schema({}, { timestamps: true, strict: false });
    const currencyReff = connReff.model("currencies", currencySchema);
    const currencyInst = connInst.model("currencies", currencySchema);

    var Data = await currencyReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return currencyInst.updateOne(
          { recordID: indexData.recordID },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

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
    await appStatusInst.syncIndexes();

    var Data = await appStatusReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return appStatusInst.updateOne(
          { name: indexData.name },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Package types
    const pkgTypesSchema = new Schema({}, { timestamps: true, strict: false });
    const pkgTypesReff = connReff.model("pkg_type", pkgTypesSchema);
    const pkgTypesInst = connInst.model("pkg_type", pkgTypesSchema);

    var Data = await pkgTypesReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return pkgTypesInst.updateOne(
          { id: indexData.id },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Sequence
    const sequenceSchema = new Schema({}, { timestamps: true, strict: false });
    const sequenceReff = connReff.model("sequence", sequenceSchema, "sequence");
    const sequenceInst = connInst.model("sequence", sequenceSchema, "sequence");

    var Data = await sequenceReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return sequenceInst.updateOne(
          { id: indexData.id },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // OTC Client
    const clientSchema = new Schema({}, { timestamps: true, strict: false });
    const clientReff = connReff.model("client", clientSchema);
    const clientInst = connInst.model("client", clientSchema);

    var Data = await clientReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return clientInst.updateOne(
          { otc: indexData.otc },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // OTC Patient
    const patientSchema = new Schema({}, { timestamps: true, strict: false });
    patientSchema.index({ clientId: 1, patientInfo: "text" });
    const patientReff = connReff.model("patient", patientSchema);
    const patientInst = connInst.model("patient", patientSchema);
    await patientInst.syncIndexes();

    var Data = await patientReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return patientInst.updateOne(
          { otc: indexData.otc },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // OTC Encounter
    const encounterSchema = new Schema({}, { timestamps: true, strict: false });
    const encounterReff = connReff.model("encounter", encounterSchema);
    const encounterInst = connInst.model("encounter", encounterSchema);

    var Data = await encounterReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return encounterInst.updateOne(
          { otc: indexData.otc },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // credit Types
    const creditTypeSchema = new Schema(
      {
        id: {
          type: String,
          trim: true,
        },
      },
      { timestamps: true, strict: false }
    );
    const creditTypeReff = connReff.model("credit_type", creditTypeSchema);
    const creditTypeInst = connInst.model("credit_type", creditTypeSchema);

    var Data = await creditTypeReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return creditTypeInst.updateOne(
          { recordID: indexData.recordID },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Label Setup
    const label_setupSchema = new Schema(
      {},
      { timestamps: true, strict: false }
    );
    const label_setupReff = connReff.model(
      "label_setup",
      label_setupSchema,
      "label_setup"
    );
    const label_setupInst = connInst.model(
      "label_setup",
      label_setupSchema,
      "label_setup"
    );

    var Data = await label_setupReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return label_setupInst.updateOne(
          { _id: indexData._id },
          { $set: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Consult Dspecies
    const consult_dspeciesSchema = new Schema(
      {},
      { timestamps: true, strict: false }
    );
    const consult_dspeciesReff = connReff.model(
      "consult_dspecies",
      consult_dspeciesSchema
    );
    const consult_dspeciesInst = connInst.model(
      "consult_dspecies",
      consult_dspeciesSchema
    );

    var Data = await consult_dspeciesReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return consult_dspeciesInst.updateOne(
          { recordID: indexData.recordID },
          { $set: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // consult system
    const consult_systemSchema = new Schema(
      {},
      { timestamps: true, strict: false }
    );
    const consult_systemReff = connReff.model(
      "consult_system",
      consult_systemSchema
    );
    const consult_systemInst = connInst.model(
      "consult_system",
      consult_systemSchema
    );

    var Data = await consult_systemReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return consult_systemInst.updateOne(
          { recordID: indexData.recordID },
          { $set: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Complaint
    const complaintSchema = new Schema({}, { timestamps: true, strict: false });
    const complaintReff = connReff.model("complaint", complaintSchema);
    const complaintInst = connInst.model("complaint", complaintSchema);

    var Data = await complaintReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return complaintInst.updateOne(
          { recordID: indexData.recordID },
          { $set: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Consult Dsigns
    const consult_dsignsSchema = new Schema(
      {},
      { timestamps: true, strict: false }
    );
    const consult_dsignsReff = connReff.model(
      "consult_dsigns",
      consult_dsignsSchema
    );
    const consult_dsignsInst = connInst.model(
      "consult_dsigns",
      consult_dsignsSchema
    );

    var Data = await consult_dsignsReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return consult_dsignsInst.updateOne(
          { recordID: indexData.recordID },
          { $set: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Plan category
    const planCatSchema = new Schema({}, { timestamps: true, strict: false });
    // index for case insensitive unique
    planCatSchema.index(
      { name: 1, planTypeId: 1 },
      {
        collation: { locale: "en", strength: 2 },
        unique: true,
      }
    );
    const planCatReff = connReff.model("plan_cat", planCatSchema);
    const planCatInst = connInst.model("plan_cat", planCatSchema);
    await planCatInst.syncIndexes();

    var Data = await planCatReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return planCatInst.updateOne(
          { recordID: indexData.recordID },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Plan sub category
    const planSubCatSchema = new Schema(
      {},
      { timestamps: true, strict: false }
    );
    // index for case insensitive unique
    planSubCatSchema.index(
      { name: 1, categoryId: 1 },
      {
        collation: { locale: "en", strength: 2 },
        unique: true,
      }
    );
    const planSubCatReff = connReff.model("plan_subcat", planSubCatSchema);
    const planSubCatInst = connInst.model("plan_subcat", planSubCatSchema);
    await planSubCatInst.syncIndexes();

    var Data = await planSubCatReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return planSubCatInst.updateOne(
          { recordID: indexData.recordID },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Payment Group
    const payGrpSchema = new Schema({}, { timestamps: true, strict: false });
    // index for case insensitive unique
    payGrpSchema.index(
      { name: 1 },
      {
        collation: { locale: "en", strength: 2 },
        unique: true,
      }
    );
    const payGrpReff = connReff.model("pay_group", payGrpSchema);
    const payGrpInst = connInst.model("pay_group", payGrpSchema);
    await payGrpInst.syncIndexes();

    var Data = await payGrpReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return payGrpInst.updateOne(
          { recordID: indexData.recordID },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Payment Type
    const payTypeSchema = new Schema({}, { timestamps: true, strict: false });
    // index for case insensitive unique
    payTypeSchema.index(
      { name: 1, paymentGroupId: 1 },
      {
        collation: { locale: "en", strength: 2 },
        unique: true,
      }
    );
    const payTypeReff = connReff.model("pay_type", payTypeSchema);
    const payTypeInst = connInst.model("pay_type", payTypeSchema);
    await payTypeInst.syncIndexes();

    var Data = await payTypeReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return payTypeInst.updateOne(
          { recordID: indexData.recordID },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // Reason for visit
    const visitRsnSchema = new Schema({}, { timestamps: true, strict: false });
    // index for case insensitive unique
    visitRsnSchema.index(
      { name: 1 },
      {
        collation: { locale: "en", strength: 2 },
        unique: true,
      }
    );
    const visitRsnReff = connReff.model("visitreason", visitRsnSchema);
    const visitRsnInst = connInst.model("visitreason", visitRsnSchema);
    await visitRsnInst.syncIndexes();

    var Data = await visitRsnReff
      .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
      .lean();

    await Promise.allSettled(
      Data.map((indexData) => {
        return visitRsnInst.updateOne(
          { name: indexData.name },
          { $setOnInsert: indexData },
          { upsert: true, lean: true }
        );
      })
    );

    // // Relationship
    // const relationSchema = new Schema({}, { timestamps: true, strict: false });
    // const relationReff = connReff.model("relationship", relationSchema);
    // const relationInst = connInst.model("relationship", relationSchema);

    // var Data = await relationReff
    //   .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    //   .lean();

    // await Promise.allSettled(
    //   Data.map((indexData) => {
    //     return relationInst.updateOne(
    //       { name: indexData.name },
    //       { $setOnInsert: indexData },
    //       { upsert: true, lean: true }
    //     );
    //   })
    // );

    console.log("Completed");
    res.status(200).json({ msg: "Data imported successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};
