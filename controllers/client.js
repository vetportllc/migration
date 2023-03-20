const client = require("../models/client");

exports.create = async (req, res) => {
  try {
    const body = req.body;
    //console.log("req : ", req);
    const Doc = new client(body);
    const doc = await Doc.save();
    res.json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Docs from the database.
exports.findAll = async (req, res) => {
  try {
    let docs = await client.find({});
    res.json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update a Doc by the id in the request
exports.update = async (req, res) => {
  try {
    const { id } = req.body;
    console.log("req.body => ", req.body);

    if (id) {
      let query = await client.find({ id: id });
      console.log("query: ", query);

      if (!query.length) {
        const body = req.body;
        const Doc = new client(body);
        const doc = await Doc.save();

        console.log("New Record Created ");
      } else {
        let filter = {};
        filter.id = id;

        const body = req.body;
        let doc = await client.findOneAndUpdate(filter, body);
      }
    } else {
      const { clientid } = req.body;
      let filter = {};
      if (clientid) {
        filter.id = clientid;
      }

      const body = req.body;
      let doc = await client.findOneAndUpdate(filter, body);
    }

    res.json("Updated");
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
  }
};
