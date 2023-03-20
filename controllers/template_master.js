// const template_master = require("../models/template_master");

// // Update a Doc by the id in the request
// exports.update = async (req, res) => {
//   try {
//     const { id } = req.body;
//     if (id) {
//       let query = await template_master.find({ id: id });
//       console.log("query: ", query);

//       if (!query.length) {
//         const body = req.body;
//         const Doc = new template_master(body);
//         const doc = await Doc.save();

//         console.log("New Record Created ");
//       } else {
//         let filter = {};
//         filter.id = id;

//         const body = req.body;
//         let doc = await template_master.findOneAndUpdate(filter, body);
//       }
//     } else {
//       const { mastertype_id } = req.body;
//       let filter = {};
//       if (mastertype_id) {
//         filter.id = mastertype_id;
//       }

//       const body = req.body;
//       let doc = await template_master.findOneAndUpdate(filter, body);
//     }

//     res.json("Updated");
//   } catch (error) {
//     res.status(500).json(error);
//     console.log("error: ", error);
//   }
// };

const template_master = require("../models/template_master");
const status = require("../models/status");

// Update a Doc by the id in the request
exports.update = async (req, res) => {
  try {
    const { id } = req.body;

    let querystatus = await status.find({ id: req.body.status });
    let statusVal;
    if (querystatus[0].recordID == "1") {
      statusVal = true;
    } else {
      statusVal = false;
    }

    let param = {
      id: id,
      recordID: req.body.recordID,
      name: req.body.master_type,
      status: statusVal,
    };

    if (id) {
      let query = await template_master.find({ id: id });
      console.log("query: ", query);

      if (!query.length) {
        const Doc = new template_master(param);
        const doc = await Doc.save();

        console.log("New Record Created ");
      } else {
        let filter = {};
        filter.id = id;

        let doc = await template_master.findOneAndUpdate(filter, param);
      }
    } else {
      const { mastertype_id } = req.body;
      let filter = {};
      if (mastertype_id) {
        filter.id = mastertype_id;
      }

      let doc = await template_master.findOneAndUpdate(filter, param);
    }

    res.json("Updated");
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
  }
};
