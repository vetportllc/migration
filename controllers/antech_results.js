const antech_results = require("../models/antech_results");

// Update a Doc by the id in the request
exports.update = async (req, res) => {
  try {
    const { id } = req.body;
    if (id) {
      let query = await antech_results.find({ id: id });
      console.log("query: ", query);

      if (!query.length) {
        const body = req.body;
        const Doc = new antech_results(body);
        const doc = await Doc.save();

        console.log("New Record Created ");
      } else {
        let filter = {};
        filter.id = id;

        const body = req.body;
        let doc = await antech_results.findOneAndUpdate(filter, body);
      }
    } else {
      const { antech_resultsid } = req.body;
      let filter = {};
      if (antech_resultsid) {
        filter.id = antech_resultsid;
      }

      const body = req.body;
      let doc = await antech_results.findOneAndUpdate(filter, body);
    }

    res.json("Updated");
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
  }
};
