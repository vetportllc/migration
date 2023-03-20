const express = require("express");
const router = express.Router();

const _plan_action = require("../controllers/plan_action");

router.post("/update", _plan_action.update);

module.exports = router;
