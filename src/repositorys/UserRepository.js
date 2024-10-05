const SequelizeRepository = require("./sequelizeRepository.js");

class UserRepository extends SequelizeRepository {
  constructor() {
    super("User");
  }
}

module.exports = UserRepository;
