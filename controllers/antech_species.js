const antech_species = require("../models/antech_species");

// Update a Doc by the id in the request
exports.update = async (req, res) => {
  try {
    const { id } = req.body;
    if (id) {
      let query = await antech_species.find({ id: id });
      console.log("query: ", query);

      if (!query.length) {
        const body = req.body;
        const Doc = new antech_species(body);
        const doc = await Doc.save();

        console.log("New Record Created ");
      } else {
        let filter = {};
        filter.id = id;

        const body = req.body;
        let doc = await antech_species.findOneAndUpdate(filter, body);
      }
    } else {
      const { antech_speciesid } = req.body;
      let filter = {};
      if (antech_speciesid) {
        filter.id = antech_speciesid;
      }

      const body = req.body;
      let doc = await antech_species.findOneAndUpdate(filter, body);
    }

    res.json("Updated");
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
  }
};
