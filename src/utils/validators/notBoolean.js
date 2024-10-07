const isBoolean = require("./isBoolean.js");

function notBoolean(value) {
  return !isBoolean(value);
}

module.exports = notBoolean;
