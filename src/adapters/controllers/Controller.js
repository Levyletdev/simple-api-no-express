const getId = require("../../utils/helpers/getId.js");
const Responser = require("../../utils/helpers/Responser.js");

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

  async getById(req, res) {
    try {
      const id = getId(req);
      const record = await this.useCase.getById(Number(id));
      if (!record)
        return new Responser(res).status(400).json({
          message: "ID do registro não localizado",
        });
      return new Responser(res).status(200).json(record);
    } catch (error) {
      return new Responser(res).status(500).json({ message: error.message });
    }
  }

  async deleteById(req, res) {
    try {
      const id = getId(req);

      const deletedRecord = await this.useCase.deleteById(Number(id));

      if (!deletedRecord)
        return new Responser(res).status(400).json({
          message: "ID do registro não localizado",
        });

      return new Responser(res).status(200).json({
        message: "Registro removido com sucesso",
      });
    } catch (error) {
      return new Responser(res).status(500).json({ message: error.message });
    }
  }
}

module.exports = Controller;
