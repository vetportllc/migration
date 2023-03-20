const plansubcategory = require("../models/plansubcategory");

// Update a Doc by the id in the request
exports.update = async (req, res) => {
  try {
    const { id } = req.body;
    if (id) {
      let query = await plansubcategory.find({ id: id });
      console.log("query: ", query);

      if (!query.length) {
        const body = req.body;
        const Doc = new plansubcategory(body);
        const doc = await Doc.save();

        console.log("New Record Created ");
      } else {
        let filter = {};
        filter.id = id;

        const body = req.body;
        let doc = await plansubcategory.findOneAndUpdate(filter, body);
      }
    } else {
      const { plansubcategoryid } = req.body;
      let filter = {};
      if (plansubcategoryid) {
        filter.id = plansubcategoryid;
      }

      const body = req.body;
      let doc = await plansubcategory.findOneAndUpdate(filter, body);
    }

    res.json("Updated");
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
  }
};
