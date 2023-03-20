const express = require("express");
const router = express.Router();

const _plancategory = require("../controllers/plancategory");

router.post("/update", _plancategory.update);

module.exports = router;
