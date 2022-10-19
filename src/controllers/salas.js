const knex = require("../connection/connection");

const listingRooms = async (req, res) => {
  try {
    const rooms = await knex("salas");

    return res.status(200).json(rooms);
  } catch (error) {
    return res
      .status(500)
      .json({ mensagem: "Erro interno no servidor", erro: error.message });
  }
};

const listingUsersInThisRoom = async (req, res) => {
  const { id } = req.params;
  try {
    const users = await knex("participantes")
      .where("sala_id", id)
      .returning("*");

    return res.status(200).json(users);
  } catch (error) {
    return res
      .status(500)
      .json({ mensagem: "Erro interno no servidor", erro: error.message });
  }
};

const creatingRoom = async (req, res) => {
  const { video } = req.body;
  try {
    const room = await knex("salas")
      .insert({ video })
      .returning(["id", "video"]);

    return res.status(201).json(room);
  } catch (error) {
    return res
      .status(500)
      .json({ mensagem: "Erro interno no servidor", erro: error.message });
  }
};

const updatingRoom = async (req, res) => {
  const { video, usuario } = req.body;
  const { id } = req.params;

  try {
    const searchingUsuario = await knex("participantes")
      .where("usuario", usuario)
      .returning("*");

    if (!searchingUsuario[0].host) {
      return res
        .status(403)
        .json({ mensagem: "Desculpa, você não tem permissão para isso" });
    }

    const updatedRoom = await knex("salas")
      .update({ video })
      .where("id", id)
      .returning(["id", "video"]);

    return es.status(200).json(updatedRoom);
  } catch (error) {
    return res
      .status(500)
      .json({ mensagem: "Erro interno no servidor", erro: error.message });
  }
};

module.exports = {
  listingRooms,
  listingUsersInThisRoom,
  creatingRoom,
  updatingRoom,
};
