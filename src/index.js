require("dotenv").config();
const express = require("express");
const cors = require("cors");

/*const {
  listingRooms,
  creatingRoom,
  updatingRoom,
} = require("./controllers/salas");
const { creatingUser } = require("./controllers/participantes");*/
const router = require("./router");

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

/*app.get("/salas", listingRooms);
app.get("/salas/:id", listingUsersInThisRoom);
app.post("/salas", creatingRoom);
app.put("/salas/:id", updatingRoom);

app.post("/participantes", creatingUser);*/

app.listen(process.env.PORT || 3000);
