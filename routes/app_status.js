const express = require("express");
const router = express.Router();

const _app_status = require("../controllers/app_status");

router.post("/update", _app_status.update);

module.exports = router;
