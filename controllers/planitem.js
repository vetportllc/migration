// const planitem = require("../models/planitem");

// // Update a Doc by the id in the request
// exports.update = async (req, res) => {
//   try {
//     const { id } = req.body;
//     if (id) {
//       let query = await planitem.find({ id: id });
//       console.log("query: ", query);

//       if (!query.length) {
//         const body = req.body;
//         console.log("body.subcategoryid: ", body.subcategoryid);

//         const Doc = new planitem(body);
//         const doc = await Doc.save();

//         console.log("New Record Created ");
//       } else {
//         let filter = {};
//         filter.id = id;

//         const body = req.body;
//         let doc = await planitem.findOneAndUpdate(filter, body);
//       }
//     } else {
//       const { planitemid } = req.body;
//       let filter = {};
//       if (planitemid) {
//         filter.id = planitemid;
//       }

//       const body = req.body;
//       let doc = await planitem.findOneAndUpdate(filter, body);
//     }

//     res.json("Updated");
//   } catch (error) {
//     res.status(500).json(error);
//     console.log("error: ", error);
//   }
// };

const planitem = require("../models/planitem");
const plansubcategory = require("../models/plansubcategory");
const plancategory = require("../models/plancategory");
const status = require("../models/status");
const remindergrp = require("../models/remindergrp");

// Update a Doc by the id in the request
exports.update = async (req, res) => {
  try {
    const { id } = req.body;

    let querysubcat = await plansubcategory.find({
      id: req.body.subcategoryid,
    });

    //let querycat = await plancategory.find({ id: querysubcat[0].categoryid }).select("_id categoryid subcategoryid");
    let querycat = await plancategory.find({ id: querysubcat[0].categoryid });
    let querystatus = await status.find({ id: req.body.pricing_stgy });
    //let querystatus2 = await status.find({ id: req.body.status }).lean();
    let querystatus2 = await status.find({ id: req.body.status });
    let queryreminder = await remindergrp.find({ id: req.body.remgrpid });

    let param = {
      id: id,
      recordID: req.body.recordID,
      pricingStrategy: querystatus[0].recordID,
      planItem: req.body.planitem,
      category: querycat[0]._id,
      subCategory: querysubcat[0]._id,
      unit: null,
      lower: req.body.lower,
      upper: req.body.upper,
      species: req.body.speciesid,
      breed: req.body.breedid,
      status: querystatus2[0].recordID,
      remGrpId: queryreminder[0]._id,
      createdAt: req.body.createdon,
      updatedAt: req.body.modifiedon,
      displayName: req.body.planitem,
    };

    console.log("param: ", param);

    if (id) {
      let query = await planitem.find({ id: id });

      if (!query.length) {
        //const Doc = new planitem(body);
        const Doc = new planitem(param);
        const doc = await Doc.save();

        console.log("New Record Created ");
      } else {
        let filter = {};
        filter.id = id;

        //let doc = await planitem.findOneAndUpdate(filter, body);
        let doc = await planitem.findOneAndUpdate(filter, param);
      }
    } else {
      const { planitemid } = req.body;
      let filter = {};
      if (planitemid) {
        filter.id = planitemid;
      }

      //let doc = await planitem.findOneAndUpdate(filter, body);
      let doc = await planitem.findOneAndUpdate(filter, param);
    }

    res.json("Updated");
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
  }
};
