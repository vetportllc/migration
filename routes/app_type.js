const express = require("express");
const router = express.Router();

const _app_type = require("../controllers/app_type");

router.post("/update", _app_type.update);

module.exports = router;
