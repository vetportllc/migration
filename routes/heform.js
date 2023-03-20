const express = require("express");
const router = express.Router();

const _heform= require("../controllers/heform");

router.post("/update",_heform.update);

module.exports = router;
