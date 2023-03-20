const encounter = require("../models/encounter");

// Update a Doc by the id in the request
exports.update = async (req, res) => {
  try {
    const { id } = req.body;
    if (id) {
      let query = await encounter.find({ id: id });
      console.log("query: ", query);

      if (!query.length) {
        const body = req.body;
        const Doc = new encounter(body);
        const doc = await Doc.save();

        console.log("New Record Created ");
      } else {
        let filter = {};
        filter.id = id;

        const body = req.body;
        let doc = await encounter.findOneAndUpdate(filter, body);
      }
    } else {
      const { encounterid } = req.body;
      let filter = {};
      if (encounterid) {
        filter.id = encounterid;
      }

      const body = req.body;
      let doc = await encounter.findOneAndUpdate(filter, body);
    }

    res.json("Updated");
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
  }
};
