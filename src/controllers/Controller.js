const Responser = require("../helpers/Responser");

class Controller {
  constructor(entityUseCase) {
    this.useCase = entityUseCase;
  }

  async getAll(req, res) {
    try {
      const recordList = await this.useCase.getAll();
      return new Responser(res).status(200).json(recordList);
    } catch (error) {
      return new Responser(res).status(500).json({ message: error.message });
    }
  }
}

module.exports = Controller;
