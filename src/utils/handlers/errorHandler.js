const ServerError = require("../errors/ServerError.js");
const NotFoundError = require("../errors/notFoundError.js");
const ValidationError = require("../helpers/ValidationError.js");

function errorHandler(error, res) {
  if (error instanceof ValidationError) return error.report(res);
  if (error instanceof NotFoundError) return error.send(res);
  return new ServerError(error).send(res);
}

module.exports = errorHandler;
