const etemplate = require("../models/etemplate");

// Update a Doc by the id in the request
exports.update = async (req, res) => {
  try {
    const { id } = req.body;
    if (id) {
      let query = await etemplate.find({ id: id });
      console.log("query: ", query);

      if (!query.length) {
        const body = req.body;
        const Doc = new etemplate(body);
        const doc = await Doc.save();

        console.log("New Record Created ");
      } else {
        let filter = {};
        filter.id = id;

        const body = req.body;
        let doc = await etemplate.findOneAndUpdate(filter, body);
      }
    } else {
      const { etemplateid } = req.body;
      let filter = {};
      if (etemplateid) {
        filter.id = etemplateid;
      }

      const body = req.body;
      let doc = await etemplate.findOneAndUpdate(filter, body);
    }

    res.json("Updated");
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
  }
};
