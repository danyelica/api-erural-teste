require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./router");

const {
  listingRooms,
  creatingRoom,
  updatingRoom,
} = require("./controllers/salas");
const { creatingUser } = require("./controllers/participantes");

const app = express();

app.use(cors());
app.use(express.json());
app.get("/salas", listingRooms);
app.get("/salas/:id", listingUsersInThisRoom);
app.post("/salas", creatingRoom);
app.put("/salas/:id", updatingRoom);

app.post("/participantes", creatingUser);

app.listen(process.env.PORT || 3000);
