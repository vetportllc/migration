const express = require("express");
const router = express.Router();

const _template_master =require("../controllers/template_master");

router.post("/update",_template_master.update);

module.exports = router;
