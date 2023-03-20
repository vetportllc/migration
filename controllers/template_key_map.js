const template_key_map = require("../models/template_key_map");
const keyword = require("../models/keyword");
const template_type = require("../models/template_type");

// Update a Doc by the id in the request
exports.update = async (req, res) => {
  try {
    const { id } = req.body;

    let querykey = await keyword.find({ id: req.body.keyword_id });
    let querytemplate = await template_type.find({ id: req.body.type_id });

    let param = {
      id: id,
      recordID: req.body.recordID,
      keyId: querykey[0]._id,
      tempId: querytemplate[0]._id,
    };

    if (id) {
      let query = await template_key_map.find({ id: id });

      if (!query.length) {
        const Doc = new template_key_map(param);
        const doc = await Doc.save();

        console.log("New Record Created ");
      } else {
        let filter = {};
        filter.id = id;

        let doc = await template_key_map.findOneAndUpdate(filter, param);
      }
    } else {
      const { templatekeymap_id } = req.body;
      let filter = {};
      if (templatekeymap_id) {
        filter.id = templatekeymap_id;
      }

      let doc = await template_key_map.findOneAndUpdate(filter, boparamdy);
    }

    res.json("Updated");
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
  }
};
