const express = require("express");
const router = express.Router();

const _antech_planitem = require("../controllers/antech_planitem");

router.post("/update", _antech_planitem.update);

module.exports = router;
