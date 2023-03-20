const app_schedules = require("../models/app_schedules");

// Update a Doc by the id in the request
exports.update = async (req, res) => {
  try {
    const { id } = req.body;
    if (id) {
      let query = await app_schedules.find({ id: id });
      console.log("query: ", query);

      if (!query.length) {
        const body = req.body;
        const Doc = new app_schedules(body);
        const doc = await Doc.save();

        console.log("New Record Created ");
      } else {
        let filter = {};
        filter.id = id;

        const body = req.body;
        let doc = await app_schedules.findOneAndUpdate(filter, body);
      }
    } else {
      const { app_id } = req.body;
      let filter = {};
      if (app_id) {
        filter.id = app_id;
      }

      const body = req.body;
      let doc = await app_schedules.findOneAndUpdate(filter, body);
    }

    res.json("Updated");
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
  }
};
