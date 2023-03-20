const admit_patient = require("../models/admit_patient");

// exports.create = async (req, res) => {
//   try {
//     const body = req.body;
//     const Doc = new admit_patient(body);
//     const doc = await Doc.save();
//     console.log("doc: ", doc);
//     res.json(doc);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// // Retrieve all Docs from the database.
// exports.findAll = async (req, res) => {
//   try {
//     let docs = await admit_patient.find({});
//     res.json(docs);
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// };

exports.update = async (req, res) => {
  try {
    const { id } = req.body;
    if (id) {
      let query = await admit_patient.find({ id: id });
      console.log("query: ", query);

      if (!query.length) {
        const body = req.body;
        const Doc = new admit_patient(body);
        const doc = await Doc.save();

        console.log("New Record Created ");
      } else {
        let filter = {};
        filter.id = id;

        const body = req.body;
        let doc = await admit_patient.findOneAndUpdate(filter, body);
      }
    } else {
      const { admit_patientid } = req.body;
      let filter = {};
      if (admit_patientid) {
        filter.id = admit_patientid;
      }

      const body = req.body;
      let doc = await admit_patient.findOneAndUpdate(filter, body);
    }

    res.json("Updated");
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
  }
};
