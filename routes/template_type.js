const express = require("express");
const router = express.Router();

const _template_type=require("../controllers/template_type");

router.post("/update",_template_type.update);

module.exports = router;
