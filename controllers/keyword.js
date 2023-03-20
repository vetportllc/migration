// const keyword = require("../models/keyword");

// // Update a Doc by the id in the request
// exports.update = async (req, res) => {
//   try {
//     const { id } = req.body;
//     if (id) {
//       let query = await keyword.find({ id: id });
//       console.log("query: ", query);

//       if (!query.length) {
//         const body = req.body;
//         const Doc = new keyword(body);
//         const doc = await Doc.save();

//         console.log("New Record Created ");
//       } else {
//         let filter = {};
//         filter.id = id;

//         const body = req.body;
//         let doc = await keyword.findOneAndUpdate(filter, body);
//       }
//     } else {
//       const { keywordid } = req.body;
//       let filter = {};
//       if (keywordid) {
//         filter.id = keywordid;
//       }

//       const body = req.body;
//       let doc = await keyword.findOneAndUpdate(filter, body);
//     }

//     res.json("Updated");
//   } catch (error) {
//     res.status(500).json(error);
//     console.log("error: ", error);
//   }
// };

const keyword = require("../models/keyword");
const status = require("../models/status");

// Update a Doc by the id in the request
exports.update = async (req, res) => {
  try {
    const { id } = req.body;

    let querystatus = await status.find({ id: req.body.status });
    console.log("querystatus: ", querystatus);

    let param = {
      id: id,
      recordID: req.body.recordID,
      tag: req.body.tag,
      description: req.body.description,
      defaultvalue: req.body.defaultvalue,
      action: req.body.action,
      status: querystatus[0].recordID,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
    };

    if (id) {
      let query = await keyword.find({ id: id });
      console.log("query: ", query);

      if (!query.length) {
        const Doc = new keyword(param);
        const doc = await Doc.save();

        console.log("New Record Created ");
      } else {
        let filter = {};
        filter.id = id;

        let doc = await keyword.findOneAndUpdate(filter, param);
      }
    } else {
      const { keywordid } = req.body;
      let filter = {};
      if (keywordid) {
        filter.id = keywordid;
      }

      let doc = await keyword.findOneAndUpdate(filter, param);
    }

    res.json("Updated");
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
  }
};
