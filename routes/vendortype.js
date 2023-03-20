const express = require("express");
const router = express.Router();

const _vendortype = require("../controllers/vendortype");

router.post("/update", _vendortype.update);

module.exports = router;
