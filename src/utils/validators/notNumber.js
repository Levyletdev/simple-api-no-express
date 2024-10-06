const isNumber = require("./isNumber.js");

function notNumber(value) {
  return !isNumber(value);
}

module.exports = notNumber;
