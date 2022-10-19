const express = require("express");
const router = express.Router();
const { listandoSalas, criandoSala } = require("../controllers/salas");

router.get("/salas", listandoSalas);
router.post("/salas", criandoSala);

module.exports = router;
