const express = require("express");
const router = express.Router();

const _plansubcategory = require("../controllers/plansubcategory");

router.post("/update", _plansubcategory.update);

module.exports = router;
