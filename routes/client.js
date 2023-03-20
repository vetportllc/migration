const express = require("express");
const router = express.Router();

const _client = require("../controllers/client");

router.post("/add", _client.create);
router.get("/", _client.findAll);
router.post("/update", _client.update);

module.exports = router;
