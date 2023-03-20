const express = require("express");
const router = express.Router();

const _remindergrp = require("../controllers/remindergrp");

router.post("/update", _remindergrp.update);

module.exports = router;
