const isIn = require("./isIn.js");

function notIn(value, array) {
  return !isIn(value, array);
}

module.exports = notIn;
