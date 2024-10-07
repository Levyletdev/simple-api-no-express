const SequelizeRepository = require("./SequelizeRepository.js");

class UserRepository extends SequelizeRepository {
  constructor() {
    super("Use");
  }
}

module.exports = UserRepository;
