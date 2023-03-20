const appoint_view = require("../models/appoint_view");

// Update a Doc by the id in the request
exports.update = async (req, res) => {
  try {
    const { id } = req.body;
    if (id) {
      let query = await appoint_view.find({ id: id });
      console.log("query: ", query);

      if (!query.length) {
        const body = req.body;
        const Doc = new appoint_view(body);
        const doc = await Doc.save();

        console.log("New Record Created ");
      } else {
        let filter = {};
        filter.id = id;

        const body = req.body;
        let doc = await appoint_view.findOneAndUpdate(filter, body);
      }
    } else {
      const { appoint_viewid } = req.body;
      let filter = {};
      if (appoint_viewid) {
        filter.id = appoint_viewid;
      }

      const body = req.body;
      let doc = await appoint_view.findOneAndUpdate(filter, body);
    }

    res.json("Updated");
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
  }
};
