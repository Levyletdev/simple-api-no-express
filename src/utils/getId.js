const getParams = require("./getParams");

function getId(req) {
  const [endpoint, id] = getParams(req);
  if (id === "undefined") return null;
  return id;
}

module.exports = getId;
