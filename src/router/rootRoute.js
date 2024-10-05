const Responser = require("../helpers/Responser.js");

function rootRoute(req, res) {
  return new Responser(res).status(200).json({ message: "Rota raiz escutando" });
}

module.exports = rootRoute;
