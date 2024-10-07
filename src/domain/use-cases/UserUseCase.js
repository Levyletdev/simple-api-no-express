const User = require("../entities/User.js");

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
    console.log(user);
    return this.userRepository.create(user);
  }

  async updateById(dto, id) {
    const user = new User(dto);
    return this.userRepository.updateById(dto, id);
  }

  async deleteById(id) {
    return this.userRepository.deleteById(id);
  }
}

module.exports = UserUseCase;
