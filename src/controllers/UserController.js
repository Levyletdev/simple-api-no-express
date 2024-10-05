const Controller = require("./Controller.js");
const Responser = require("../helpers/Responser.js");
const getRequestBody = require("../utils/getRequestBody.js");

class UserController extends Controller {
  constructor(userUseCase) {
    super(userUseCase);
  }

  async createUser(req, res) {
    try {
      const body = await getRequestBody(req);
      const parsedBody = JSON.parse(body);
      const user = await this.userUseCase.createUser(parsedBody);
      if (!user) return new Responser(res).status(400).json({ message: "Requisição incorreta", user: user });
      return new Responser(res).status(201).json({ message: "Usuário cadastrado com sucesso", usuario: user });
    } catch (error) {
      return new Responser(res).status(500).json({ message: error.message });
    }
  }
}

module.exports = UserController;
