const express = require("express");
const router = express.Router();

const _status = require("../controllers/status");

router.post("/update", _status.update);

module.exports = router;
