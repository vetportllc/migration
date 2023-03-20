const express = require("express");
const router = express.Router();

const _antech_species = require("../controllers/antech_species");

router.post("/update", _antech_species.update);

module.exports = router;
