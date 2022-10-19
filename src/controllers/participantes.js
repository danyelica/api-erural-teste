const knex = require("../connection/connection");

const creatingUser = async (req, res) => {
  const { usuario, host, id } = req.body;
  let verifyHost = false;

  if (host) {
    verifyHost = host;
  }

  try {
    const user = await knex("participantes")
      .insert({ usuario, host: verifyHost, sala_id: id })
      .returning(["usuario", "sala_id"]);

    return res.status(201).json(user);
  } catch (error) {
    return res
      .status(500)
      .json({ mensagem: "Erro interno no servidor", erro: error.message });
  }
};

module.exports = { creatingUser };
