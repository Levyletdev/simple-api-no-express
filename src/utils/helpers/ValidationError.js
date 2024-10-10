const Responser = require("./Responser.js");

class ValidationError {
  constructor({ message, status}) {
    this.message = message || "Validation Error.";
    this.status = status || 400;
  }

  report(res) {
    return new Responser(res).status(this.status).json(this);
  }
}

module.exports = ValidationError;
