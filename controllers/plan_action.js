const plan_action = require("../models/plan_action");

// Update a Doc by the id in the request
exports.update = async (req, res) => {
  try {
    const { id } = req.body;
    if (id) {
      let query = await plan_action.find({ id: id });
      console.log("query: ", query);

      if (!query.length) {
        const body = req.body;
        const Doc = new plan_action(body);
        const doc = await Doc.save();

        console.log("New Record Created ");
      } else {
        let filter = {};
        filter.id = id;

        const body = req.body;
        let doc = await plan_action.findOneAndUpdate(filter, body);
      }
    } else {
      const { plan_actionid } = req.body;
      let filter = {};
      if (plan_actionid) {
        filter.id = plan_actionid;
      }

      const body = req.body;
      let doc = await plan_action.findOneAndUpdate(filter, body);
    }

    res.json("Updated");
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
  }
};
