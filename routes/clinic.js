const express = require("express");
const router = express.Router();

const _clinic = require("../controllers/clinic");

router.post("/update", _clinic.update);

module.exports = router;
