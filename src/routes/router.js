const express = require("express");
const router = express.Router();
const { listandoSalas, criandoSala } = require("../controllers/salas");

router.get("/", listandoSalas);

module.exports = router;
