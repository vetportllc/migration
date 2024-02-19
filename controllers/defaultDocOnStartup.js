const mongoose = require("mongoose");
const Schema = mongoose.Schema;

exports.pushData = async (req, res) => {
  const connReff = mongoose.createConnection(process.env.MONGO);
  const connInst = mongoose.createConnection(req.body.mongoInstUrl);

  const stateSchema = new Schema({}, { timestamps: true, strict: false });
  const stateReff = connReff.model("state", stateSchema);
  const stateInst = connInst.model("state", stateSchema);

  var Data = await stateReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await stateInst.updateOne(
      { recordID: indexData.recordID },
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
  const plantypeReff = connReff.model("plan_type", plantypeSchema);
  const plantypeInst = connInst.model("plan_type", plantypeSchema);

  var Data = await plantypeReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
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
  const plan_actionReff = connReff.model("planaction", plan_actionSchema);
  const plan_actionInst = connInst.model("planaction", plan_actionSchema);

  var Data = await plan_actionReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
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
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await packagecontentInst.updateOne(
      { id: indexData.id, recordID: indexData.recordID },
      { $set: indexData },
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
      { $set: indexData },
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
      { $set: indexData },
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
    let databody = {
      recordID: indexData.recordID,
      speciesId: indexData.speciesid,
      name: indexData.sex,
      icon: indexData.icon,
      iconimage: indexData.iconimage,
      status: indexData.status,
      is_neutered: indexData.is_neutered,
    };

    const doc = await sexInst.updateOne(
      { recordID: indexData.recordID },
      //{ $set: databody },
      { $set: indexData },
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
    let databody = {
      recordID: indexData.recordID,
      name: indexData.name,
      authority_id: indexData.authority_id,
      status: indexData.status,
      test: indexData.test,
    };

    const doc = await colorInst.updateOne(
      { recordID: indexData.recordID },
      //{ $set: databody },
      { $set: indexData },

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
      { $set: indexData },
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
      { $set: indexData },
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
      { $set: indexData },
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
      { $set: indexData },
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
      { $set: indexData },
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
      { $set: indexData },
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
      { $set: indexData },
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
      { $set: indexData },
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
      { $set: indexData },
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
      { $set: indexData },
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
      { $set: indexData },
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
      { $set: indexData },
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
      { $set: indexData },
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
      { $set: indexData },
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
      { $set: indexData },
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
      { $set: indexData },
      { upsert: true, lean: true }
    );
  });

  const pkg_typesSchema = new Schema({}, { timestamps: true, strict: false });
  const pkg_typesReff = connReff.model("pkg_types", pkg_typesSchema);
  const pkg_typesInst = connInst.model("pkg_types", pkg_typesSchema);

  var Data = await pkg_typesReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await pkg_typesInst.updateOne(
      { recordID: indexData.recordID },
      { $set: indexData },
      { upsert: true, lean: true }
    );
  });

  const label_setupSchema = new Schema({}, { timestamps: true, strict: false });
  const label_setupReff = connReff.model("label_setup", label_setupSchema);
  const label_setupInst = connInst.model("label_setup", label_setupSchema);

  var Data = await label_setupReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await label_setupInst.updateOne(
      { recordID: indexData.recordID },
      { $set: indexData },
      { upsert: true, lean: true }
    );
  });

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

  Data.forEach(async (indexData) => {
    const doc = await consult_dspeciesInst.updateOne(
      { recordID: indexData.recordID },
      { $set: indexData },
      { upsert: true, lean: true }
    );
  });

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

  Data.forEach(async (indexData) => {
    const doc = await consult_systemInst.updateOne(
      { recordID: indexData.recordID },
      { $set: indexData },
      { upsert: true, lean: true }
    );
  });

  const complaintSchema = new Schema({}, { timestamps: true, strict: false });
  const complaintReff = connReff.model("complaint", complaintSchema);
  const complaintInst = connInst.model("complaint", complaintSchema);

  var Data = await complaintReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await complaintInst.updateOne(
      { recordID: indexData.recordID },
      { $set: indexData },
      { upsert: true, lean: true }
    );
  });

  const currencySchema = new Schema({}, { timestamps: true, strict: false });
  const currencyReff = connReff.model("currency", currencySchema);
  const currencyInst = connInst.model("currency", currencySchema);

  var Data = await currencyReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await currencyInst.updateOne(
      { recordID: indexData.recordID },
      { $set: indexData },
      { upsert: true, lean: true }
    );
  });

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

  Data.forEach(async (indexData) => {
    const doc = await consult_dsignsInst.updateOne(
      { recordID: indexData.recordID },
      { $set: indexData },
      { upsert: true, lean: true }
    );
  });

  const app_statusSchema = new Schema({}, { timestamps: true, strict: false });
  const app_statusReff = connReff.model("app_status", app_statusSchema);
  const app_statusInst = connInst.model("app_status", app_statusSchema);

  var Data = await app_statusReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await app_statusInst.updateOne(
      { recordID: indexData.recordID },
      { $set: indexData },
      { upsert: true, lean: true }
    );
  });

  const credit_typeSchema = new Schema({}, { timestamps: true, strict: false });
  const credit_typeReff = connReff.model("credit_type", credit_typeSchema);
  const credit_typeInst = connInst.model("credit_type", credit_typeSchema);

  var Data = await credit_typeReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await credit_typeInst.updateOne(
      { recordID: indexData.recordID },
      { $set: indexData },
      { upsert: true, lean: true }
    );
  });

  const plan_catsSchema = new Schema({}, { timestamps: true, strict: false });
  const plan_catsReff = connReff.model("plan_cats", plan_catsSchema);
  const plan_catsInst = connInst.model("plan_cats", plan_catsSchema);

  var Data = await plan_catsReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await plan_catsInst.updateOne(
      { recordID: indexData.recordID },
      { $set: indexData },
      { upsert: true, lean: true }
    );
  });

  const plan_subcatsSchema = new Schema(
    {},
    { timestamps: true, strict: false }
  );
  const plan_subcatsReff = connReff.model("plan_subcats", plan_subcatsSchema);
  const plan_subcatsInst = connInst.model("plan_subcats", plan_subcatsSchema);

  var Data = await plan_subcatsReff
    .find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .lean();

  Data.forEach(async (indexData) => {
    const doc = await plan_subcatsInst.updateOne(
      { recordID: indexData.recordID },
      { $set: indexData },
      { upsert: true, lean: true }
    );
  });

  console.log("Completed");
  res.json("ok");
};
