const grp_planitem = require("../models/grp_planitem");

// Update a Doc by the id in the request
exports.update = async (req, res) => {
  try {
    const { id } = req.body;
    if (id) {
      let query = await grp_planitem.find({ id: id });
      console.log("query: ", query);

      if (!query.length) {
        const body = req.body;
        const Doc = new grp_planitem(body);
        const doc = await Doc.save();

        console.log("New Record Created ");
      } else {
        let filter = {};
        filter.id = id;

        const body = req.body;
        let doc = await grp_planitem.findOneAndUpdate(filter, body);
      }
    } else {
      const { grp_planitemid } = req.body;
      let filter = {};
      if (grp_planitemid) {
        filter.id = grp_planitemid;
      }

      const body = req.body;
      let doc = await grp_planitem.findOneAndUpdate(filter, body);
    }

    res.json("Updated");
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
  }
};
