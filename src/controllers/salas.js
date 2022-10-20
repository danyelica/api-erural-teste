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

const listingThisRoom = async (req, res) => {
  const { url } = req.params;

  try {
    const details = await knex("salas").where("url", url).returning("*");

    const users = await knex("participantes")
      .where("sala_id", details[0].id)
      .returning("*");

    return res.status(200).json({ ...details[0], users });
  } catch (error) {
    return res
      .status(500)
      .json({ mensagem: "Erro interno no servidor", erro: error.message });
  }
};

const creatingRoom = async (req, res) => {
  const { video, url } = req.body;
  try {
    const room = await knex("salas")
      .insert({ video, url })
      .returning(["id", "video", "url"]);

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

    return res.status(200).json(updatedRoom);
  } catch (error) {
    return res
      .status(500)
      .json({ mensagem: "Erro interno no servidor", erro: error.message });
  }
};

module.exports = {
  listingRooms,
  listingThisRoom,
  creatingRoom,
  updatingRoom,
};
