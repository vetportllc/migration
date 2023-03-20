const express = require("express");
const router = express.Router();

const _etemplate= require("../controllers/etemplate");

router.post("/update",_etemplate.update);

module.exports = router;
