const express = require("express");
const router = express.Router();

const _template_key_map =require("../controllers/template_key_map");

router.post("/update",_template_key_map.update);

module.exports = router;
