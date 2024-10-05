const database = require("../database/models/index.js");

class SequelizeRepository {
  constructor(modelName) {
    this.model = modelName;
  }

  async getAll() {
    return database[this.model].findAll();
  }

  async getById(id) {
    return database[this.model].findByPk(id);
  }

  async getOne(filter) {
    return database[this.model].findOne({ where: filter });
  }

  async create(dto) {
    return database[this.model].create(dto);
  }

  async update(dto, id) {
    const isUpdated = await database[this.model].update(dto, { where: id });
    if (isUpdated[0] === 0) return false;
    return true;
  }

  async deleteById(id) {
    return database[this.model].destroy({ where: id });
  }
}

module.exports = SequelizeRepository;
