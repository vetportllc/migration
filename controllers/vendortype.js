const vendortype = require("../models/vendortype");
const status = require("../models/status");

// Update a Doc by the id in the request
exports.update = async (req, res) => {
  try {
    const { id } = req.body;

    let querystatus = await status.find({ id: req.body.status });

    let param = {
      id: id,
      recordID: req.body.recordID,
      name: req.body.type,
      status: querystatus[0].recordID,
      desc: req.body.description,
      createdAt: req.body.createdon,
      updatedAt: req.body.modifiedon,
    };

    if (id) {
      let query = await vendortype.find({ id: id });
      console.log("query: ", query);

      if (!query.length) {
        const Doc = new vendortype(param);
        const doc = await Doc.save();

        console.log("New Record Created ");
      } else {
        let filter = {};
        filter.id = id;

        let doc = await vendortype.findOneAndUpdate(filter, param);
      }
    } else {
      const { vendortypeid } = req.body;
      let filter = {};
      if (vendortypeid) {
        filter.id = vendortypeid;
      }

      let doc = await vendortype.findOneAndUpdate(filter, param);
    }

    res.json("Updated");
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
  }
};
