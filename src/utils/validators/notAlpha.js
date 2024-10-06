const isAlpha = require("./isAlpha.js");

function notAlpha(value) {
  return !isAlpha(value);
}

module.exports = notAlpha;
