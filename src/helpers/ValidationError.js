const Responser = require("./Responser.js");

class ValidationError {
  constructor({ message, name, status, path, value }) {
    this.message = message || "Alguns dados fornecidos são iválidos";
    this.status = status || 200;
    this.name = name;
    this.path = path;
    this.value = value;
  }

  report(res) {
    return new Responser(res).status(this.status).json(this);
  }
}

module.exports = ValidationError;
