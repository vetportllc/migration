const template_type = require("../models/template_type");

// Update a Doc by the id in the request
exports.update = async (req, res) => {
  try {
    const { id } = req.body;
    if (id) {
      let query = await template_type.find({ id: id });
      console.log("query: ", query);

      if (!query.length) {
        const body = req.body;
        const Doc = new template_type(body);
        const doc = await Doc.save();

        console.log("New Record Created ");
      } else {
        let filter = {};
        filter.id = id;

        const body = req.body;
        let doc = await template_type.findOneAndUpdate(filter, body);
      }
    } else {
      const { templatetype_id } = req.body;
      let filter = {};
      if (templatetype_id) {
        filter.id = templatetype_id;
      }

      const body = req.body;
      let doc = await template_type.findOneAndUpdate(filter, body);
    }

    res.json("Updated");
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
  }
};
