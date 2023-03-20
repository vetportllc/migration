const vendoritems = require("../models/vendoritems");

// Update a Doc by the id in the request
exports.update = async (req, res) => {
  try {
    const { id } = req.body;

    let param = {
      id: id,
      recordID: req.body.recordID,
      vendor: req.body.vendorid,
      vendorItem: req.body.name,
      manufacturer: req.body.manufacturerid,
      packtypeId: req.body.packtypeid,
      packcontentId: req.body.packcontentid,
      package_size: req.body.package_size,
      price: req.body.price,
      threshold_qty: req.body.threshold_qty,
      reorder_qty: req.body.reorder_qty,
      itemCode: "",
      upcCode: req.body.upc,
      din: req.body.DIN,
      sku: req.body.sku,
      hsnCode: req.body.hsn,
      isMfg: req.body.ismanufacturer,
      serial_lotno: "",
      manufactureDate: "",
      expiryDate: "",
      isVetcove: req.body.isvetcove,
      status: req.body.status,
      createdAt: req.body.createdon,
      updatedAt: req.body.modifiedon,
    };

    if (id) {
      let query = await vendoritems.find({ id: id });
      console.log("query: ", query);

      if (!query.length) {
        const Doc = new vendoritems(param);
        const doc = await Doc.save();

        console.log("New Record Created ");
      } else {
        let filter = {};
        filter.id = id;

        let doc = await vendoritems.findOneAndUpdate(filter, param);
      }
    } else {
      const { vendoritemid } = req.body;
      let filter = {};
      if (vendoritemid) {
        filter.id = vendoritemid;
      }

      let doc = await vendoritems.findOneAndUpdate(filter, param);
    }

    res.json("Updated");
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
  }
};
