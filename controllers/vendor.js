const vendor = require("../models/vendor");
const vendortype = require("../models/vendortype");
const phonetype = require("../models/phonetype");

// Update a Doc by the id in the request
exports.update = async (req, res) => {
  try {
    const { id } = req.body;

    let queryvendortype = await vendortype.find({ id: req.body.vendortypeid });
    let queryphonetype = await phonetype.find({ id: req.body.phonetypeid });

    let param = {
      id: id,
      recordID: req.body.recordID,
      name: req.body.name,
      vendorType: queryvendortype[0]._id,
      phoneType: queryphonetype[0]._id,
      pnumber: req.body.phone,
      country: req.body.country,
      email: req.body.email,
      fax: req.body.fax,
      accountNo: req.body.account_no,
      state: req.body.state,
      city: req.body.city,
      zipcode: req.body.zipcode,
      status: req.body.status,
      address: req.body.address,
      website: req.body.website,
      note: req.body.note,
      createdAt: req.body.createdon,
      updatedAt: req.body.modifiedon,
    };

    if (id) {
      let query = await vendor.find({ id: id });
      console.log("query: ", query);

      if (!query.length) {
        const Doc = new vendor(param);
        const doc = await Doc.save();

        console.log("New Record Created ");
      } else {
        let filter = {};
        filter.id = id;

        let doc = await vendor.findOneAndUpdate(filter, param);
      }
    } else {
      const { vendorid } = req.body;
      let filter = {};
      if (vendorid) {
        filter.id = vendorid;
      }

      let doc = await vendor.findOneAndUpdate(filter, param);
    }

    res.json("Updated");
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
  }
};
