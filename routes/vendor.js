const express = require("express");
const router = express.Router();

const _vendor= require("../controllers/vendor");

router.post("/update",_vendor.update);

module.exports = router;
