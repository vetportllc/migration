const express = require("express");
const router = express.Router();

const _template = require("../controllers/template");

router.post("/update", _template.update);

module.exports = router;
