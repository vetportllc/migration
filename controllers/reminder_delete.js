const reminder_delete = require("../models/reminder_delete");

// Update a Doc by the id in the request
exports.update = async (req, res) => {
  try {
    const { id } = req.body;
    if (id) {
      let query = await reminder_delete.find({ id: id });
      console.log("query: ", query);

      if (!query.length) {
        const body = req.body;
        const Doc = new reminder_delete(body);
        const doc = await Doc.save();

        console.log("New Record Created ");
      } else {
        let filter = {};
        filter.id = id;

        const body = req.body;
        let doc = await reminder_delete.findOneAndUpdate(filter, body);
      }
    } else {
      const { reminder_deleteid } = req.body;
      let filter = {};
      if (reminder_deleteid) {
        filter.id = reminder_deleteid;
      }

      const body = req.body;
      let doc = await reminder_delete.findOneAndUpdate(filter, body);
    }

    res.json("Updated");
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
  }
};
