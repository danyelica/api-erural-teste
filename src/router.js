const express = require("express");
const router = express.Router();
const {
  listingRooms,
  listingThisRoom,
  creatingRoom,
  updatingRoom,
} = require("./controllers/salas");
const { creatingUser } = require("./controllers/participantes");

router.get("/salas", listingRooms);
router.get("/salas/:id", listingThisRoom);
router.post("/salas", creatingRoom);
router.put("/salas/:id", updatingRoom);

router.post("/participantes", creatingUser);

module.exports = router;
