const getId = require("../../utils/helpers/getId.js");
const Responser = require("../../utils/helpers/Responser.js");

class Controller {
  constructor(entityUseCase) {
    this.useCase = entityUseCase;
  }

  async getAll(req, res, handler) {
    try {
      const recordList = await this.useCase.getAll();
      return new Responser(res).status(200).json(recordList);
    } catch (error) {
      return handler(error, res);
    }
  }

  async getById(req, res, handler) {
    try {
      const id = getId(req);
      const record = await this.useCase.getById(Number(id));
      if (!record)
        return new Responser(res).status(400).json({
          message: "ID do registro não localizado",
        });
      return new Responser(res).status(200).json(record);
    } catch (error) {
      return handler(error, res);
    }
  }

  async deleteById(req, res, handler) {
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
      return handler(error, res);
    }
  }
}

module.exports = Controller;
