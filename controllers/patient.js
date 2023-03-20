const patient = require("../models/patients");

exports.create = async (req, res) => {
  try {
    const body = req.body;
    //console.log("req : ", req);
    const Doc = new patient(body);
    const doc = await Doc.save();
    res.json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a Doc by the id in the request
exports.update = async (req, res) => {
  try {
    const { id } = req.body;
    if (id) {
      let query = await patient.find({ id: id });
      console.log("query: ", query);

      if (!query.length) {
        const body = req.body;
        const Doc = new patient(body);
        const doc = await Doc.save();

        console.log("New Record Created ");
      } else {
        let filter = {};
        filter.id = id;

        const body = req.body;
        let doc = await patient.findOneAndUpdate(filter, body);
      }
    } else {
      const { patientid } = req.body;
      console.log("patientid: ", patientid);
      let filter = {};
      if (patientid) {
        filter.id = patientid;
      }

      const body = req.body;
      let doc = await patient.findOneAndUpdate(filter, body);
    }

    res.json("Updated");
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
  }
};
