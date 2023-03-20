const express = require("express");
const router = express.Router();

const _patient = require("../controllers/patient");

router.post("/update", _patient.update);

module.exports = router;
