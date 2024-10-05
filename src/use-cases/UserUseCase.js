const User = require("../entity/User.js");

class UserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async getAllUsers() {
    return this.userRepository.getAll();
  }

  async createUser(dto) {
    const user = new User(dto);
    return this.userRepository.create(user);
  }
}

module.exports = UserUseCase;
