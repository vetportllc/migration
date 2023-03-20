const express = require("express");
const router = express.Router();

const _plantype = require("../controllers/plantype");

router.post("/update", _plantype.update);

module.exports = router;
