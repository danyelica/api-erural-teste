require("dotenv").config();
const express = require("express");
const cors = require("cors");
const knex = require("./connection/connection");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const salas = await knex("salas");
    return res.status(200).json(salas);
  } catch (error) {
    res.json({ mensagem: "Erro interno no servidor" });
  }
});

app.listen(process.env.PORT || 3000);
