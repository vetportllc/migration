const express = require("express");
const router = express.Router();

const _instance = require("../controllers/instance");

router.post("/update", _instance.update);

module.exports = router;
