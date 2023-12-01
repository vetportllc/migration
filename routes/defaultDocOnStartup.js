const express = require("express");
const router = express.Router();

const _defaultDocOnStartup = require("../controllers/defaultDocOnStartup");

router.post("/pushData", _defaultDocOnStartup.pushData);

module.exports = router;
