const url = require("url");

function getParams(req) {
  const parsedUrl = url.parse(req.url);
  const pathname = parsedUrl.pathname;
  const segments = pathname.split("/").filter(Boolean);
  return segments;
}

module.exports = getParams;
