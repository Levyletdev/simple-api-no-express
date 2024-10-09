const rootRoute = require("./rootRoute.js");
const userRoutes = require("./userRoutes.js");
const errorHandler = require("../../utils/handlers/errorHandler.js");
const notFoundHandler = require("../../utils/handlers/notFoundHanler.js");

function router(req, res, handler = errorHandler, reject = notFoundHandler) {
  const { url } = req;
  if (url === "/") return rootRoute(req, res, handler, reject);
  if (url.startsWith("/users")) return userRoutes(req, res, handler, reject);
  reject(res);
}

module.exports = router;
