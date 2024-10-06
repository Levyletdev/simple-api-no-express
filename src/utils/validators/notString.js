const isString = require("./isString.js");

function notString(value) {
  return !isString(value);
}

module.exports = notString;
