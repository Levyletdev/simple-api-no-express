const getParams = require("../../utils/helpers/getParams.js");
const UserController = require("../controllers/UserController.js");
const UserUseCase = require("../../domain/use-cases/UserUseCase.js");
const UserRepository = require("../../repositories/UserRepository.js");

const userRepository = new UserRepository();
const userUseCase = new UserUseCase(userRepository);
const userController = new UserController(userUseCase);

function userRoutes(req, res, handler, reject) {
  const { url, method } = req;
  const [endpoint, id] = getParams(req);
  const route = "/users";

  if (url === route && method === "GET") return userController.getAll(req, res, handler);
  if (url === route && method === "POST") return userController.createUser(req, res, handler);
  if (endpoint === "users" && method === "GET") return userController.getById(req, res, handler);
  if (endpoint === "users" && method === "DELETE") return userController.deleteById(req, res, handler);
  return reject(res);
}

module.exports = userRoutes;
