const reminderplan = require("../models/reminderplan");
const remindergrp = require("../models/remindergrp");
const status = require("../models/status");
const planitem = require("../models/planitem");

// Update a Doc by the id in the request
exports.update = async (req, res) => {
  try {
    const { id } = req.body;

    let queryremindergrp = await remindergrp.find({ id: req.body.remgrpid });
    let querystatus = await status.find({ id: req.body.status });
    let querytype = await status.find({ id: req.body.type });
    let queryplanitem = await planitem.find({ id: req.body.otherplanid });

    let param = {
      id: id,
      recordID: req.body.recordID,
      remGrpId: queryremindergrp[0]._id,
      dueBefore: req.body.remind_before,
      dueIn: req.body.duein,
      expiry: req.body.expiry,
      interval: req.body.interval,
      status: querystatus[0].recordID,
      type: querytype[0].recordID,
      otherPlanId: queryplanitem[0]._id,
      createdAt: req.body.createdon,
      updatedAt: req.body.modifiedon,
    };

    if (id) {
      let query = await reminderplan.find({ id: id });
      console.log("query: ", query);

      if (!query.length) {
        const Doc = new reminderplan(param);
        const doc = await Doc.save();

        console.log("New Record Created ");
      } else {
        let filter = {};
        filter.id = id;

        let doc = await reminderplan.findOneAndUpdate(filter, param);
      }
    } else {
      const { reminderplanid } = req.body;
      let filter = {};
      if (reminderplanid) {
        filter.id = reminderplanid;
      }

      let doc = await reminderplan.findOneAndUpdate(filter, param);
    }

    res.json("Updated");
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
  }
};
