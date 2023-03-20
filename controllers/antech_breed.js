const antech_breed = require("../models/antech_breed");

// Update a Doc by the id in the request
exports.update = async (req, res) => {
  try {
    const { id } = req.body;
    if (id) {
      let query = await antech_breed.find({ id: id });
      console.log("query: ", query);

      if (!query.length) {
        const body = req.body;
        const Doc = new antech_breed(body);
        const doc = await Doc.save();

        console.log("New Record Created ");
      } else {
        let filter = {};
        filter.id = id;

        const body = req.body;
        let doc = await antech_breed.findOneAndUpdate(filter, body);
      }
    } else {
      const { antech_breedid } = req.body;
      let filter = {};
      if (antech_breedid) {
        filter.id = antech_breedid;
      }

      const body = req.body;
      let doc = await antech_breed.findOneAndUpdate(filter, body);
    }

    res.json("Updated");
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
  }
};
