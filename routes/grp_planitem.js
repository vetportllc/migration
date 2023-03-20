const express = require("express");
const router = express.Router();

const _grp_planitem = require("../controllers/grp_planitem");

router.post("/update", _grp_planitem.update);

module.exports = router;
