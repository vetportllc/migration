const express = require("express");
const router = express.Router();

const _keyword = require("../controllers/keyword");

router.post("/update",_keyword.update);

module.exports = router;
