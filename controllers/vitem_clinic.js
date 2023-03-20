const vitem_clinic = require("../models/vitem_clinic");

// Update a Doc by the id in the request
exports.update = async (req, res) => {
  try {
    const { id } = req.body;
    if (id) {
      let query = await vitem_clinic.find({ id: id });
      console.log("query: ", query);

      if (!query.length) {
        const body = req.body;
        const Doc = new vitem_clinic(body);
        const doc = await Doc.save();

        console.log("New Record Created ");
      } else {
        let filter = {};
        filter.id = id;

        const body = req.body;
        let doc = await vitem_clinic.findOneAndUpdate(filter, body);
      }
    } else {
      const { vitemclinicid } = req.body;
      let filter = {};
      if (vitemclinicid) {
        filter.id = vitemclinicid;
      }

      const body = req.body;
      let doc = await vitem_clinic.findOneAndUpdate(filter, body);
    }

    res.json("Updated");
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
  }
};
