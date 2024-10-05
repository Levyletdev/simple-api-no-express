const User = require("../entity/User.js");

class UserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async getAll() {
    return this.userRepository.getAll();
  }

  async getById(id) {
    return this.userRepository.getById(id);
  }

  async createUser(dto) {
    const user = new User(dto);
    return this.userRepository.create(user);
  }
}

module.exports = UserUseCase;
