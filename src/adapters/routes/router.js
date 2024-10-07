const rootRoute = require("./rootRoute.js");
const userRoutes = require("./userRoutes.js");
const errorHandler = require("../../utils/handlers/errorHandler.js");

function router(req, res, handler = errorHandler) {
  const { url } = req;
  if (url === "/") return rootRoute(req, res);
  if (url.startsWith("/users")) return userRoutes(req, res, handler);
}

module.exports = router;
