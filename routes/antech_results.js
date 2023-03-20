const express = require("express");
const router = express.Router();

const _antech_results = require("../controllers/antech_results");

router.post("/update", _antech_results.update);

module.exports = router;
