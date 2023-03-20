const express = require("express");
const router = express.Router();

const _reminderplan = require("../controllers/reminderplan");

router.post("/update", _reminderplan.update);

module.exports = router;
