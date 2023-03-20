const template = require("../models/template");
const template_type = require("../models/template_type");

// Update a Doc by the id in the request
exports.update = async (req, res) => {
  try {
    const { id } = req.body;

    let dataTopush = {
      clinicId: "",
      content: req.body.html_content,
      headerDetails: {
        title: req.body.title,
        formType: "FORMS",
      },
    };

    let html = [];
    html.push(dataTopush);

    let querytemplate_type = await template_type.find({ id: req.body.type_id });
    console.log("req.body.type_id: ", req.body.type_id);
    console.log("querytemplate_type: ", querytemplate_type);

    let param = {
      id: id,
      recordID: req.body.recordID,
      template_id: querytemplate_type[0]._id,
      name: req.body.title,
      html: html,
    };

    if (id) {
      let query = await template.find({ id: id });
      console.log("query: ", query);

      if (!query.length) {
        const Doc = new template(param);
        const doc = await Doc.save();

        console.log("New Record Created ");
      } else {
        let filter = {};
        filter.id = id;

        let doc = await template.findOneAndUpdate(filter, param);
      }
    } else {
      const { templateid } = req.body;
      let filter = {};
      if (templateid) {
        filter.id = templateid;
      }

      let doc = await template.findOneAndUpdate(filter, param);
    }

    res.json("Updated");
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
  }
};
