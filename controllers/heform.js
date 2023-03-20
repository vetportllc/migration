const heform = require("../models/heform");

// Update a Doc by the id in the request
exports.update = async (req, res) => {
  try {
    const { id } = req.body;
    if (id) {
      let query = await heform.find({ id: id });
      console.log("query: ", query);

      if (!query.length) {
        const body = req.body;
        const Doc = new heform(body);
        const doc = await Doc.save();

        console.log("New Record Created ");
      } else {
        let filter = {};
        filter.id = id;

        const body = req.body;
        let doc = await heform.findOneAndUpdate(filter, body);
      }
    } else {
      const { heformid } = req.body;
      let filter = {};
      if (heformid) {
        filter.id = heformid;
      }

      const body = req.body;
      let doc = await heform.findOneAndUpdate(filter, body);
    }

    res.json("Updated");
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
  }
};
