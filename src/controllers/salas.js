const knex = require("../connection/connection");

const listandoSalas = async (req, res) => {
  try {
    const salas = knex("salas");
    res.status(201).json(salas);
  } catch (error) {
    res.json({ mensagem: "Erro interno no servidor", erro: error.message });
  }
};

const criandoSala = async (req, res) => {
  const { video } = req.body;
  try {
    const sala = knex("salas").insert(video).returning(["id", "video"]);
    res.status(201).json(sala);
  } catch (error) {
    res.json({ mensagem: "Erro interno no servidor", erro: error.message });
  }
};

module.exports = { listandoSalas, criandoSala };
