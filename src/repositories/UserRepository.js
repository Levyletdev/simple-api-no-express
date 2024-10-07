const SequelizeRepository = require("./SequelizeRepository.js");

class UserRepository extends SequelizeRepository {
  constructor() {
    super("User");
  }
}

module.exports = UserRepository;
