const express = require("express");
const router = express.Router();

const _antech_breed = require("../controllers/antech_breed");

router.post("/update", _antech_breed.update);

module.exports = router;
