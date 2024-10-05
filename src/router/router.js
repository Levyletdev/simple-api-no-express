const rootRoute = require("./rootRoute");

function router(req, res) {
  const { url } = req;
  if (url === "/") return rootRoute(req, res);
}

module.exports = router;
