const remindergrp = require("../models/remindergrp");
//const status = require("../models/status");

// Update a Doc by the id in the request
exports.update = async (req, res) => {
  try {
    const { id } = req.body;

    // let querystatus = await status.find({ id: req.body.status });

    let param = {
      id: id,
      recordID: req.body.recordID,
      name: req.body.name,
      remMail: req.body.rem_mail == "veton14" ? 14 : 15,
      remEmail: req.body.rem_email == "veton14" ? 14 : 15,
      remSms: req.body.rem_sms == "veton14" ? 14 : 15,
      remEncList: req.body.rem_enc_list == "veton14" ? 14 : 15,
      remPhone: req.body.rem_phone == "veton14" ? 14 : 15,
      remStatements: req.body.rem_statements == "veton14" ? 14 : 15,
      remInvoices: req.body.rem_invoices == "veton14" ? 14 : 15,
      remFuture: req.body.rem_future == "veton14" ? 14 : 15,
      factor: req.body.factor == "veton14" ? 14 : 15,
      pastServices: req.body.past_services == "veton14" ? 14 : 15,
      status: req.body.status,
      childCount: 1,
      createdAt: req.body.created_on,
      updatedAt: req.body.modified_on,
    };

    if (id) {
      let query = await remindergrp.find({ id: id });

      if (!query.length) {
        const Doc = new remindergrp(param);
        const doc = await Doc.save();

        console.log("New Record Created ");
      } else {
        let filter = {};
        filter.id = id;

        let doc = await remindergrp.findOneAndUpdate(filter, param);
      }
    } else {
      const { remindergrpid } = req.body;
      let filter = {};
      if (remindergrpid) {
        filter.id = remindergrpid;
      }

      let doc = await remindergrp.findOneAndUpdate(filter, param);
    }

    res.json("Updated");
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
  }
};
