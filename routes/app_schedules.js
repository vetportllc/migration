const express = require("express");
const router = express.Router();

const _app_schedules = require("../controllers/app_schedules");

router.post("/update", _app_schedules.update);

module.exports = router;
