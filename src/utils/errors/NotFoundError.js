const ErrorBase = require("./ErrorBase.js");

class NotFoundError extends ErrorBase {
  constructor() {
    super("Pagína não localizada", 404);
  }
}

module.exports = NotFoundError;
