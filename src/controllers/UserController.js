const Controller = require("./Controller.js");

class UserController extends Controller {
  constructor(userUseCase) {
    super(userUseCase);
  }
}

module.exports = UserController;
