const rootRoute = require("./rootRoute.js");
const userRoutes = require("./userRoutes.js");

function router(req, res) {
  const { url } = req;
  if (url === "/") return rootRoute(req, res);
  if (url.startsWith("/users")) return userRoutes(req, res);
}

module.exports = router;
