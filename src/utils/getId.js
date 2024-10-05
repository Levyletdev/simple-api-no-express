const getParams = require("./getParams");

function getId(req) {
  const [endpoint, id] = getParams(req);
  return id;
}

module.exports = getId;
