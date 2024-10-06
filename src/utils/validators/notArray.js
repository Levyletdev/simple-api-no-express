const isArray = require("./isArray.js");

function notArray(value) {
  return !isArray(value);
}

module.exports = notArray;
