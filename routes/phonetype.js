const express = require("express");
const router = express.Router();

const _phonetype = require("../controllers/phonetype");

router.post("/update", _phonetype.update);

module.exports = router;
