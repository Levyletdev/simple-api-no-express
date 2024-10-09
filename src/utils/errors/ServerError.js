const ErrorBase = require("./ErrorBase.js");

class ServerError extends ErrorBase {
  constructor(error) {
    const message = `Erro interno do servidor: ${error.message}`;
    super(message);
  }
}

module.exports = ServerError;
