const express = require("express");
const router = express.Router();

const _grp_plan_map = require("../controllers/grp_plan_map");

router.post("/update", _grp_plan_map.update);

module.exports = router;
