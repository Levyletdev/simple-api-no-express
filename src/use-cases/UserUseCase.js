class UserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async getAll() {
    return this.userRepository.getAll()
  }

  async create(dto) {
    
    return this.userRepository.create()
  }
}
