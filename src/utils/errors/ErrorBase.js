const Responser = require("../helpers/Responser.js");

class ErrorBase extends Error {
  constructor(message = "Erro interno do servidor", status = 500) {
    super();
    this.message = message;
    this.status = status;
  }

  send(res) {
    return new Responser(res).status(this.status).json({
      message: this.message,
      status: this.status,
    });
  }
}

module.exports = ErrorBase;
