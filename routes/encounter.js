const express = require("express");
const router = express.Router();

const _encounter = require("../controllers/encounter");

router.post("/update", _encounter.update);

module.exports = router;
