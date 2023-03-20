const express = require("express");
const router = express.Router();

const _admit_patient = require("../controllers/admit_patient");

// router.post("/add", _admit_patient.create);
// router.get("/", _admit_patient.findAll);

router.post("/update", _admit_patient.update);

module.exports = router;
