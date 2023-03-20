const phonetype = require("../models/phonetype");
const status = require("../models/status");

// Update a Doc by the id in the request
exports.update = async (req, res) => {
  try {
    const { id } = req.body;

    let querysms = await status.find({ id: req.body.sms });
    let smsVal;
    if (querysms[0].recordID == "7") {
      smsVal = 1;
    } else {
      smsVal = 0;
    }
    let querystatus = await status.find({ id: req.body.sms });

    let param = {
      id: id,
      recordID: req.body.recordID,
      name: req.body.title,
      format: req.body.format,
      sms: smsVal,
      status: querystatus[0].recordID,
      createdAt: req.body.createdon,
      updatedAt: req.body.modifiedon,
    };

    if (id) {
      let query = await phonetype.find({ id: id });
      console.log("query: ", query);

      if (!query.length) {
        const Doc = new phonetype(param);
        const doc = await Doc.save();

        console.log("New Record Created ");
      } else {
        let filter = {};
        filter.id = id;

        let doc = await phonetype.findOneAndUpdate(filter, param);
      }
    } else {
      const { phonetypeid } = req.body;
      let filter = {};
      if (phonetypeid) {
        filter.id = phonetypeid;
      }

      let doc = await phonetype.findOneAndUpdate(filter, param);
    }

    res.json("Updated");
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
  }
};
