const clinic = require("../models/clinic");

// Update a Doc by the id in the request
exports.update = async (req, res) => {
  try {
    const { id } = req.body;
    if (id) {
      let query = await clinic.find({ id: id });
      console.log("query: ", query);

      if (!query.length) {
        const body = req.body;
        const Doc = new clinic(body);
        const doc = await Doc.save();

        console.log("New Record Created ");
      } else {
        let filter = {};
        filter.id = id;

        const body = req.body;
        let doc = await clinic.findOneAndUpdate(filter, body);
      }
    } else {
      const { clinicid } = req.body;
      let filter = {};
      if (clinicid) {
        filter.id = clinicid;
      }

      const body = req.body;
      let doc = await clinic.findOneAndUpdate(filter, body);
    }

    res.json("Updated");
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
  }
};
