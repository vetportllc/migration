const express = require("express");
const router = express.Router();

const _appoint_view = require("../controllers/appoint_view");

router.post("/update", _appoint_view.update);

module.exports = router;
