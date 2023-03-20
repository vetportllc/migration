const express = require("express");
const router = express.Router();

const _vitem_clinic= require("../controllers/vitem_clinic");

router.post("/update",_vitem_clinic.update);

module.exports = router;
