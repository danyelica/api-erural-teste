const express = require("express");
const router = express.Router();
const {
  listingRooms,
  listingUsersInThisRoom,
  creatingRoom,
  updatingRoom,
} = require("./controllers/salas");
const { creatingUser } = require("./controllers/participantes");

router.get("/salas", listingRooms);
router.get("/salas/:id", listingUsersInThisRoom);
router.post("/salas", creatingRoom);
router.put("/salas/:id", updatingRoom);

router.post("/participantes", creatingUser);

module.exports = router;
