const express = require("express");
const router = express.Router();

const _plancost = require("../controllers/plancost");

router.post("/update", _plancost.update);

module.exports = router;
