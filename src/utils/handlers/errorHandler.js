const ErrorBase = require("../errors/ErrorBase.js");
const ValidationError = require("../helpers/ValidationError.js");

function errorHandler(error, res) {
  if (error instanceof ValidationError) {
    return error.report(res);
  } else {
    return new ErrorBase(`Erro interno do servidor: ${error.message}`).send(res);
  }
}

module.exports = errorHandler;
