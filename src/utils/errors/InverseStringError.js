const InverseTypeError = require("./InverseTypeError.js");

class InverseStringError extends InverseTypeError {
  constructor(value) {
    super("string", value);
  }
}

module.exports = InverseStringError;
