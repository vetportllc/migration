const express = require("express");
const router = express.Router();

const _planitem = require("../controllers/planitem");

router.post("/update", _planitem.update);

module.exports = router;
