const express = require("express");
const router = express.Router();

const _vendoritems= require("../controllers/vendoritems");

router.post("/update",_vendoritems.update);

module.exports = router;
