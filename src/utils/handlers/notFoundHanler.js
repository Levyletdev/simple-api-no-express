const errorHandler = require("./errorHandler.js");
const NotFoundError = require("../errors/notFoundError.js");

function notFoundHandler(res) {
  const error404 = new NotFoundError();
  return errorHandler(error404, res);
}

module.exports = notFoundHandler;
