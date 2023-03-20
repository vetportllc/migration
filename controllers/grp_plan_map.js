const grp_plan_map = require("../models/grp_plan_map");

// Update a Doc by the id in the request
exports.update = async (req, res) => {
  try {
    const { id } = req.body;
    if (id) {
      let query = await grp_plan_map.find({ id: id });
      console.log("query: ", query);

      if (!query.length) {
        const body = req.body;
        const Doc = new grp_plan_map(body);
        const doc = await Doc.save();

        console.log("New Record Created ");
      } else {
        let filter = {};
        filter.id = id;

        const body = req.body;
        let doc = await grp_plan_map.findOneAndUpdate(filter, body);
      }
    } else {
      const { grp_plan_mapid } = req.body;
      let filter = {};
      if (grp_plan_mapid) {
        filter.id = grp_plan_mapid;
      }

      const body = req.body;
      let doc = await grp_plan_map.findOneAndUpdate(filter, body);
    }

    res.json("Updated");
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
  }
};
