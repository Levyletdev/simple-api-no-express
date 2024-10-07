const Controller = require("./Controller.js");
const Responser = require("../../utils/helpers/Responser.js");
const getRequestBody = require("../../utils/helpers/getRequestBody.js");

class UserController extends Controller {
  constructor(userUseCase) {
    super(userUseCase);
  }

  async createUser(req, res, handler) {
    try {
      const body = await getRequestBody(req);
      const parsedBody = JSON.parse(body);
      const user = await this.useCase.createUser(parsedBody);
      if (!user) return new Responser(res).status(400).json({ message: "Requisição incorreta", user: user });
      return new Responser(res).status(201).json({ message: "Usuário cadastrado com sucesso", usuario: user });
    } catch (error) {
      return handler(error, res);
    }
  }
}

module.exports = UserController;
