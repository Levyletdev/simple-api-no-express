const InverseTypeError = require("./InverseTypeError.js");

class InverseNumberError extends InverseTypeError {
  constructor(value) {
    super("number", value);
  }
}

module.exports = InverseNumberError;
