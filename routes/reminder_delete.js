const express = require("express");
const router = express.Router();

const _reminder_delete = require("../controllers/reminder_delete");

router.post("/update", _reminder_delete.update);

module.exports = router;
